import { AnimatePlayer } from '../animate-player'

export class SlideHorizontal extends AnimatePlayer {
  private distanceRanges: number[] = []
  private maxDistance: number

  constructor (container: HTMLElement, items: HTMLElement[], progress: number) {
    super(container, items, progress)
    Object.assign(container.style, {
      display: 'flex'
    })

    this.distanceRanges = this.slideItems.map(item => item.offsetWidth)
    this.maxDistance = this.distanceRanges.reduce((prev, next) => prev + next, 0)

    this.update(progress)
  }

  update (progress: number) {
    const index = Math.floor(progress)
    const distance = this.distanceRanges.slice(0, index).reduce((prev, next) => prev + next, 0) +
      this.distanceRanges[index] * (progress % 1)
    this.animate(-distance)
  }

  private animate (distance: number) {
    this.progress = distance % this.maxDistance
    this.container.style.transform = `translateX(${this.progress}px)`
    const remainder = Math.abs(distance) % this.maxDistance

    let startDistance = 0
    if (this.progress <= 0) {
      for (let i = 0; i < this.distanceRanges.length; i++) {
        startDistance += this.distanceRanges[i]
        if (startDistance > remainder) {
          this.slideItems.slice(0, i).forEach(item => {
            item.style.transform = `translateX(${this.maxDistance}px)`
          })
          this.slideItems.slice(i, this.slideItems.length).forEach(item => {
            item.style.transform = 'translateX(0px)'
          })
          break
        }
      }
    } else {
      for (let i = this.distanceRanges.length - 1, min = 0; min <= i; i--) {
        startDistance += this.distanceRanges[i]
        if (startDistance >= remainder) {
          this.slideItems.slice(0, i).forEach(item => {
            item.style.transform = 'translateX(0px)'
          })
          this.slideItems.slice(i, this.slideItems.length).forEach(item => {
            item.style.transform = `translateX(${-this.maxDistance}px)`
          })
          break
        }
      }
    }
  }
}
