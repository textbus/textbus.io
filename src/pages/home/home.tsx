import { createRef, onMounted } from '@viewfly/core'
import { withScopedCSS } from '@viewfly/scoped-css'
import { Editor, StaticToolbarPlugin } from '@textbus/xnote'

import { Banner } from '../../components/banner/banner'
import css from './home.scoped.scss'

export function Home() {
  const editorRef = createRef<HTMLElement>()
  const toolbarRef = createRef<HTMLElement>()

  onMounted(() => {
    const editor = new Editor({
      content: '<div dir="auto" data-component="RootComponent" style="padding-bottom:40px" class="xnote-root"><div data-placeholder="" class="xnote-content"><div data-component="ParagraphComponent" class="xnote-paragraph"><div><span style="font-size:18px">Hi，小伙伴们，欢迎你使用&nbsp;<strong>Textbus</strong>&nbsp;富文本框架！</span></div></div><blockquote data-component="BlockquoteComponent" class="xnote-blockquote"><div><div data-component="ParagraphComponent" class="xnote-paragraph"><div>你正在查看的是&nbsp;<a href="https://github.com/textbus/xnote" target="_blanK">XNote</a>&nbsp;的演示效果，如果你需要一个开箱即用的富文本编辑器，你可以直接使用它。如果你需要完全自定义一个全新的富文本编辑器，你可以直接查看 Textbus 的开发者文档。</div></div></div></blockquote><div data-component="ParagraphComponent" class="xnote-paragraph"><div>XNote 是 Textbus 官方开发的富文本编辑器，提供了大多数常见的功能。如：</div></div><ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list"><li><div class="xnote-list-type"><span class="xnote-order-btn">•</span></div><div class="xnote-list-content">常见格式：加粗、斜体、下划线、中划线、字体、文字颜色、对齐方式等。</div></li></ul><ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list"><li><div class="xnote-list-type"><span class="xnote-order-btn">•</span></div><div class="xnote-list-content">代码块、表格、视频、图片、高亮块等。</div></li></ul><ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list"><li><div class="xnote-list-type"><span class="xnote-order-btn">•</span></div><div class="xnote-list-content">有序列表、无序列表、待办事项、引用块等。</div></li></ul><div data-component="ParagraphComponent" class="xnote-paragraph"><div>XNote 还支持 Markdown 语法的实时转换，如：当你输入 “#” 并接着键入“空格” 时，XNote 将转换为一级标题。当你提供了组织信息（Organization）时，XNote 还支持通过 “@” 组织成员。</div></div><div data-component="ParagraphComponent" class="xnote-paragraph"><div>我们会不定时的增加新的功能，欢迎你持续关注！</div></div></div></div>',
      plugins: [
        new StaticToolbarPlugin({
          host: toolbarRef.current!,
          theme: 'dark'
        })
      ]
    })
    editor.mount(editorRef.current!)
    return () => {
      editor.destroy()
    }
  })
  return withScopedCSS(css, () => {
    return (
      <>
        <div class="static-editor">
          <Banner/>
          <div class="editor">
            <div class="editor-toolbar" ref={toolbarRef}></div>
            <div class="editor-content" ref={editorRef}>
            </div>
          </div>
        </div>
        <div class="desc">
          <div class="ui-container">
            <div class="ui-row group">
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-lightning-charge-fill"></i>
                  <h3>超强性能</h3>
                </div>
                <p>支持 <strong>1000 万字</strong>、<strong>25 万 DOM 节点</strong>、<strong>5 万段落</strong>无卡顿编辑
                </p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-shield-fill-check"></i>
                  <h3>类型安全</h3>
                </div>
                <p>完整的 TypeScript 支持，帮助你更快完成复杂的富文本开发</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-brightness-high-fill"></i>
                  <h3>支持协作</h3>
                </div>
                <p>支持在线协作，无成本开发多人在线编辑器</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-cursor-fill"></i>
                  <h3>易扩展</h3>
                </div>
                <p>全面拥抱前端框架，无缝接入 Viewfly、Vue 和 React</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })
}
