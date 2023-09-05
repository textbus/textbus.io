import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>插槽</h1>
<p>什么是插槽？</p>
<p>插槽在 Textbus 中表示一段用户可以用光标选择或编辑的文档。插槽中的内容既可以是组件，也可以是文本。当用户在文档中点击或选择时，Textbus 总是会自动的把光标落在插槽内，当用户移动光标时，也是如此。你设置光标时，也只能把光标设置在插槽内。</p>
<p>在自定义组件一节，我们已经看到过插槽在组件内的使用。下面，我们将对插槽属性或方法进行说明。</p>
<h2>Schema</h2>
<p>在实例化插槽时，总是会要求你向传入插槽内可插入内容的类型，这是为了保证文档数据符合我们的预期。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} ContentType {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/core'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 只支持插入文字的插槽</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;slot =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;ContentType.Text</div><div class="tb-code-line">])</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 支持插入 block 组件和 inline 组件及文本的插槽</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;slot2 =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;ContentType.Text</div><div class="tb-code-line">&nbsp;&nbsp;ContentType.InlineComponent</div><div class="tb-code-line">&nbsp;&nbsp;ContentType.BlockComponent</div><div class="tb-code-line">])</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>state</h2>
<p>插槽也可以定义自己的状态，以满足一些场景的需要，如表格的单元格，需要插槽储存 colspan 和 rowspan 的值。我们可以在实例化插槽时，定义插槽的状态。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;slot =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;ContentType.Text</div><div class="tb-code-line">], {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;rowspan:&nbsp;<span class="tb-hl-number">1</span>,</div><div class="tb-code-line">&nbsp;&nbsp;colspan:&nbsp;<span class="tb-hl-number">1</span></div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>属性</h2>
<h3>schema</h3>
<p>插槽的 schema。</p>
<h3>parent</h3>
<p>插槽的父组件。</p>
<h3>changeMarker</h3>
<p>插槽数据变更标记器。</p>
<h3>parentSlot</h3>
<p>插槽父组件的父插槽。</p>
<h3>length</h3>
<p>插槽内数据的长度。</p>
<h3>isEmpty</h3>
<p>插槽是否为空。<strong style="color:rgb(231, 79, 94)">注意</strong>：当插槽为空时，实际上内部还会有一个&nbsp;<code>\n</code>作为占位符。</p>
<h3>index</h3>
<p>当修改插槽数据时的索引位置。</p>
<h2>方法</h2>
<h3>updateState()</h3>
<p>修改插槽状态的方法。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">slot.<span class="tb-hl-function">updateState</span>(draft =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;draft.colspan =&nbsp;<span class="tb-hl-number">2</span></div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>write()</h3>
<p>根据索引位置，插入新的文本或组件，并更新索引位置。同时，如果新插入的文本或行内组件，则会把插入位置前面的样式自动应用到新插入的内容上。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">slot.<span class="tb-hl-function">write</span>(<span class="tb-hl-string">'text'</span>)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>insert()</h3>
<p>根据索引位置，插入新的文本或组件，并更新索引位置。当插入的内容是文本时，还可以同时传入新文本的格式。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 只插入文本</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">insert</span>(<span class="tb-hl-string">'hello'</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 插入文本且设置文字大小为 12px</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">insert</span>(<span class="tb-hl-string">'world!'</span>, fontSizeFormatter,&nbsp;<span class="tb-hl-string">'12px'</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 插入文本且设置多种样式</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">insert</span>(<span class="tb-hl-string">'你好，世界!'</span>, [</div><div class="tb-code-line">&nbsp;&nbsp;[fontSizeFormatter,&nbsp;<span class="tb-hl-string">'12px'</span>],</div><div class="tb-code-line">&nbsp;&nbsp;[boldFormatter,&nbsp;<span class="tb-hl-boolean">true</span>]</div><div class="tb-code-line">])</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 插入组件</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">insert</span>(myComponent)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>retain()</h3>
<p>设置插槽的索引。当新设置的索引大于插槽的索引，且有传入样式时，则会把两个索引之间的内容应用新的样式。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 设置插槽索引为 6</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">retain</span>(<span class="tb-hl-number">6</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 设置 6~10 之间内容的样式</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">retain</span>(<span class="tb-hl-number">10</span>, fontSizeFormatter,&nbsp;<span class="tb-hl-string">'12px'</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 设置 10 ~ 12 之间内容的多个样式</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">retain</span>(<span class="tb-hl-number">12</span>, [</div><div class="tb-code-line">&nbsp;&nbsp;[fontSizeFormatter,&nbsp;<span class="tb-hl-string">'14px'</span>],</div><div class="tb-code-line">&nbsp;&nbsp;[boldFormatter,&nbsp;<span class="tb-hl-boolean">true</span>]</div><div class="tb-code-line">])</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>delete()</h3>
<p>删除内容。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 从插槽索引位置向前删除 5 个内容</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">delete</span>(<span class="tb-hl-number">5</span>)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>applyFormat()</h3>
<p>给插槽应用样式。如果是块级样式，则把传入的值应用到整个插槽。如果是行内样式，则根据传入的配置范围应用。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 行内样式</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">applyFormat</span>(boldFormatter, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;value:&nbsp;<span class="tb-hl-boolean">true</span>,</div><div class="tb-code-line">&nbsp;&nbsp;startIndex:&nbsp;<span class="tb-hl-number">3</span>,</div><div class="tb-code-line">&nbsp;&nbsp;endIndex:&nbsp;<span class="tb-hl-number">6</span></div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 块级样式</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">applyFormat</span>(textAlignFormatter,&nbsp;<span class="tb-hl-string">'right'</span>)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>removeComponent()</h3>
<p>删除插槽内指定的组件实例。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">slot.<span class="tb-hl-function">removeComponent</span>(myComponentInstance)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>cut()</h3>
<p>剪切内容，并返回一个新的插槽实例。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 剪切所有内容</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;slot1 = slot.<span class="tb-hl-function">cut</span>()</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 剪切插槽第 3 位后面所有的内容</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;slot2 = slot.<span class="tb-hl-function">cut</span>(<span class="tb-hl-number">3</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 剪切 3~6 之间的内容</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;slot3 = slot.<span class="tb-hl-function">cut</span>(<span class="tb-hl-number">3</span>,&nbsp;<span class="tb-hl-number">6</span>)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>cutTo()</h3>
<p>把内容剪切到指定的插槽。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;newSlot =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;ContentType.Text</div><div class="tb-code-line">])</div><div class="tb-code-line"><span class="tb-hl-comment">// 剪切所有内容</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">cutTo</span>(newSlot)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 剪切插槽第 3 位后面所有的内容</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">cutTo</span>(newSlot,&nbsp;<span class="tb-hl-number">3</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 剪切 3~6 之间的内容</span></div><div class="tb-code-line">slot.<span class="tb-hl-function">cutTo</span>(newSlot,&nbsp;<span class="tb-hl-number">3</span>,&nbsp;<span class="tb-hl-number">6</span>)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>indexOf()</h3>
<p>查找一个组件在插槽内的索引位置，如果没有找到，则返回 -1。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;index = slot.<span class="tb-hl-function">indexOf</span>(myComponentInstance)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>getContentAtIndex()</h3>
<p>获取在插槽指定位置的内容。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;content = slot.<span class="tb-hl-function">getContentAtIndex</span>(<span class="tb-hl-number">5</span>)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>sliceContent()</h3>
<p>根据指定位置，把内容切分为数组并返回。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 切分所有内容</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;contentArray = slot.<span class="tb-hl-function">sliceContent</span>()</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 切分第 3 位后面的所有内容</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;contentArray1 = slot.<span class="tb-hl-function">sliceContent</span>(<span class="tb-hl-number">3</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 切分 3~6 位的内容</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;contentArray2 = slot.<span class="tb-hl-function">sliceContent</span>(<span class="tb-hl-number">3</span>,&nbsp;<span class="tb-hl-number">6</span>)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>createFormatTree()</h3>
<p>根据插槽的格式数据，生成渲染树。</p>
<h3>getFormatRangesByFormatter()</h3>
<p>根据 Formatter 返回插槽内指定范围内的所有样式。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;formatRanges = slot.<span class="tb-hl-function">getFormatRangesByFormatter</span>(boldFormatter,&nbsp;<span class="tb-hl-number">3</span>,&nbsp;<span class="tb-hl-number">20</span>)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>getFormats()</h3>
<p>获取插槽所有的格式。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;formats = slot.<span class="tb-hl-function">getFormats</span>()</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>toJSON()</h3>
<p>把插槽转换为 JSON 并返回。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;json = slot.<span class="tb-hl-function">toJSON</span>()</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>toDelta()</h3>
<p>将内容转换为 delta 格式。</p>
<h3>toString()</h3>
<p>将内容转换为字符串。</p></div>
    )
  }
}