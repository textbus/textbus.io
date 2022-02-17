import { defineComponent, h, onMounted, ref } from 'vue'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin'

import { SlideService } from './slide.service'

export const UISlideItem = defineComponent({
  name: 'UISlideItem',
  setup (_, context) {
    const injector = useReflectiveInjector()
    const slideService = injector.get(SlideService)

    const el = ref<HTMLElement>()
    onMounted(() => {
      slideService.slideItems.push(el.value as HTMLElement)
    })
    return function () {
      return h('div', {
        ...context.attrs,
        ref: el
      }, context.slots.default?.())
    }
  }
})
