import { withScopedCSS } from '@viewfly/scoped-css'
import { BehaviorSubject } from '@tanbo/stream'
import { withAnnotation } from '@viewfly/core'
import { Link, RouterOutlet } from '@viewfly/router'

import css from '../nav.scoped.scss'
import '../doc.scss'
import { ViewUpdateInjectionToken } from '../injection-tokens'
import { AnchorLinks } from '../../components/anchor-link/anchor-links'
import { showNavBtn } from '../../components/header/header'

export const Api = withAnnotation({
  providers: [
    {
      provide: ViewUpdateInjectionToken,
      useValue: new BehaviorSubject<HTMLElement | null>(null)
    }
  ]
}, () => {

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
                <Link to="./registry" active="active" exact>注册表 Registry</Link>
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
              {/*<li>*/}
              {/*  <Link to="./collaborate-cursor" active="active" exact>协作光标 CollaborateCuroser</Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link to="./input" active="active" exact>输入 Input</Link>*/}
              {/*</li>*/}
              <li>
                <Link to="./parser" active="active" exact>HTML 解析 Parser</Link>
              </li>
              {/*<li>*/}
              {/*  <Link to="./selection-bridge" active="active" exact>选区桥接 SelectionBridge</Link>*/}
              {/*</li>*/}
            </ul>
          </nav>
        </div>
        <div class="doc-content">
          <RouterOutlet config={[
            {
              path: '',
              asyncComponent: () => import('./model/slot').then(m => m.default),
            },
            {
              path: 'component',
              asyncComponent: () => import('./model/component').then(m => m.default)
            },
            {
              path: 'commander',
              asyncComponent: () => import('./core/commander').then(m => m.default)
            },
            {
              path: 'controller',
              asyncComponent: () => import('./core/controller').then(m => m.default)
            },
            {
              path: 'history',
              asyncComponent: () => import('./core/history').then(m => m.default)
            },
            {
              path: 'keyboard',
              asyncComponent: () => import('./core/keyboard').then(m => m.default)
            },
            {
              path: 'query',
              asyncComponent: () => import('./core/query').then(m => m.default)
            },
            {
              path: 'registry',
              asyncComponent: () => import('./core/registry').then(m => m.default)
            },
            {
              path: 'scheduler',
              asyncComponent: () => import('./core/scheduler').then(m => m.default)
            },
            {
              path: 'selection',
              asyncComponent: () => import('./core/selection').then(m => m.default)
            },
            {
              path: 'collaborate-cursor',
              asyncComponent: () => import('./platform-browser/collaborate-cursor').then(m => m.default)
            },
            {
              path: 'input',
              asyncComponent: () => import('./platform-browser/input').then(m => m.default)
            },
            {
              path: 'parser',
              asyncComponent: () => import('./platform-browser/parser').then(m => m.default)
            },
            {
              path: 'selection-bridge',
              asyncComponent: () => import('./platform-browser/selection-bridge').then(m => m.default)
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
})
