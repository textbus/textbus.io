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
                <Link to="./slot" active="active" exact>插槽与格式</Link>
              </li>
              <li>
                <Link to="./member" active="active" exact>配置项与实例</Link>
              </li>
            </ul>
            <h3>进阶</h3>
            <ul>
              <li>
                <Link to="./operation" active="active" exact>选区与命令</Link>
              </li>
              <li>
                <Link to="./hooks" active="active" exact>Hooks 和生命周期</Link>
              </li>
              <li>
                <Link to="./loader" active="active" exact>文档解析与兼容处理</Link>
              </li>
              <li>
                <Link to="./history" active="active" exact>历史记录</Link>
              </li>
              <li>
                <Link to="./query" active="active" exact>状态查询</Link>
              </li>
              <li>
                <Link to="./collab" active="active" exact>协作编辑</Link>
              </li>
            </ul>
            <h3>高级</h3>
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
              asyncComponent: () => import('./start/start').then(m => m.default)
            },
            {
              name: 'component',
              asyncComponent: () => import('./start/component').then(m => m.default)
            },
            {
              name: 'slot',
              asyncComponent: () => import('./start/slot').then(m => m.default)
            },
            {
              name: 'member',
              asyncComponent: () => import('./start/members').then(m => m.default)
            },
            {
              name: 'operation',
              asyncComponent: () => import('./guide/operation').then(m => m.default)
            },
            {
              name: 'hooks',
              asyncComponent: () => import('./guide/hooks').then(m => m.default)
            },
            {
              name: 'loader',
              asyncComponent: () => import('./guide/loader').then(m => m.default)
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
