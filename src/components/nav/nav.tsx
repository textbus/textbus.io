import { withScopedCSS } from '@viewfly/scoped-css'
import css from './nav.scoped.scss'
import { Link } from '@viewfly/router'

import logo from '../../assets/logo.png'

export function Nav() {
  return withScopedCSS(css, () => {
    return (
      <nav>
        <div>
          <h1><img src={logo} alt="Textbus"/></h1>
        </div>
        <div class="nav-links">
          <h4>起步</h4>
          <ul>
            <li>
              <Link to="/" active="active" exact>首页</Link>
            </li>
            <li>
              <Link to="/start">简介</Link>
            </li>
            <li>
              <Link to="/start">安装</Link>
            </li>
            <li>
              <Link to="/start">组件与适配器</Link>
            </li>
            <li>
              <Link to="/start">插槽与格式</Link>
            </li>
            <li>
              <Link to="/start">主流框架适配</Link>
            </li>
          </ul>
          <h4>数据模型</h4>
          <ul>
            <li>
              <Link to="/start">插槽</Link>
            </li>
            <li>
              <Link to="/start">组件</Link>
            </li>
            <li>
              <Link to="/start">插槽集</Link>
            </li>
          </ul>
          <h4>内核 API</h4>
          <ul>
            <li>
              <Link to="/start">Textbus 实例</Link>
            </li>
            <li>
              <Link to="/start">命令 Commander</Link>
            </li>
            <li>
              <Link to="/start">控制器 Controller</Link>
            </li>
            <li>
              <Link to="/start">历史记录 History</Link>
            </li>
            <li>
              <Link to="/start">键盘管理 Keyboard</Link>
            </li>
            <li>
              <Link to="/start">状态查询 Query</Link>
            </li>
            <li>
              <Link to="/start">注册表 Registry</Link>
            </li>
            <li>
              <Link to="/start">调试器 Scheduler</Link>
            </li>
            <li>
              <Link to="/start">选区 Selection</Link>
            </li>
            <li>
              <Link to="/start">控制器 Controller</Link>
            </li>
          </ul>
          <h4>浏览器模块</h4>
          <ul>
            <li>
              <Link to="/start">协作光标 CollaborateCursor</Link>
            </li>
            <li>
              <Link to="/start">输入 Input</Link>
            </li>
            <li>
              <Link to="/start">解析器 Parser</Link>
            </li>
          </ul>
          <h4>协作模块</h4>
          <ul>
            <li>
              <Link to="/start">协作类 Collaborate</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  })
}
