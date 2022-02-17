import { AnimatePlayer } from '../animate-player'

export class FadeInout extends AnimatePlayer {
  constructor (container: HTMLElement, items: HTMLElement[], progress: number) {
    super(container, items, progress)
    Object.assign(container.style, {
      position: 'relative'
    })
    items.forEach(item => {
      Object.assign(item.style, {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      })
    })

    this.update(progress)
  }

  update (progress: number) {
    const prevIndex = Math.floor(progress)
    const nextIndex = Math.ceil(progress) % this.slideItems.length

    const p = progress % 1

    const current = Math.round(progress) % this.slideItems.length

    this.slideItems.forEach((item, index) => {
      if (index === prevIndex) {
        Object.assign(item.style, {
          zIndex: 1,
          opacity: 1 - p
        })
      } else if (index === nextIndex) {
        Object.assign(item.style, {
          zIndex: 1,
          opacity: p
        })
      } else {
        Object.assign(item.style, {
          zIndex: 0,
          opacity: 0
        })
      }
      if (index === current) {
        Object.assign(item.style, {
          zIndex: 2
        })
      }
    })
  }
}
