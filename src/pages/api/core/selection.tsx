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
      <div class="xnote-h1">Selection 选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>选区用于选择文档中的内容，或控制光标位置，在文档编写过程中，用户大多数时候都是根据光标或选区来做出操作。你可以根据自己的需要监听选区的变化，或设置选区。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>通过编辑器实例或通过 useContext 勾子获取 Selection 的实例。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法1</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;selection= textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">Selection</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法2</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;selection=&nbsp;<span class="hljs-title function_">useContext</span>(<span class="hljs-title class_">Selection</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">onChange 监听选区变化</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>可观察对象，当选区变化时触发。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">onChange</span>:&nbsp;<span class="hljs-title class_">Observable</span>&lt;<span class="hljs-title class_">AbstractSelection</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>&gt;;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-property">onChange</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'选区发生变化了'</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">isSelected 是否有选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>只读，当 Selection 中的焦点和锚点插槽都存在时，值为 true，否则为 false</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">isCollapsed 选区是否闭合</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>只读，当选区的锚点和焦点在同一位置时，值为 true，否则为 false。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">startSlot 开始插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>只读，选区的开始插槽。开始插槽在文档中的位置总是位于结束插槽的前面，当选区为闭合时，开始插槽和结束插槽相等。当选区没有选中文档中任意位置时，值为 null</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">startSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>&lt;<span class="hljs-built_in">any</span>&gt; |&nbsp;<span class="hljs-literal">null</span></span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">endSlot 结束插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">只读，选区的结束插槽。结束插槽在文档中的位置总是位于开始插槽的后面，当选区为闭合时，结束插槽和开始插槽相等。当选区没有选中文档中任意位置时，值为 null</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">startSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>&lt;<span class="hljs-built_in">any</span>&gt; |&nbsp;<span class="hljs-literal">null</span></span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">startOffset 开始插槽偏移量</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>只读，选区在开始插槽的偏移量。只与插槽的内容相关，与插槽的格式和属性无关。当选区没有选中文档中任意位置时，值为 null。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">startOffset</span>:&nbsp;<span class="hljs-built_in">number</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">endOffset 结束插槽偏移量</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">只读，选区结束插槽的偏移量。只与插槽的内容相关，与插槽的格式和属性无关。当选区没有选中文档中任意位置时，值为 null。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">endOffset</span>:&nbsp;<span class="hljs-built_in">number</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">anchorSlot 锚点插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>只读，锚点插槽,，一般指鼠标按下的位置的插槽。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">当选区没有选中文档中任意位置时，值为 null。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">anchorSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>&lt;<span class="hljs-built_in">any</span>&gt; |&nbsp;<span class="hljs-literal">null</span></span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">focusSlot 焦点插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">只读，焦点插槽,，一般指鼠标抬起的位置的插槽。当选区没有选中文档中任意位置时，值为 null。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">focusSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>&lt;<span class="hljs-built_in">any</span>&gt; |&nbsp;<span class="hljs-literal">null</span></span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">anchorOffset 锚点插槽偏移量</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>只读，选区锚点插槽的偏移量。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">当选区没有选中文档中任意位置时，值为 null。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">anchorOffset</span>:&nbsp;<span class="hljs-built_in">number</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">focusOffset 焦点插槽偏移量</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">只读，选区焦点插槽的偏移量。当选区没有选中文档中任意位置时，值为 null。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">focusOffset</span>:&nbsp;<span class="hljs-built_in">number</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">commonAncestorSlot 公共父插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>只读，选区焦点插槽和锚点插槽公共父插槽。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">当选区没有选中文档中任意位置时，值为 null。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">commonAncestorSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">commonAncestorComponent 公共父组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">只读，选区焦点插槽和锚点插槽公共父组件。当选区没有选中文档中任意位置时，值为 null。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">commonAncestorComponent</span>:&nbsp;<span class="hljs-title class_">Component</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">nativeSelectionDelegate 是否代理原生选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>可读写，用于设置是否代理原生选区。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 的 Selection 是脱离于具体平台实现的。通过选区操作文档，不完全依赖于具体平台的实现。在默认情况下，</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">nativeSelectionDelegate 的值为 true，Textbus 会自动双向同步抽象选区和原生选区，即原生选区变化时，会自动映射到 Textbus 的抽象选区，当抽象选区变化时，Textbus 会根据一定规则和时机，同步到原生选区。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">nativeSelectionDelegate</span>:&nbsp;<span class="hljs-built_in">boolean</span></span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 代理原生选区</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-property">nativeSelectionDelegate</span>&nbsp;=&nbsp;<span class="hljs-literal">true</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 取消代理原生选区</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-property">nativeSelectionDelegate</span>&nbsp;=&nbsp;<span class="hljs-literal">false</span></span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">createSnapshot() 创建快照</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>创建一个当前选区的快照，用于后面恢复。注意，只有在恢复时，快照缓存的选区位置的插槽和偏移量还存在，才能恢复，否则恢复将会失败。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">createSnapshot</span>():&nbsp;<span class="hljs-title class_">SelectionSnapshot</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>选区快照类型：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 选区快照</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">SelectionSnapshot</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 恢复选区</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;syncNative 是否同步原生选区</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title function_">restore</span>(syncNative?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;snapshot = selection.<span class="hljs-title function_">createSnapshot</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 操作数据...</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 还原选区</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">snapshot.<span class="hljs-title function_">restore</span>()</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">setBaseAndExtent() 设置选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>设置选区的锚点位置和焦点位置。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 设置锚点和焦点的位置</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;anchorSlot 锚点插槽</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;anchorOffset 锚点偏移量</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;focusSlot 焦点插槽</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;focusOffset 焦点偏移量</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">setBaseAndExtent</span>(<span class="hljs-attr">anchorSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">anchorOffset</span>:&nbsp;<span class="hljs-built_in">number</span>,&nbsp;<span class="hljs-attr">focusSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">focusOffset</span>:&nbsp;<span class="hljs-built_in">number</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">setBaseAndExtent</span>(anchorSlot,&nbsp;<span class="hljs-number">3</span>, focusSlot,&nbsp;<span class="hljs-number">5</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">setAnchor() 设置锚点</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>设置选区锚点位置。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">setAnchor</span>(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">offset</span>:&nbsp;<span class="hljs-built_in">number</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">setAnchor</span>(slot,&nbsp;<span class="hljs-number">4</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">setFocus() 设置焦点</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>设置选区焦点位置。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">setFocus</span>(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">offset</span>:&nbsp;<span class="hljs-built_in">number</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">示例：</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">setFocus</span>(slot,&nbsp;<span class="hljs-number">2</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">setPosition() 设置选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>同时设置选区的锚点和焦点位置。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">setPosition</span>(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">offset</span>:&nbsp;<span class="hljs-built_in">number</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">示例：</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">setPosition</span>(slot,&nbsp;<span class="hljs-number">1</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 等效于</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">setBaseAndExtent</span>(slot,&nbsp;<span class="hljs-number">1</span>, slot,&nbsp;<span class="hljs-number">1</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">selectSlot() 选择插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>选中插槽的所有内容。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">selectSlot</span>(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectSlot</span>(slot)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 等效于</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">setBaseAndExtent</span>(slot,&nbsp;<span class="hljs-number">0</span>, slot, slot.<span class="hljs-property">length</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">selectFirstPosition() 设置选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>将选区设置到组件内可编辑内容的第一个位置。如当前组件的第一个插槽的第一位为带插槽的块组件，则会继续下内查找。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">selectFirstPosition</span>(<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">Component</span>, isRestore?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置选区到第一个位置</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectFirstPosition</span>(component)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置并立即同步到原生选区</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectFirstPosition</span>(component,&nbsp;<span class="hljs-literal">true</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">selectLastPosition() 设置选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>将选区设置到组件最后一个插槽的最后一个位置。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">如当前组件的最后一个插槽的最后一位为带插槽的块组件，则会继续下内查找。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">selectLastPosition</span>(<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">Component</span>, isRestore?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">示例：</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置选区到最后一个位置</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectLastPosition</span>(component)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置并立即同步到原生选区</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectLastPosition</span>(component,&nbsp;<span class="hljs-literal">true</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">selectComponentFront() 设置选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>将选区设置在组件之前。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">selectComponentFront</span>(<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">Component</span>, isRestore?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置选区到组件之前</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectComponentFront</span>(component)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置并立即同步到原生选区</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectComponentFront</span>(component,&nbsp;<span class="hljs-literal">true</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">selectComponentEnd() 设置选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>将选区设置在组件之后。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">selectComponentEnd</span>(<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">Component</span>, isRestore?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">示例：</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置选区到组件之后</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectComponentEnd</span>(component)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置并立即同步到原生选区</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectComponentEnd</span>(component,&nbsp;<span class="hljs-literal">true</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">selectChildSlots() 选择所有子插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>选中组件所有子插槽。如果当前组件没有子插槽，则会选中当前组件。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">selectChildSlots</span>(<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">Component</span>, isRestore?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">示例：</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置选区选中所有子插槽</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectChildSlots</span>(component)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置并立即同步到原生选区</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectChildSlots</span>(component,&nbsp;<span class="hljs-literal">true</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">selectComponent() 选择组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>选中一个组件。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">selectComponent</span>(<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">Component</span>, isRestore?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">示例：</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置选区选中组件</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectComponent</span>(component)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置并立即同步到原生选区</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">selectComponent</span>(component,&nbsp;<span class="hljs-literal">true</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">toPrevious() 向前移动光标</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>光标移动到前一个位置。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">toNext() 向后移动光标</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>光标移动到后一个位置。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">toPreviousLine() 移动到上一行</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>光标移动到上一行。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">toNextLine() 移动到下一行</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>光标移动到下一行。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">wrapToAfter() 向后框选</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>向后框选。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">wrapToBefore() 向前框选</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>向前框选。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">wrapToTop() 向上一行框选</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>向上框选。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">wrapToBottom() 向下一行框选</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>向下框选。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">collapse() 闭合选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">将选区开始位置和结束位置设置在同一个位置。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">collapse</span>(toStart?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 将选区的开始位置设置为选区的结束位置</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">collapse</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 将选区的结束位置设置为选区的开始位置</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">collapse</span>(<span class="hljs-literal">true</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2"><span style="color:rgb(73, 80, 96)">unSelect() 取消选区</span></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">取消选区。</span></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2"><span style="color:rgb(73, 80, 96)">selectAll() 全选</span></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">全选。</span></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">restore() 同步原生选区</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>同步 Textbus 选区到原生选区。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getPaths() 获取选区路径</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>获取选区路径。返回当前选区的锚点插槽及偏移量和焦点插槽及偏移量在文档中的路径。由两组数字表示。当没有选区时，返回两个空数组。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">getPaths</span>():&nbsp;<span class="hljs-title class_">SelectionPaths</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>path 类型：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 选区锚点和焦点的绝对路径</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">SelectionPaths</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">anchor</span>:&nbsp;<span class="hljs-built_in">number</span>[];</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">focus</span>:&nbsp;<span class="hljs-built_in">number</span>[];</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;paths = selection.<span class="hljs-title function_">getPaths</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(paths)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// {'{'}anchor: [0,2,44],focus:[0,2,57]{'}'}</span></span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">usePaths() 设置选区路径</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>根据传入的绝对路径设置选区。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">usePaths</span>(<span class="hljs-attr">paths</span>:&nbsp;<span class="hljs-title class_">SelectionPaths</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">selection.<span class="hljs-title function_">usePaths</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">anchor</span>: [<span class="hljs-number">0</span>,&nbsp;<span class="hljs-number">3</span>,&nbsp;<span class="hljs-number">44</span>,&nbsp;<span class="hljs-number">2</span>],</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">focus</span>: [<span class="hljs-number">0</span>,&nbsp;<span class="hljs-number">4</span>,&nbsp;<span class="hljs-number">0</span>,&nbsp;<span class="hljs-number">6</span>]</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getNextPosition() 获取后一个位置</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>根据焦点位置，获取后一个选区位置。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">getNextPosition</span>():&nbsp;<span class="hljs-title class_">SelectionPosition</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>位置类型：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 插槽偏移量</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">SelectionPosition</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">offset</span>:&nbsp;<span class="hljs-built_in">number</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getPreviousPosition() 获取前一个位置</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>根据焦点位置，获取前一个选区位置。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">getNextPosition</span>():&nbsp;<span class="hljs-title class_">SelectionPosition</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">findSlotByPaths() 获取插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>根据路径获取插槽。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">findSlotByPaths</span>(<span class="hljs-attr">paths</span>:&nbsp;<span class="hljs-built_in">number</span>[]):&nbsp;<span class="hljs-title class_">Slot</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;slot = selection.<span class="hljs-title function_">findSlotByPaths</span>([<span class="hljs-number">0</span>,&nbsp;<span class="hljs-number">3</span>,&nbsp;<span class="hljs-number">55</span>])</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">findComponentByPaths() 获取组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">根据路径获取组件。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">findComponentByPaths</span>(<span class="hljs-attr">paths</span>:&nbsp;<span class="hljs-built_in">number</span>[]):&nbsp;<span class="hljs-title class_">Component</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">示例：</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;component = selection.<span class="hljs-title function_">findComponentByPaths</span>([<span class="hljs-number">0</span>,&nbsp;<span class="hljs-number">3</span>,&nbsp;<span class="hljs-number">55</span>,&nbsp;<span class="hljs-number">8</span>])</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">getSelectedScopes() 获取选中区域</span></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">获取选区内所有的插槽片段集合。当&nbsp;</span></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(254, 254, 254);font-family:&quot;Microsoft YaHei Mono&quot;, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace">decompose 参数为 true 时，会把已选区中区域再按每个区域内容数据类型以块（Block）的方式再次拆分。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 获取选区所选择的块的集合</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;decompose 是否按块分解已选中的区域</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">getSelectedScopes</span>(decompose?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-title class_">SlotRange</span>[];</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>SlotRange 结构如下：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">SlotRange</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">startIndex</span>:&nbsp;<span class="hljs-built_in">number</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">endIndex</span>:&nbsp;<span class="hljs-built_in">number</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">当选区如下时：</span></div>
    </div>
    <div data-lang="HTML" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Component</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">Slot</span>&gt;</span>xxxx【xxxx<span class="hljs-tag">&lt;/<span class="hljs-name">Slot</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;/<span class="hljs-name">Component</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">xxxxx</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Compoonent</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">Slot</span>&gt;</span>xxxx<span class="hljs-tag">&lt;/<span class="hljs-name">Slot</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;/<span class="hljs-name">Component</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Compoonent</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">Slot</span>&gt;</span>xxxx<span class="hljs-tag">&lt;/<span class="hljs-name">Slot</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">Slot</span>&gt;</span>xx】xx<span class="hljs-tag">&lt;/<span class="hljs-name">Slot</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;/<span class="hljs-name">Component</span>&gt;</span></span></div></pre><span class="xnote-source-code-lang">HTML</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>获取的结果如下：</div>
    </div>
    <div data-lang="HTML" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Component</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">Slot</span>&gt;</span>xxxx[xxxx]<span class="hljs-tag">&lt;/<span class="hljs-name">Slot</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;/<span class="hljs-name">Component</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">[xxxxx</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Compoonent</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">Slot</span>&gt;</span>xxxx<span class="hljs-tag">&lt;/<span class="hljs-name">Slot</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;/<span class="hljs-name">Component</span>&gt;</span>]</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Compoonent</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">Slot</span>&gt;</span>[xxxx]<span class="hljs-tag">&lt;/<span class="hljs-name">Slot</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">Slot</span>&gt;</span>[xx]xx<span class="hljs-tag">&lt;/<span class="hljs-name">Slot</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;/<span class="hljs-name">Component</span>&gt;</span></span></div></pre><span class="xnote-source-code-lang">HTML</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><strong style="color:rgb(246, 48, 48)">提示：</strong>【】表示选区开始位置和结束位置，[] 表示获取的分段开始位置和结束位置。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getRanges() 获取选区内的 Range 片段</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>主要用于适配部分组件需要多选区的需求。由于默认的选区默认为一个连续的，根据文档流的结构，返回的文档片段。但有时我们需要多个不连续的选区，如表格。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>getRanges 返回一个数组，默认返回一个 Range 片段，且和 Selection 的开始和结束位置一样。当组件通过 onGetRange 勾子自定义 Range 时，这里返回定制后的结果。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">getRanges</span>():&nbsp;<span class="hljs-title class_">Range</span>[];</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 选区开始和结果位置</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">Range</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">startSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">endSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">startOffset</span>:&nbsp;<span class="hljs-built_in">number</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">endOffset</span>:&nbsp;<span class="hljs-built_in">number</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2"><span style="color:rgb(73, 80, 96)">getGreedyScopes() 获取选中 Block 范围</span></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="color:rgb(73, 80, 96)">当当前选区的开始位置或结束位置为行内内容时，则会分别向前或向后把选区扩大到最近的块级内容边界。然后再获取边界内选中的范围，返回数据结构和 getSelectedScopes 一致。</span></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getBlocks() 获取选中的块</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在 getGreedyScopes 方法返回版本的基础上，把已选中的范围内所有子插槽全部拆分出来，并返回。返回数据结构和 getSelectedScopes 一致。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getSlotRangeInCommonAncestorComponent() 获取范围</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>获取开始插槽和结束插槽在公共组件内的下标范围。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">findFirstPosition() 获取插槽第一个位置</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>获取插槽内第一个选区位置。如 toChild 为 true，则会在当插槽第一个内容为组件，且该组件还有子插槽时，继续向内查找。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">findFirstPosition</span>(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>, toChild?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-title class_">SelectionPosition</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">findLastPosition() 获取插槽最后一个位置</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>获取插槽内最后一个选区位置。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">如 toChild 为 true，则会在当插槽最后一个内容为组件，且该组件还有子插槽时，继续向内查找。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">findLastPosition</span>(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>, toChild?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-title class_">SelectionPosition</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getCommonAncestorSlotScope() 获取公共插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>获取当前选区在公共插槽的位置。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getPathsBySlot() 获取插槽路径</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>获取插槽在文档中的绝对路径，当插槽不在文档中时，返回 null。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">getPathsBySlot</span>(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>):&nbsp;<span class="hljs-built_in">number</span>[] |&nbsp;<span class="hljs-literal">null</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getNextPositionByPosition() 获取后一个位置</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>根据指定位置，获取后一个光标位置。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">getNextPositionByPosition</span>(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">offset</span>:&nbsp;<span class="hljs-built_in">number</span>):&nbsp;<span class="hljs-title class_">SelectionPosition</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getPreviousPositionByByPosition() 获取前一个位置</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>根据指定位置，获取前一个光标位置。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">getPreviousPositionByPosition</span>(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">offset</span>:&nbsp;<span class="hljs-built_in">number</span>):&nbsp;<span class="hljs-title class_">SelectionPosition</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">getScopes() 获取范围</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>根据指定的开始和结束位置，获取该区域的范围。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">getScopes</span>(<span class="hljs-attr">startSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">startIndex</span>:&nbsp;<span class="hljs-built_in">number</span>,&nbsp;<span class="hljs-attr">endSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">endIndex</span>:&nbsp;<span class="hljs-built_in">number</span>, discardEmptyScope?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-title class_">SlotRange</span>[];</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><br/></div>
    </div>
  </div>
</div></div>
    )
  }
}