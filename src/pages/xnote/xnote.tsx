import { withScopedCSS } from '@viewfly/scoped-css'
import { BehaviorSubject } from '@tanbo/stream'
import { withAnnotation } from '@viewfly/core'
import { Link, RouterOutlet } from '@viewfly/router'

import css from '../nav.scoped.scss'
import '../doc.scss'
import { ViewUpdateInjectionToken } from '../injection-tokens'
import { AnchorLinks } from '../../components/anchor-link/anchor-links'
import { showNavBtn } from '../../components/header/header'

export const XNote = withAnnotation({
  providers: [{
    provide: ViewUpdateInjectionToken,
    useValue: new BehaviorSubject<HTMLElement | null>(null)
  }]
}, () => {
  return withScopedCSS(css, () => {
    return (
      <div class="ui-container page">
        <div class={['nav', { active: showNavBtn() }]}>
          <nav>
            <h3>起步</h3>
            <ul>
              <li>
                <Link to="./" active="active" exact>开始</Link>
              </li>
              <li>
                <Link to="./upload" active="active" exact>文件上传</Link>
              </li>
              <li>
                <Link to="./at" active="active" exact>@ 人</Link>
              </li>
            </ul>
            <h3>高级</h3>
            <ul>
              <li>
                <Link to="./collab" active="active" exact>接入协作</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="doc-content">
          <RouterOutlet config={[
            {
              path: '',
              asyncComponent: () => import('./start/start').then(m => m.default)
            },
            {
              path: 'upload',
              asyncComponent: () => import('./start/upload').then(m => m.default)
            },
            {
              path: 'at',
              asyncComponent: () => import('./start/at').then(m => m.default)
            },
            {
              path: 'collab',
              asyncComponent: () => import('./advance/collab').then(m => m.default)
            },
          ]}/>
          <p class="ad">官方文档由 xnote 编写</p>
        </div>
        <div class="links">
          <AnchorLinks/>
        </div>
      </div>
    )
  })
})
