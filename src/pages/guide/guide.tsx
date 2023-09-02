import { withScopedCSS } from '@viewfly/scoped-css'
import { BehaviorSubject } from '@tanbo/stream'
import { provide } from '@viewfly/core'
import { Link, RouterOutlet } from '@viewfly/router'

import css from './guide.scoped.scss'
import { ViewUpdateInjectionToken } from './injection-tokens'
import { AnchorLinks } from './anchor-links'
import { showNavBtn } from '../../components/header/header'

export function Guide() {
  const onViewChange = new BehaviorSubject<HTMLElement | null>(null)

  provide({
    provide: ViewUpdateInjectionToken,
    useValue: onViewChange
  })
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
                <Link to="./component" active="active" exact>组件</Link>
              </li>
              <li>
                <Link to="./hooks" active="active" exact>Hooks 和生命周期</Link>
              </li>
            </ul>
            <h3>基础</h3>
            {/*<ul>*/}
            {/*  <li>*/}
            {/*    <Link to="./component" active="active" exact>组件</Link>*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </nav>
        </div>
        <div class="doc-content">
          <RouterOutlet config={[
            {
              name: '',
              asyncComponent: () => import('./start/start').then(m => m.default)
            },
            {
              name: 'component',
              asyncComponent: () => import('./start/component').then(m => m.default)
            },
            {
              name: 'hooks',
              asyncComponent: () => import('./start/hooks').then(m => m.default)
            },
          ]}/>
          <p class="ad">官方文档由 Textbus 编写</p>
        </div>
        <div class="links">
          <AnchorLinks/>
        </div>
      </div>
    )
  })
}
