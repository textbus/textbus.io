import { withScopedCSS } from '@viewfly/scoped-css'
import { inject, onMounted, createSignal } from '@viewfly/core'
import { delay, fromEvent } from '@tanbo/stream'
import { Link, Router } from '@viewfly/router'

import css from './anchor-links.scoped.scss'
import { ViewUpdateInjectionToken } from '../../pages/injection-tokens'

interface LinkConfig {
  source: HTMLElement
  link: string
  label: string
  level: string
}

export function AnchorLinks() {
  const subject = inject(ViewUpdateInjectionToken)
  const router = inject(Router)

  const links = createSignal<LinkConfig[]>([])
  const currentLink = createSignal<HTMLElement | null>(null)
  let hashChangeIsFromSelf = false

  function findCurrent() {
    let current: LinkConfig | null = null
    for (const item of links()) {
      const distance = item.source.getBoundingClientRect()
      if (distance.top < 100 && !hashChangeIsFromSelf) {
        current = item
      }
    }
    if (current) {
      currentLink.set(current.source)
    }
  }

  function scrollIntoView(link: LinkConfig, isInit = false) {
    currentLink.set(link.source)
    if (isInit) {
      setTimeout(() => {
        link.source.scrollIntoView()
        document.documentElement.scrollTop -= 80
      }, 300)
    } else {
      link.source.scrollIntoView()
      document.documentElement.scrollTop -= 80
    }

    setTimeout(() => {
      hashChangeIsFromSelf = false
    }, 400)
  }

  onMounted(() => {
    const subscription = fromEvent(window, 'scroll').subscribe(() => {
      findCurrent()
    })

    subscription.add(subject.pipe(delay(10)).subscribe((ev) => {
      if (!ev) {
        return
      }
      const newLinks = Array.from(ev.children).filter(i => {
        return location.pathname.indexOf('/api') === 0 ? /h[1-3]/i.test(i.tagName) : /h[1-6]/i.test(i.tagName)
      }).map((i) => {
        const text = (i as HTMLElement).innerText
        return {
          label: text,
          link: text.replace(/\s/g, '-'),
          source: i as HTMLElement,
          level: i.tagName.toLowerCase()
        }
      })

      links.set(newLinks)

      currentLink.set(newLinks[0].source)
    }))

    return () => subscription.unsubscribe()
  })


  return withScopedCSS(css, () => {
    return (
      <div class="anchor-links">
        {
          links().map(item => {
            return (
              <Link onClick={() => {
                setTimeout(() => scrollIntoView(item))
              }
              } class={['level-' + item.level, 'ui-anchor-link', {
                'ui-active': item.source === currentLink()
              }]} to={'.' + router.path} fragment={item.label}>
                <div class="ui-anchor-link-line"></div>
                {item.label}
              </Link>
            )
          })
        }
      </div>
    )
  })
}
