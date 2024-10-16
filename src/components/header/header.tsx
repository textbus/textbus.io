import { inject, onUnmounted, onMounted, createSignal } from '@viewfly/core'
import { withScopedCSS } from '@viewfly/scoped-css'
import { Link, Navigator } from '@viewfly/router'

import logo from '../../assets/logo.png'
import css from './header.scoped.scss'

export const showNavBtn = createSignal(false)

export function Header() {
  onMounted(() => {
    const fn = function () {
      showNavBtn.set(false)
    }
    document.addEventListener('click', fn)
    return () => {
      document.removeEventListener('click', fn)
    }
  })
  const navigator = inject(Navigator)
  const isShowNavBtn = createSignal(navigator.pathname.startsWith('/guide'))
  const sub = navigator.onUrlChanged.subscribe(() => {
    isShowNavBtn.set(navigator.pathname.startsWith('/guide'))
  })

  onUnmounted(() => {
    sub.unsubscribe()
  })
  return withScopedCSS(css, () => {
    return (
      <header class="header">
        <div class="nav ui-container">
          <div class="left">
            <Link class="logo-link" to="/">
              <img class="logo" src={logo} alt="log"/>
            </Link>
            <ul class="nav-links">
              <li><Link to="/" active="active" exact>首页</Link></li>
              <li><Link to="/guide" active="active">开发者文档</Link></li>
              <li><Link to="/api" active="active">API</Link></li>
              <li><Link to="/playground" active="active">在线协作</Link></li>
            </ul>
          </div>
          <div class="right">
            <ul class="nav-links">
              {/*<li><Link to="/api" active="active">官方扩展</Link></li>*/}
              {/*<li><Link to="/api" active="active">生态</Link></li>*/}
              <li><a href="https://github.com/textbus/textbus" target="_blank" class="github"><span>Github</span> <i class="bi-github"></i></a></li>
              {
                isShowNavBtn() ? <li class="nav-btn">
                  <button onClick={(ev) => {
                    ev.stopPropagation()
                    showNavBtn.set(!showNavBtn())
                  }} type="button"><i class="bi bi-list-ul"></i>
                  </button>
                </li> : null
              }

            </ul>
          </div>
        </div>
      </header>
    )
  })
}
