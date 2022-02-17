import { defineComponent, PropType, h, reactive, onMounted, ref, onUnmounted } from 'vue'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin'
import { Type } from '@tanbo/di'
import { CubicBezier } from '@tanbo/bezier'

import { AnimatePlayer } from './animate-player'
import { SlideService } from './slide.service'
import { SlideHorizontal } from './players/slide-horizontal'
import { SlideVertical } from './players/slide-vertical'
import { FadeInout } from './players/fade-inout'

export type AnimationTimingFunction = 'ease' | 'linear' | 'ios' | 'ease-in' | 'ease-out' | 'ease-in-out'

export type AnimationParams = [number, number, number, number]

export type AnimationType = 'horizontal' | 'vertical' | 'fade-inout'

const animationConfig: Record<AnimationTimingFunction, AnimationParams> = {
  // eslint-disable-next-line no-magic-numbers
  ease: [0.25, 0.1, 0.25, 1],
  linear: [0, 0, 1, 1],
  // eslint-disable-next-line no-magic-numbers
  ios: [0.36, 0.66, 0.04, 1],
  // eslint-disable-next-line no-magic-numbers
  'ease-in': [0.42, 0, 1, 1],
  // eslint-disable-next-line no-magic-numbers
  'ease-out': [0, 0, 0.58, 1],
  // eslint-disable-next-line no-magic-numbers
  'ease-in-out': [0.42, 0, 0.58, 1]
}

export const UISlide = defineComponent({
  name: 'UISlide',
  props: {
    tagName: {
      type: String,
      default: 'div'
    },
    startIndex: {
      type: Number,
      default: 0
    },
    sleep: {
      type: Number,
      default: 4000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    animationTime: {
      type: Number,
      // eslint-disable-next-line no-magic-numbers
      default: 16 * 30
    },
    animationTimingFunction: {
      type: String as PropType<AnimationTimingFunction>,
      default: 'ease'
    },
    animationPlayer: {
      type: AnimatePlayer as Type<AnimatePlayer>,
      default: null
    },
    cubicBezier: {
      type: Array as PropType<Array<number>> as PropType<AnimationParams>,
      default: null
    },
    animationType: {
      type: String as PropType<AnimationType>,
      default: 'horizontal'
    }
  },
  setup (props) {
    const frames = Math.ceil(props.animationTime / 16)
    const animationParams: AnimationParams = props.cubicBezier || animationConfig[props.animationTimingFunction] || [0.36, 0.66, 0.04, 1]
    const bezier = new CubicBezier(...animationParams)
    const steps = Array.from({ length: frames }).fill(null).map((_, index) => {
      return bezier.update((index + 1) / frames).y
    })

    const viewModel = reactive({
      progress: props.startIndex,
      activeIndex: props.startIndex,
      slideItems: [] as HTMLElement[]
    })

    const slideContainer = ref<HTMLElement>()

    let canPlay = true
    let sleepTimer: number
    let animationId: number

    useReflectiveInjector([
      {
        provide: SlideService,
        useValue: viewModel
      }
    ])
    let player: AnimatePlayer
    onMounted(() => {
      const container = slideContainer.value as HTMLElement
      container.addEventListener('mouseenter', () => {
        clearTimeout(sleepTimer)
        canPlay = false
      })

      container.addEventListener('mouseleave', () => {
        canPlay = true
        start()
      })

      const items = viewModel.slideItems
      if (props.animationPlayer) {
        player = props.animationPlayer
      } else {
        switch (props.animationType) {
          case 'horizontal':
            player = new SlideHorizontal(container, items, props.startIndex)
            break
          case 'vertical':
            player = new SlideVertical(container, items, props.startIndex)
            break
          case 'fade-inout':
            player = new FadeInout(container, items, props.startIndex)
            break
          default:
            throw new Error('请设置正确的动画类型！')
        }
      }
      start()
    })

    function animate (offset: number) {
      if (viewModel.slideItems.length === 0) {
        return
      }
      let step = 0
      const fn = () => {
        viewModel.progress = (viewModel.activeIndex + steps[step] * offset + viewModel.slideItems.length) %
          viewModel.slideItems.length
        player.update(viewModel.progress)

        step++
        if (step < frames) {
          animationId = requestAnimationFrame(fn)
        } else {
          viewModel.activeIndex = (viewModel.activeIndex + offset + viewModel.slideItems.length) %
            viewModel.slideItems.length
          start()
        }
      }
      animationId = requestAnimationFrame(fn)
    }

    function prev () {
      clearTimeout(sleepTimer)
      if (viewModel.progress % 1 === 0) {
        animate(-1)
      }
    }

    function next () {
      clearTimeout(sleepTimer)
      if (viewModel.progress % 1 === 0) {
        animate(1)
      }
    }

    function start () {
      if (canPlay && props.autoplay) {
        clearTimeout(sleepTimer)
        sleepTimer = setTimeout(() => {
          if (props.reverse) {
            prev()
          } else {
            next()
          }
        }, props.sleep)
      }
    }

    function gotoIndex (index: number) {
      clearTimeout(sleepTimer)
      if (viewModel.progress % 1 === 0) {
        animate(Math.abs(index) % viewModel.slideItems.length - viewModel.activeIndex)
      }
    }

    function suspend () {
      clearTimeout(sleepTimer)
      cancelAnimationFrame(animationId)
    }

    onUnmounted(() => {
      suspend()
    })
    return {
      viewModel,
      slideContainer,
      gotoIndex,
      next,
      prev,
      suspend,
      start
    }
  },
  render () {
    return h(this.tagName, {
      style: 'position: relative'
    }, [
      h('div', {
        style: 'position: relative; width: 100%; height: 100%; overflow: hidden'
      }, [
        h('div', {
          ref: 'slideContainer',
          style: 'width: 100%; height: 100%; z-index: 0'
        }, this.$slots.default?.())
      ]
      ),
      this.$slots.pagination?.({
        progress: this.viewModel.progress,
        activeIndex: this.viewModel.activeIndex
      }) || h('div', {
        style: 'position: absolute; left: 50%; top: 100%;' +
          ' transform: translate(-50%, -20px); display: flex;'
      }, this.viewModel.slideItems.map((item, index) => h('span', {
        style: 'transition: 0.3s ease; width: 7px; height:' +
          ' 7px; margin: 0 3px; border-radius: 50%;' +
          (index === Math.round(this.viewModel.progress) %
          this.viewModel.slideItems.length ? 'background: rgba(0,0,0,.8)' : 'background: rgba(0,0,0,.3)')
      }))),
      this.$slots.toPrevController?.({
        progress: this.viewModel.progress,
        activeIndex: this.viewModel.activeIndex
      }),
      this.$slots.toNextController?.({
        progress: this.viewModel.progress,
        activeIndex: this.viewModel.activeIndex
      })
    ])
  }
})
