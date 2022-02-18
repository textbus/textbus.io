<script setup lang="ts">
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { DocService } from '@/services/doc.service';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { fromEvent } from '@tanbo/stream';

const injector = useReflectiveInjector()
const service = injector.get(DocService)

interface Link {
  source: HTMLElement
  link: string
  label: string
  level: string
}

let currentLink = ref<HTMLElement>()
const links: Link[] = reactive([])
let hashChangeIsFromSelf = false

const subs = [
  fromEvent(window, 'scroll').subscribe(() => {
    findCurrent()
  }),
  service.onUpdate.subscribe((ev) => {
    links.length = 0
    const headings = Array.from(ev.children).filter(i => {
      return /h[1-6]/i.test(i.tagName)
    })

    links.push(...headings.map((i) => {
      const text = (i as HTMLElement).innerText
      return {
        label: text,
        link: text.replace(/\s/g, '-'),
        source: i as HTMLElement,
        level: i.tagName.toLowerCase()
      }
    }))
    currentLink.value = links[0]?.source
  })
]

onUnmounted(() => {
  subs.forEach(i => i.unsubscribe())
})

function findCurrent() {
  let current: Link | null = null
  for (const item of links) {
    const distance = item.source.getBoundingClientRect();
    if (distance.top < 100 && !hashChangeIsFromSelf) {
      current = item
    }
  }
  if (current) {
    currentLink.value = current.source
  }
}

onMounted(() => {
  const hash = decodeURIComponent(location.hash.substring(1))
  if (hash) {
    for (const item of links) {
      if (item.link === hash) {
        hashChangeIsFromSelf = true
        scrollIntoView(item, true)
        return
      }
    }
  }
  if (!hash) {
    currentLink.value = links[0].source
  }
})

function scrollIntoView(link: Link, isInit = false) {
  currentLink.value = link.source
  if (isInit) {
    setTimeout(() => {
      link.source.scrollIntoView();
      document.documentElement.scrollTop -= 80;
    }, 300);
  } else {
    link.source.scrollIntoView();
    document.documentElement.scrollTop -= 80;
  }

  setTimeout(() => {
    hashChangeIsFromSelf = false;
  }, 400);
}
</script>
<template>
  <div class="anchor-links">
    <router-link class="ui-anchor-link"
                 @click="scrollIntoView(item)"
                 :class="{['level-' + item.level]: true, 'ui-active': item.source === currentLink}"
                 v-for="item in links" :to="'#' + item.link">
      <div class="ui-anchor-link-line"></div>
      {{ item.label }}
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
@import "../../scss/varibles";

.anchor-links {
  position: fixed;
  top: 100px;
  bottom: 0;
  width: 200px;
  margin-left: -30px;
  font-size: 15px;
}

.level-h2 {
  text-indent: .5em;
}

.level-h3 {
  text-indent: 1em;
}

.level-h4 {
  text-indent: 1.5em;
}

.level-h5 {
  text-indent: 2em;
}

.level-h6 {
  text-indent: 2.5em;
}

.ui-anchor-link {
  display: block;
  position: relative;
  color: inherit;
  text-decoration: none;
  line-height: 1.4em;
  padding-left: 1em;
  padding-top: .25em;
  padding-bottom: .25em;
  white-space: nowrap;

  &:first-of-type {
    .ui-anchor-link-line {
      top: calc(50%);
    }
  }

  &:last-of-type {
    .ui-anchor-link-line {
      bottom: calc(50%);
    }
  }

  &:before {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    left: -3px;
    top: calc(50% - 3px);
    z-index: 1;
  }

  &:hover {
    color: $color-primary;

    &:before {
      background-color: $color-gray;
    }
  }

  &.ui-active {
    font-weight: 600;
    color: $color-primary;

    &:before {
      background-color: $color-primary;
    }
  }
}

.ui-anchor-link-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: $color-light;
}

</style>
