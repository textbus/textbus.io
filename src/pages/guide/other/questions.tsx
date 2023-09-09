import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>常见问题</h1>
<h2>光标不见了</h2>
<p>大部分情况是因为你的浏览器安装了划词翻译插件，由于 Textbus 默认情况下是采用自绘光标，会导致和划词翻译插件产生冲突。你可以在编辑器配置项里配置&nbsp;<code>useContentEditable: true</code>&nbsp;通过开启原生光标规避此问题。</p>
<h2>我想要XX功能，但官方的编辑器里没有</h2>
<p>Textbus 是一个数据驱动的富文本编辑框架，并提供了健全的扩展能力，你可以参考官方文档，开发自己的组件和扩展。</p>
<h2>Textbus 的数据结构是什么样的</h2>
<p>Textbus 的数据结构为一个组件树对象，通过调用任意组件的 toJSON 方法，可以获取当前组件的 JSON 格式对象。</p></div>
    )
  }
}