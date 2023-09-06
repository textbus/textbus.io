import { withScopedCSS } from '@viewfly/scoped-css'
import css from './collab.scoped.scss'

export function Collab() {
  return withScopedCSS(css, () => {
    return (
      <div class="ui-container">Textbus 4.0 编辑器正在开发中。。。</div>
    )
  })
}
