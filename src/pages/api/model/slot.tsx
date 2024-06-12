import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><div class="xnote-root">
  <div data-placeholder="" class="xnote-content">
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h1">插槽</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>什么是插槽？</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>插槽在 Textbus 中表示一段用户可以用光标选择或编辑的文档。插槽中的内容既可以是组件，也可以是文本。当用户在文档中点击或选择时，Textbus 总是会自动的把光标落在插槽内，当用户移动光标时，也是如此。你设置光标时，也只能把光标设置在插槽内。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>在自定义组件一节，我们已经看到过插槽在组件内的使用。下面，我们将对插槽属性或方法进行说明。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">Schema</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>在实例化插槽时，总是会要求你向传入插槽内可插入内容的类型，这是为了保证文档数据符合我们的预期。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">ContentType</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/core'</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 只支持插入文字的插槽</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;slot =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Slot</span>([</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">Text</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">])</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 支持插入 block 组件和 inline 组件及文本的插槽</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;slot2 =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Slot</span>([</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">Text</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">InlineComponent</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">BlockComponent</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">])</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">属性</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">schema</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>插槽的 schema。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">parent</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>插槽的父组件。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">changeMarker</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>插槽数据变更标记器。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">parentSlot</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>插槽父组件的父插槽。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">length</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>插槽内数据的长度。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">isEmpty</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>插槽是否为空。<strong style="color:rgb(231, 79, 94)">注意</strong>：当插槽为空时，实际上内部还会有一个&nbsp;<code class="xnote-code">\n</code>作为占位符。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">index</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>当修改插槽数据时的索引位置。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">方法</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">updateState()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>修改插槽状态的方法。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">updateState</span>(<span class="hljs-function"><span class="hljs-params">draft</span>&nbsp;=&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;draft.<span class="hljs-property">colspan</span>&nbsp;=&nbsp;<span class="hljs-number">2</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">write()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>根据索引位置，插入新的文本或组件，并更新索引位置。同时，如果新插入的文本或行内组件，则会把插入位置前面的样式自动应用到新插入的内容上。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">write</span>(<span class="hljs-string">'text'</span>)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">insert()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>根据索引位置，插入新的文本或组件，并更新索引位置。当插入的内容是文本时，还可以同时传入新文本的格式。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 只插入文本</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">insert</span>(<span class="hljs-string">'hello'</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 插入文本且设置文字大小为 12px</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">insert</span>(<span class="hljs-string">'world!'</span>, fontSizeFormatter,&nbsp;<span class="hljs-string">'12px'</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 插入文本且设置多种样式</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">insert</span>(<span class="hljs-string">'你好，世界!'</span>, [</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;[fontSizeFormatter,&nbsp;<span class="hljs-string">'12px'</span>],</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;[boldFormatter,&nbsp;<span class="hljs-literal">true</span>]</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">])</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 插入组件</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">insert</span>(myComponent)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">retain()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>设置插槽的索引。当新设置的索引大于插槽的索引，且有传入样式时，则会把两个索引之间的内容应用新的样式。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置插槽索引为 6</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">retain</span>(<span class="hljs-number">6</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置 6~10 之间内容的样式</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">retain</span>(<span class="hljs-number">10</span>, fontSizeFormatter,&nbsp;<span class="hljs-string">'12px'</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置 10 ~ 12 之间内容的多个样式</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">retain</span>(<span class="hljs-number">12</span>, [</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;[fontSizeFormatter,&nbsp;<span class="hljs-string">'14px'</span>],</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;[boldFormatter,&nbsp;<span class="hljs-literal">true</span>]</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">])</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">delete()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>删除内容。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 从插槽索引位置向前删除 5 个内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">delete</span>(<span class="hljs-number">5</span>)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">applyFormat()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>给插槽应用样式。如果是块级样式，则把传入的值应用到整个插槽。如果是行内样式，则根据传入的配置范围应用。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 行内样式</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">applyFormat</span>(boldFormatter, {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">value</span>:&nbsp;<span class="hljs-literal">true</span>,</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">startIndex</span>:&nbsp;<span class="hljs-number">3</span>,</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">endIndex</span>:&nbsp;<span class="hljs-number">6</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 块级样式</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">applyFormat</span>(textAlignFormatter,&nbsp;<span class="hljs-string">'right'</span>)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">removeComponent()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>删除插槽内指定的组件实例。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">removeComponent</span>(myComponentInstance)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">cut()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>剪切内容，并返回一个新的插槽实例。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 剪切所有内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;slot1 = slot.<span class="hljs-title function_">cut</span>()</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 剪切插槽第 3 位后面所有的内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;slot2 = slot.<span class="hljs-title function_">cut</span>(<span class="hljs-number">3</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 剪切 3~6 之间的内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;slot3 = slot.<span class="hljs-title function_">cut</span>(<span class="hljs-number">3</span>,&nbsp;<span class="hljs-number">6</span>)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">cutTo()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>把内容剪切到指定的插槽。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;newSlot =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Slot</span>([</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">Text</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">])</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 剪切所有内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">cutTo</span>(newSlot)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 剪切插槽第 3 位后面所有的内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">cutTo</span>(newSlot,&nbsp;<span class="hljs-number">3</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 剪切 3~6 之间的内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">slot.<span class="hljs-title function_">cutTo</span>(newSlot,&nbsp;<span class="hljs-number">3</span>,&nbsp;<span class="hljs-number">6</span>)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">indexOf()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>查找一个组件在插槽内的索引位置，如果没有找到，则返回 -1。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;index = slot.<span class="hljs-title function_">indexOf</span>(myComponentInstance)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">getContentAtIndex()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>获取在插槽指定位置的内容。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;content = slot.<span class="hljs-title function_">getContentAtIndex</span>(<span class="hljs-number">5</span>)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">sliceContent()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>根据指定位置，把内容切分为数组并返回。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 切分所有内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;contentArray = slot.<span class="hljs-title function_">sliceContent</span>()</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 切分第 3 位后面的所有内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;contentArray1 = slot.<span class="hljs-title function_">sliceContent</span>(<span class="hljs-number">3</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 切分 3~6 位的内容</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;contentArray2 = slot.<span class="hljs-title function_">sliceContent</span>(<span class="hljs-number">3</span>,&nbsp;<span class="hljs-number">6</span>)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">createFormatTree()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>根据插槽的格式数据，生成渲染树。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">getFormatRangesByFormatter()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>根据 Formatter 返回插槽内指定范围内的所有样式。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;formatRanges = slot.<span class="hljs-title function_">getFormatRangesByFormatter</span>(boldFormatter,&nbsp;<span class="hljs-number">3</span>,&nbsp;<span class="hljs-number">20</span>)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">getFormats()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>获取插槽所有的格式。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;formats = slot.<span class="hljs-title function_">getFormats</span>()</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">toJSON()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>把插槽转换为 JSON 并返回。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;json = slot.<span class="hljs-title function_">toJSON</span>()</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">toDelta()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>将内容转换为 delta 格式。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h3">toString()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>将内容转换为字符串。</p>
    </div>
  </div>
</div></div>
    )
  }
}
