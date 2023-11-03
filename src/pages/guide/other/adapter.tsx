import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>Vue 适配器</h1>
<p>Textbus 官方适配器只支持以 setup 形式开发的组件。可参考：<a target="_blank" href="https://github.com/textbus/vue-demo">https://github.com/textbus/vue-demo</a></p><pre lang="" theme="starry" class="tb-pre tb-pre-hide-line-number"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">npm install @textbus/adapter-vue</div></div><span class="tb-pre-lang"></span></div></pre>
<p>使用 Vue 开发 Textbus 视图层，只需要更换一下适配器，并使用 vue 组件编写视图渲染即可。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:3em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;<span class="tb-hl-string">'reflect-metadata'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} BrowserModule {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/platform-browser'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;Commander,</div><div class="tb-code-line">&nbsp;&nbsp;ContentType,</div><div class="tb-code-line">&nbsp;&nbsp;createVNode,</div><div class="tb-code-line">&nbsp;&nbsp;defineComponent,</div><div class="tb-code-line">&nbsp;&nbsp;onBreak, onContentInsert,</div><div class="tb-code-line">&nbsp;&nbsp;Selection,</div><div class="tb-code-line">&nbsp;&nbsp;Slot,</div><div class="tb-code-line">&nbsp;&nbsp;Textbus,</div><div class="tb-code-line">&nbsp;&nbsp;useContext,</div><div class="tb-code-line">&nbsp;&nbsp;useSelf,</div><div class="tb-code-line">{'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/core'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} createApp, defineComponent&nbsp;<span class="tb-hl-keyword">as</span>&nbsp;defineVue {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'vue'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} Adapter, ViewComponentProps {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/adapter-vue'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 创建视图 Vue 根组件</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;rootComponentView =&nbsp;<span class="tb-hl-function">defineVue</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;props: [<span class="tb-hl-string">'component'</span>,&nbsp;<span class="tb-hl-string">'rootRef'</span>],</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>(props: ViewComponentProps) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slot = props.component.slots.first</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adapter.<span class="tb-hl-function">slotRender</span>(slot, children =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">createVNode</span>(<span class="tb-hl-string">'div'</span>, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-string">'textbus-document'</span>:&nbsp;<span class="tb-hl-string">'true'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref: props.rootRef</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}, children)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 创建视图 Vue 段落组件</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;paragraphView =&nbsp;<span class="tb-hl-function">defineVue</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;props: [<span class="tb-hl-string">'component'</span>,&nbsp;<span class="tb-hl-string">'rootRef'</span>],</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>(props: ViewComponentProps) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slot = props.component.slots.first</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adapter.<span class="tb-hl-function">slotRender</span>(slot, children =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">createVNode</span>(<span class="tb-hl-string">'p'</span>, {'{'} ref: props.rootRef {'}'}, children)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 创建 Textbus 根组件</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;rootComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'RootComponent'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;type: ContentType.BlockComponent,</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">validate</span>(initData) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initData?.slots?.[<span class="tb-hl-number">0</span>] ||&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.Text,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.InlineComponent,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.BlockComponent</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;selection =&nbsp;<span class="tb-hl-function">useContext</span>(Selection)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;textbus =&nbsp;<span class="tb-hl-function">useContext</span>()</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 监听内容插入事件</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">onContentInsert</span>(ev =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 当插入的内容是一个字符串或行内组件时，我们将创建新的段落</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">if</span>&nbsp;(<span class="tb-hl-keyword">typeof</span>&nbsp;ev.data.content ===&nbsp;<span class="tb-hl-string">'string'</span>&nbsp;|| ev.data.content.type !== ContentType.BlockComponent) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 创建新的插槽，并把内容插入在新插槽内</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slot =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.Text,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.InlineComponent</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slot.<span class="tb-hl-function">insert</span>(ev.data.content)</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 创建新的段落组件，并把插槽传给段落组件</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;p = paragraphComponent.<span class="tb-hl-function">createInstance</span>(textbus, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [slot]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 在 rootComponent 的插槽内插入新段落</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ev.target.<span class="tb-hl-function">insert</span>(p)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 设置光标为段落组件插槽的索引位置</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selection.<span class="tb-hl-function">setPosition</span>(slot, slot.index)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 阻止默认的插入事件</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ev.<span class="tb-hl-function">preventDefault</span>()</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 创建 Textbus 段落组件</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;paragraphComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'ParagraphComponent'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;type: ContentType.BlockComponent,</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">validate</span>(initData) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initData?.slots?.[<span class="tb-hl-number">0</span>] ||&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.Text,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.InlineComponent</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;context =&nbsp;<span class="tb-hl-function">useContext</span>()</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;commander =&nbsp;<span class="tb-hl-function">useContext</span>(Commander)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;selection =&nbsp;<span class="tb-hl-function">useContext</span>(Selection)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;self =&nbsp;<span class="tb-hl-function">useSelf</span>()</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">onBreak</span>(ev =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ev.<span class="tb-hl-function">preventDefault</span>()</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;nextContent = ev.target.<span class="tb-hl-function">cut</span>(ev.data.index)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;p = paragraphComponent.<span class="tb-hl-function">createInstance</span>(context, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [nextContent]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commander.<span class="tb-hl-function">insertAfter</span>(p, self)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selection.<span class="tb-hl-function">selectFirstPosition</span>(p)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 实例化 Vue 适配器</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;adapter =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Adapter</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 添加渲染组件映射关系</span></div><div class="tb-code-line">&nbsp;&nbsp;[rootComponent.name]: rootComponentView,</div><div class="tb-code-line">&nbsp;&nbsp;[paragraphComponent.name]: paragraphView</div><div class="tb-code-line">{'}'}, (host, root) =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 使用 Vue 渲染 Textbus 视图</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;app =&nbsp;<span class="tb-hl-function">createApp</span>(root).<span class="tb-hl-function">provide</span>(<span class="tb-hl-string">'textbus'</span>, textbus)</div><div class="tb-code-line">&nbsp;&nbsp;app.<span class="tb-hl-function">mount</span>(host)</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;app.<span class="tb-hl-function">unmount</span>()</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><span class="tb-hl-comment">// 实例化浏览器模块</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;browserModule =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">BrowserModule</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;adapter,&nbsp;<span class="tb-hl-comment">// 添加 Vue 适配器</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">renderTo</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'editor'</span>)!</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><span class="tb-hl-comment">// 实例化 Textbus</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;textbus =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Textbus</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;imports: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;browserModule</div><div class="tb-code-line">&nbsp;&nbsp;],</div><div class="tb-code-line">&nbsp;&nbsp;components: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;rootComponent,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;paragraphComponent</div><div class="tb-code-line">&nbsp;&nbsp;]</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 创建根组件实例</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;rootModel = rootComponent.<span class="tb-hl-function">createInstance</span>(textbus)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 使用 Textbus 启动渲染</span></div><div class="tb-code-line">textbus.<span class="tb-hl-function">render</span>(rootModel)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h1>React 适配器</h1>
<p>使用 React 渲染 Textbus 需要使用 Textbus React 适配器。可参考：<a target="_blank" href="https://github.com/textbus/react-demo" style="color:rgb(68, 159, 219)">https://github.com/textbus/react-demo</a></p>
<tb-alert data-type="danger" class="tb-alert tb-alert-danger">
  <div><strong style="color:rgb(246, 48, 48)">注意：</strong>由于 React 的特性，在使用 React 渲染富文本时，将不能达到 Textbus 的最佳性能，且目前暂未找到合适的优化方案。我们在 Facebook 最新开发的 lexical 下测试，当段落达到 3000 个时，会有非常明显卡顿感，这说明，应该不是 Textbus 的使用和适配问题。Textbus 在使用 Viewfly 渲染时，可以达到 50000 个段落无卡顿编辑。</div>
</tb-alert>
<p>安装 Textbus React 适配器</p><pre lang="" theme="starry" class="tb-pre tb-pre-hide-line-number"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">npm install @textbus/adapter-react</div></div><span class="tb-pre-lang"></span></div></pre>
<p>使用 React 编写 Textbus 组件视图，并在创建编辑器时，使用 React 适配器。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:3em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;<span class="tb-hl-string">'reflect-metadata'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} BrowserModule {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/platform-browser'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;Commander,</div><div class="tb-code-line">&nbsp;&nbsp;ContentType,</div><div class="tb-code-line">&nbsp;&nbsp;createVNode,</div><div class="tb-code-line">&nbsp;&nbsp;defineComponent,</div><div class="tb-code-line">&nbsp;&nbsp;onBreak, onContentInsert,</div><div class="tb-code-line">&nbsp;&nbsp;Selection,</div><div class="tb-code-line">&nbsp;&nbsp;Slot,</div><div class="tb-code-line">&nbsp;&nbsp;Textbus,</div><div class="tb-code-line">&nbsp;&nbsp;useContext,</div><div class="tb-code-line">&nbsp;&nbsp;useSelf,</div><div class="tb-code-line">{'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/core'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} createRoot {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'react-dom/client'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} Adapter, ViewComponentProps {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/adapter-react'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">RootComponentView</span>(props: ViewComponentProps&lt;<span class="tb-hl-keyword">typeof</span>&nbsp;rootComponent&gt;) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slot = props.component.slots.first</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adapter.<span class="tb-hl-function">slotRender</span>(slot, children =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">createVNode</span>(<span class="tb-hl-string">'div'</span>, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-string">'textbus-document'</span>:&nbsp;<span class="tb-hl-string">'true'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref: props.rootRef</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}, children)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div><div class="tb-code-line">&nbsp;&nbsp;)</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">ParagraphView</span>(props: ViewComponentProps&lt;<span class="tb-hl-keyword">typeof</span>&nbsp;paragraphComponent&gt;) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slot = props.component.slots.first</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;adapter.<span class="tb-hl-function">slotRender</span>(slot, children =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">createVNode</span>(<span class="tb-hl-string">'p'</span>, {'{'} ref: props.rootRef {'}'}, children)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;)</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 创建 Textbus 根组件</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;rootComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'RootComponent'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;type: ContentType.BlockComponent,</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">validate</span>(initData) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initData?.slots?.[<span class="tb-hl-number">0</span>] ||&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.Text,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.InlineComponent,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.BlockComponent</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;selection =&nbsp;<span class="tb-hl-function">useContext</span>(Selection)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;textbus =&nbsp;<span class="tb-hl-function">useContext</span>()</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 监听内容插入事件</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">onContentInsert</span>(ev =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 当插入的内容是一个字符串或行内组件时，我们将创建新的段落</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">if</span>&nbsp;(<span class="tb-hl-keyword">typeof</span>&nbsp;ev.data.content ===&nbsp;<span class="tb-hl-string">'string'</span>&nbsp;|| ev.data.content.type !== ContentType.BlockComponent) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 创建新的插槽，并把内容插入在新插槽内</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slot =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.Text,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.InlineComponent</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slot.<span class="tb-hl-function">insert</span>(ev.data.content)</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 创建新的段落组件，并把插槽传给段落组件</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;p = paragraphComponent.<span class="tb-hl-function">createInstance</span>(textbus, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [slot]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 在 rootComponent 的插槽内插入新段落</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ev.target.<span class="tb-hl-function">insert</span>(p)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 设置光标为段落组件插槽的索引位置</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selection.<span class="tb-hl-function">setPosition</span>(slot, slot.index)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 阻止默认的插入事件</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ev.<span class="tb-hl-function">preventDefault</span>()</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 创建 Textbus 段落组件</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;paragraphComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'ParagraphComponent'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;type: ContentType.BlockComponent,</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">validate</span>(initData) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initData?.slots?.[<span class="tb-hl-number">0</span>] ||&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.Text,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.InlineComponent</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;context =&nbsp;<span class="tb-hl-function">useContext</span>()</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;commander =&nbsp;<span class="tb-hl-function">useContext</span>(Commander)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;selection =&nbsp;<span class="tb-hl-function">useContext</span>(Selection)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;self =&nbsp;<span class="tb-hl-function">useSelf</span>()</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">onBreak</span>(ev =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ev.<span class="tb-hl-function">preventDefault</span>()</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;nextContent = ev.target.<span class="tb-hl-function">cut</span>(ev.data.index)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;p = paragraphComponent.<span class="tb-hl-function">createInstance</span>(context, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [nextContent]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commander.<span class="tb-hl-function">insertAfter</span>(p, self)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selection.<span class="tb-hl-function">selectFirstPosition</span>(p)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 实例化 React 适配器</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;adapter =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Adapter</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 添加渲染组件映射关系</span></div><div class="tb-code-line">&nbsp;&nbsp;[rootComponent.name]: RootComponentView,</div><div class="tb-code-line">&nbsp;&nbsp;[paragraphComponent.name]: ParagraphView</div><div class="tb-code-line">{'}'}, (host, root) =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 使用 React 渲染 Textbus 视图</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;app =&nbsp;<span class="tb-hl-function">createRoot</span>(host)</div><div class="tb-code-line">&nbsp;&nbsp;app.<span class="tb-hl-function">render</span>(root)</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;app.<span class="tb-hl-function">unmount</span>()</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><span class="tb-hl-comment">// 实例化浏览器模块</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;browserModule =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">BrowserModule</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;adapter,&nbsp;<span class="tb-hl-comment">// 添加 React 适配器 &nbsp;</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">renderTo</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'editor'</span>)!</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><span class="tb-hl-comment">// 实例化 Textbus</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;textbus =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Textbus</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;imports: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;browserModule</div><div class="tb-code-line">&nbsp;&nbsp;],</div><div class="tb-code-line">&nbsp;&nbsp;components: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;rootComponent,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;paragraphComponent</div><div class="tb-code-line">&nbsp;&nbsp;]</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 创建根组件实例</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;rootModel = rootComponent.<span class="tb-hl-function">createInstance</span>(textbus)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 使用 Textbus 启动渲染</span></div><div class="tb-code-line">textbus.<span class="tb-hl-function">render</span>(rootModel)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre></div>
    )
  }
}