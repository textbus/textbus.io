import { useRaf } from "../../utils/request-animation-frame"

export interface Point {
  x: number
  y: number
}

/** 定义叶子类 */
export interface Leaf {
  /** 花瓣内坐标 */
  begin: Point
  /** 枝叶长度 单位px */
  length: number
  /** 生长角度 单位弧度 */
  angle: number
}

export interface PlumConfig {
  /** 画板宽度 单位px */
  uiWidth: number

  /** 画板高度 单位px */
  uiHeight: number

  /** 枝叶生长几率 建议0.5 0 < growChance < 1 */
  growChance: number

  /** 叶子初始长度 单位：像素 px */
  firstLeafLen: number

  /** 最大层数 */
  maxGrowDepth: number

  /** 最小生长层数 */
  minGrowDepth: number

  /** 可以跨出屏幕的额外范围 单位px */
  extraBounding: number

  /** 枝叶缓变角度 单位：弧度 rad */
  basicGrowAngle: number

  /** 枝叶颜色 */
  leafColor: string

  /** 枝叶宽度 单位：像素 px */
  leafWidth: number
}

type PlumPartialConfig = Partial<PlumConfig>

export const defaultPlumConfig: PlumConfig = {
  uiWidth: window.innerWidth,
  uiHeight: window.innerHeight,
  growChance: 0.5,
  firstLeafLen: 5,
  minGrowDepth: 5,
  maxGrowDepth: 200,
  extraBounding: 100,
  basicGrowAngle: Math.PI / 12,
  leafColor: '#00000040',
  leafWidth: 1
}

export class PlumService {
  private ctx: CanvasRenderingContext2D
  private canvasEl: HTMLCanvasElement
  private plumConfig: PlumConfig

  private drawFunList: Function[] = []
  // @ts-expect-error
  private resume: Function
  // @ts-expect-error
  private pause: Function

  constructor(ui: HTMLCanvasElement, config: PlumPartialConfig = defaultPlumConfig) {
    this.plumConfig = Object.assign(defaultPlumConfig, config)

    this.canvasEl = ui
    this.ctx = this.canvasEl.getContext('2d')!
    if (!this.ctx) {
      throw new Error('no canvas context!')
    }

    // 要设置，否则按照默认300:150
    this.canvasEl.style.width = `${this.plumConfig.uiWidth}px`
    this.canvasEl.style.height = `${this.plumConfig.uiHeight}px`
    
    this.canvasEl.width = this.plumConfig.uiWidth
    this.canvasEl.height = this.plumConfig.uiHeight
  }

  getCanvasContext() {
    return this.ctx
  }

  beginPlumGrow(beginLeaves: Leaf[]) {
    this.ctx.strokeStyle = this.plumConfig.leafColor
    this.ctx.lineWidth = this.plumConfig.leafWidth

    this.initRequestAnimationFrame()

    for (const leaf of beginLeaves) {
      this.drawRandomBlossom(leaf, 0)
    }
  }

  pauseGrow() {
    if (this.pause) {
      this.pause()
    }
  }

  resumeGrow() {
    if (this.resume) {
      this.resume()
    }
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height)
  }

  private drawRandomBlossom(leaf: Leaf, depth: number) {
    const endPoint: Point = {
      x: leaf.begin.x + leaf.length * Math.cos(leaf.angle),
      y: leaf.begin.y + leaf.length * Math.sin(leaf.angle)
    }

    // 判定边界
    if (endPoint.x < -this.plumConfig.extraBounding || endPoint.x > this.canvasEl.width + this.plumConfig.extraBounding ||
      endPoint.y < -this.plumConfig.extraBounding || endPoint.y > this.canvasEl.height + this.plumConfig.extraBounding ||
      depth > this.plumConfig.maxGrowDepth
    ) {
      return
    }

    this.drawLine(leaf.begin, endPoint)

    // 长右边 长右边
    for (let i = 0; i < 2; i++) {
      if (depth < this.plumConfig.minGrowDepth || Math.random() < this.plumConfig.growChance) {
        this.drawFunList.push(() => {
          this.drawRandomBlossom(this.generateLeaf(leaf, endPoint, i % 2 === 0), depth + 1)
        })
      }
    }
  }

  private initRequestAnimationFrame() {
    const { resume, pause } = useRaf(() => {
      const tasks = [...this.drawFunList]
      this.drawFunList.length = 0

      tasks.forEach((fun) => { fun() })

      if (!tasks.length) {
        this.pauseGrow()
      }
    })

    this.resumeGrow = resume
    this.pauseGrow = pause
  }

  private drawLine(begin: Point, end: Point) {
    this.ctx.beginPath()
    this.ctx.moveTo(begin.x, begin.y)
    this.ctx.lineTo(end.x, end.y)
    this.ctx.stroke()
  }

  private generateLeaf(leaf: Leaf, lastEndPoint: Point, isToRight: boolean): Leaf {
    const randomAngleValue = Math.random() * this.plumConfig.basicGrowAngle
    const angle = leaf.angle + (isToRight ? randomAngleValue : -randomAngleValue)

    return {
      begin: lastEndPoint,
      length: this.plumConfig.firstLeafLen * Math.random(),
      angle
    }
  }
}

