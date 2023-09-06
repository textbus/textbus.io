import { Banner } from '../../components/banner/banner'
import { withScopedCSS } from '@viewfly/scoped-css'

import css from './home.scoped.scss'

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
                  <h3>超强性能</h3>
                </div>
                <p>支持 <strong>1000 万字</strong>、<strong>25 万 DOM 节点</strong>、<strong>5 万段落</strong>无卡顿编辑</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-shield-fill-check"></i>
                  <h3>类型安全</h3>
                </div>
                <p>完整的 TypeScript 支持，帮助你更快完成复杂的富文本开发</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-brightness-high-fill"></i>
                  <h3>支持协作</h3>
                </div>
                <p>支持在线协作，无成本开发多人在线编辑器</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-cursor-fill"></i>
                  <h3>易扩展</h3>
                </div>
                <p>全面拥抱前端框架，无缝接入 Viewfly、Vue 和 React</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })
}
