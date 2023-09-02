import { Banner } from '../../components/banner/banner'
import { withScopedCSS } from '@viewfly/scoped-css'

import css from './home.scoped.scss'

import haubi from './huabi.png'
import cs from './38655348.jpeg'
import cg from './46988668.jpeg'

export function Home() {
  return withScopedCSS(css, () => {
    return (
      <>
        <Banner/>
        <div class="desc">
          <div class="ui-container">
            <div class="ui-row group">
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-lightning-charge-fill"></i>
                  <h3>快速</h3>
                </div>
                <p>支持 <strong>150 万字</strong>、<strong>25 万 DOM 节点</strong>、<strong>5 万段落</strong>无卡顿编辑</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-shield-fill-check"></i>
                  <h3>类型安全</h3>
                </div>
                <p>完整的 TypeScript 支持，帮助你更简单的完成应用开发</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-brightness-high-fill"></i>
                  <h3>符合直觉</h3>
                </div>
                <p>没有 Hook 规则和闭包陷阱，代码会按你的预期执行</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-cursor-fill"></i>
                  <h3>简单</h3>
                </div>
                <p>内核只有 10 个 API，新手也能快速创建富交互的应用</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ui-container-fluid">
          <div class="ui-row stages">
            <div class="ui-container container">
              <div class="ui-row group">
                <div class="ui-col-sm-8 ui-col-md-4 ui-col-xs-12">
                  <h3>12 KB</h3>
                  <p>Minify+Gzip</p>
                </div>
                <div class="ui-col-sm-8 ui-col-md-4 ui-col-xs-12">
                  <h3>Function Based</h3>
                  <p>拥抱函数组件</p>
                </div>
                <div class="ui-col-sm-8 ui-col-md-4 ui-col-xs-12">
                  <h3>No closure</h3>
                  <p>没有闭包陷阱</p>
                </div>
                <div class="ui-col-sm-8 ui-col-md-4 ui-col-xs-12">
                  <h3>CSS Modules</h3>
                  <p>支持模块化 CSS</p>
                </div>
                <div class="ui-col-sm-8 ui-col-md-4 ui-col-xs-12">
                  <h3>Router</h3>
                  <p>官方路由支持</p>
                </div>
                <div class="ui-col-sm-8 ui-col-md-4 ui-col-xs-12">
                  <h3>100%</h3>
                  <p>单元测试覆盖</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui-container authors">
          <h2>Contributors</h2>
          <div class="author-list ui-row">
            <div class="author-item ui-col-xs-24 ui-col-sm-12 ui-col-md-8">
              <div class="author-info">
                <div>
                  <img src={haubi} alt=""/>
                </div>
                <h3>画笔</h3>
                <p>前端开发老鸟，热爱开源，爱折腾，Textbus 富文本框架作者。</p>
                <p>Viewfly 为其最新力作，旨在为开发者提供更简单、更轻巧、更易使用前端基础框架。</p>
              </div>
            </div>
            <div class="author-item ui-col-xs-24 ui-col-sm-12 ui-col-md-8">
              <div class="author-info">
                <div>
                  <img src={cs} alt=""/>
                </div>
                <h3>TinyCricetus</h3>
                <p></p>
              </div>
            </div>
            <div class="author-item ui-col-xs-24 ui-col-sm-12 ui-col-md-8">
              <div class="author-info">
                <div>
                  <img src={cg} alt=""/>
                </div>
                <h3>GordonHU-LB</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })
}
