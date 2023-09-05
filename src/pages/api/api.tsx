import { withScopedCSS } from '@viewfly/scoped-css'
import { BehaviorSubject } from '@tanbo/stream'
import { provide } from '@viewfly/core'
import { Link, RouterOutlet } from '@viewfly/router'

import css from '../nav.scoped.scss'
import { ViewUpdateInjectionToken } from '../injection-tokens'
import { AnchorLinks } from '../../components/anchor-link/anchor-links'
import { showNavBtn } from '../../components/header/header'

export function Api() {
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
            <h3>数据模型</h3>
            <ul>
              <li>
                <Link to="./slot" active="active" exact>插槽 Slot</Link>
              </li>
              <li>
                <Link to="./component" active="active" exact>组件 Component</Link>
              </li>
              <li>
                <Link to="./slots" active="active" exact>插槽集 Slots</Link>
              </li>
            </ul>
            <h3>内核模块</h3>
            <ul>
              <li>
                <Link to="./commander" active="active" exact>命令 Commander</Link>
              </li>
              <li>
                <Link to="./controller" active="active" exact>控制器 Controller</Link>
              </li>
              <li>
                <Link to="./history" active="active" exact>历史记录 History</Link>
              </li>
              <li>
                <Link to="./keyboard" active="active" exact>键盘管理 Keyboard</Link>
              </li>
              <li>
                <Link to="./query" active="active" exact>状态查询 Query</Link>
              </li>
              <li>
                <Link to="./registry" active="active" exact>状态查询 Registry</Link>
              </li>
              <li>
                <Link to="./scheduler" active="active" exact>调度器 Scheduler</Link>
              </li>
              <li>
                <Link to="./selection" active="active" exact>选区 Selection</Link>
              </li>
            </ul>
            <h3>浏览器模块</h3>
            <ul>
              <li>
                <Link to="./extends" active="active" exact>插件和模块</Link>
              </li>
              <li>
                <Link to="./testing" active="active" exact>单元测试</Link>
              </li>
              <li>
                <Link to="./platform" active="active" exact>跨平台基础</Link>
              </li>
            </ul>
            <h3>其它</h3>
            <ul>
              <li>
                <Link to="./adapter" active="active" exact>Vue 和 React 适配</Link>
              </li>
              <li>
                <Link to="./upgrade" active="active" exact>升级指南</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="doc-content">
          <RouterOutlet config={[
            {
              name: '',
              asyncComponent: () => import('./model/slot').then(m => m.default)
            },
            {
              name: 'component',
              asyncComponent: () => import('./model/component').then(m => m.default)
            },
            {
              name: 'slots',
              asyncComponent: () => import('./model/slots').then(m => m.default)
            },
            {
              name: 'commander',
              asyncComponent: () => import('./core/commander').then(m => m.default)
            },
            {
              name: 'controller',
              asyncComponent: () => import('./core/controller').then(m => m.default)
            },
            {
              name: 'history',
              asyncComponent: () => import('./core/history').then(m => m.default)
            },
            {
              name: 'keyboard',
              asyncComponent: () => import('./core/keyboard').then(m => m.default)
            },
            {
              name: 'query',
              asyncComponent: () => import('./core/query').then(m => m.default)
            },
            {
              name: 'registry',
              asyncComponent: () => import('./core/registry').then(m => m.default)
            },
            {
              name: 'scheduler',
              asyncComponent: () => import('./core/scheduler').then(m => m.default)
            },
            {
              name: 'selection',
              asyncComponent: () => import('./core/selection').then(m => m.default)
            }
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
