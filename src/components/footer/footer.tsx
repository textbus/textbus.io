import { withScopedCSS } from '@viewfly/scoped-css'

import css from './footer.scoped.scss'
import logo from '../../assets/logo.svg'

export function Footer() {
  return withScopedCSS(css, () => {
    return (
      <footer class="ui-container footer">
        <div class="footer-layout">
          <div class="slogan">
            <h4><img src={logo} alt=""/> <span>Viewfly</span></h4>
            <p>简单、符合直觉的 JavaScript 框架</p>
          </div>
          <div class="footer-info">
            <div class="list">
              <div>浏览器兼容</div>
              <ul>
                <li><i class="bi bi-browser-chrome"></i></li>
                <li><i class="bi bi-browser-safari"></i></li>
                <li><i class="bi bi-browser-firefox"></i></li>
                <li><i class="bi bi-browser-edge"></i></li>
              </ul>
            </div>
            <div class="list">
              <div>友情链接</div>
              <ul>
                <li><a href="https://textbus.io" target="_blank">Textbus 富文本框架</a></li>
              </ul>
            </div>
          </div>
          <div class="copyright">
            <p>遵循 MIT License 开源协议</p>
            <div>Copyright © 2023 画笔</div>
          </div>
        </div>
      </footer>
    )
  })
}
