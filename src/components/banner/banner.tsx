import { Link } from '@viewfly/router'
import { withScopedCSS } from '@viewfly/scoped-css'

import css from './banner.scoped.scss'

export function Banner() {
  return withScopedCSS(css, () => {
    return (
      <div class="banner ui-container-fluid">
        <div class="ui-container content">
          <h1 class="name">
            5.0 正式发布
          </h1>
          <div class="slogan">支持主从结构、高性能的富文本库</div>
          <p class="desc">原生支持 Viewfly、React、Vue 渲染富文本</p>
          <p>
            <Link class="btn btn-quick-start" to="/start" role="button">快速上手<span class="xnote-icon-arrow-right"></span></Link>
          </p>
        </div>
      </div>
    )
  })
}
