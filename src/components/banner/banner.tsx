import { Link } from '@viewfly/router'
import { withScopedCSS } from '@viewfly/scoped-css'

import css from './banner.scoped.scss'

export function Banner() {
  return withScopedCSS(css, () => {
    return (
      <div class="banner ui-container-fluid">
        <div class="ui-container content">
          <h1 class="name">
            全新 4.0 版本
          </h1>
          <div class="slogan">支持多前端框架、高性能的富文本库</div>
          <p class="desc">原生支持 Viewfly、React、Vue 渲染富文本</p>
          <p>
            <Link class="btn btn-quick-start" to="/guide" role="button">快速上手<span class="xnote-icon-arrow-right"></span></Link>
          </p>
        </div>
      </div>
    )
  })
}
