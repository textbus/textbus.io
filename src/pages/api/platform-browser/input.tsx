import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><div data-comopnent="RootComponent" class="xnote-root">
  <div data-placeholder="" class="xnote-content">
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h1">输入器</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Input 类用于实现 Textbus 在浏览器平台的输入管理能力。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">通过编辑器实例或通过 useContext 勾子获取 Input 的实例。</span></div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="null" data-line-number="true" class="xnote-source-code xnote-source-code-line-number github">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">// 方法1</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">const input = textbus.get(Input)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">// 方法2</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">const yourComponent = defineComponent({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;setup() {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;const input = useContext(Input)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">caret 光标</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在文档内闪动的光标。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="null" data-line-number="true" class="xnote-source-code xnote-source-code-line-number github">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">export interface Caret {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;onPositionChange: Observable&lt;CaretPosition | null&gt;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;readonly rect: Rect</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;refresh(isFixedCaret: boolean): void</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;correctScrollTop(scroller: Scroller): void</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="null" data-line-number="true" class="xnote-source-code xnote-source-code-line-number github">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">// 类型签名：</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">caret: Caret</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">caret.onPositionChange 光标位置变化事件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>当光标位置在文档中的坐标位置变化时，触发事件。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="null" data-line-number="true" class="xnote-source-code xnote-source-code-line-number github">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">input.caret.onPositionChange.subscribe(position =&gt; {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;console.log(position)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">caret.rect 光标尺寸</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>光标相对于页面的左边距 left、上边距 top，和光标的宽度 width、高度 height。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">caret.correctScrollTop() 光标位置修正</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>当用户编辑时，随着内容的变化，光标可能会跑到可见区域外。由于 Textbus 并不能预见文档会放在哪一个 DOM 容器内，所以需要开发者通过此方法实现光标位置修正，以保证光标始终在可见区域内。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="null" data-line-number="true" class="xnote-source-code xnote-source-code-line-number github">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">export interface Scroller {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;// 当可滚动容器发生滚动时的观察者，如: fromEvent(document, 'scroll')</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;onScroll: Observable&lt;any&gt;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;// 当容器滚动时，让光标限制在什么范围</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;getLimit(): CaretLimit</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;// Textbus 计算出需要修正的偏移量</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;setOffset(offsetScrollTop: number): void</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>当滚动容器为 document 时的示例：</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="null" data-line-number="true" class="xnote-source-code xnote-source-code-line-number github">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">input.caret.correctScrollTop({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;onScroll: fromEvent(document, 'scroll'),</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;getLimit(): CaretLimit {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;return {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top: 116,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom: document.documentElement.clientHeight</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'},</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;setOffset(offsetScrollTop: number) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;document.documentElement.scrollTop += offsetScrollTop</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">disabled 是否禁用</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>boolean 值，可读写。当值为 true 时，将不能触发输入和快捷键行为。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">focus() 获取焦点</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>让 input 获取焦点。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="null" data-line-number="true" class="xnote-source-code xnote-source-code-line-number github">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">// 类型签名：</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">focus(nativeRange: Range, reFlash: boolean): void;</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>调用 focus 方法，必须指定一个原生的焦点位置（nativeRange)，并且指定是否重新开始光标闪动。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">blur()</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>让 input 失去焦点。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><br/></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><br/></div>
    </div>
  </div>
</div></div>
    )
  }
}