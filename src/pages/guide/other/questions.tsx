import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><div dir="auto" data-component="RootComponent" class="xnote-root">
  <div data-placeholder="" class="xnote-content">
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h1">常见问题</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">光标不见了</div>
    </div>
    <ol data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">1.</span></div>
        <div class="xnote-list-content">请检查是否在编辑器容器或更上层的的 DOM 元素上设置了 css 样式：user-select: none。</div>
      </li>
    </ol>
    <ol data-component="ListComponent" data-reorder="false" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">2.</span></div>
        <div class="xnote-list-content">是否安装了划词翻译插件，由于 Textbus 默认情况下是采用自绘光标，会导致和划词翻译插件产生冲突。你可以在编辑器配置项里配置&nbsp;<code class="xnote-code">useContentEditable: true</code>&nbsp;通过开启原生光标规避此问题。</div>
      </li>
    </ol>
    <ol data-component="ListComponent" data-reorder="false" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">3.</span></div>
        <div class="xnote-list-content">是否设置了只读功能。</div>
      </li>
    </ol>
    <ol data-component="ListComponent" data-reorder="false" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">4.</span></div>
        <div class="xnote-list-content">你的组件没有实现 getSlots() 方法，导致 Textbus 无法获取当前组件了插槽集合，而无法设置光标。</div>
      </li>
    </ol>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">我想要某个功能，但官方的编辑器里没有</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 是一个数据驱动的富文本编辑框架，并提供了健全的扩展能力，你可以参考官方文档，开发自己的组件和扩展。如果你使用的是 xnote，你可以 fork xnote 的仓库，并在此基础上修改或添加你需要的功能，xnote 仓库地址：<a href="https://github.com/textbus/xnote" target="_blanK">https://github.com/textbus/xnote</a></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">Textbus 的数据结构是什么样的</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 的数据结构为一个组件树对象，通过调用任意组件的 toJSON 方法，可以获取当前组件的 JSON 格式对象。</div>
    </div>
  </div>
</div></div>
    )
  }
}