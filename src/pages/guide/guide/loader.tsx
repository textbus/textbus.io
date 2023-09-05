import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>加载器简介</h1>
<p>在我们前面开发的编辑器中，我们已开发了各种组件、格式、属性等，并且，我们也大致掌握了插槽、选区和命令的基本使用。但如果你去尝试复制一段内容并粘贴到编辑器中时，你将会发现不会产生任何反应。</p>
<p>这是因为 Textbus 并不认识任何 HTML 内容，我们应该明确告诉 Textbus，当遇到 HTML 时，应该怎么去解析这些内容，并转换成我们的组件、插槽以及格式。</p>
<p>这就是加载器（loader）的作用。</p>
<h2>组件加载器</h2>
<p>组件加载器是为了让我们能从 HTML 中识别出我们对应的组件，并把相应的数据转换成我们的组件数据。</p>
<p>加载器接口如下：</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;* 组件加载器</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;*/</span></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">ComponentLoader</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 识别组件的匹配方法 */</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">match</span>(element: HTMLElement):&nbsp;<span class="tb-hl-builtin">boolean</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 读取组件内容的方法 */</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element: HTMLElement, injector: Injector, slotParser: SlotParser): ComponentInstance | Slot |&nbsp;<span class="tb-hl-keyword">void</span></div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<tb-word-explain>
  <div style="width:140px" class="tb-word-explain-title-group">
    <div class="tb-word-explain-title">match()</div>
    <div class="tb-word-explain-subtitle">识别组件的方法</div>
  </div>
  <div class="tb-word-explain-detail">用于匹配一个 DOM 节点是不是组件的根节点，返回 boolean 值。Textbus 在调用时，会传入当前要匹配的 DOM 节点。当返回结果为 false 时，即认为当前 DOM 节点不是我们要识别的组件，Textbus 会跳过并继续调用其它的加载器，继续尝试匹配。当返回为 true 时，则会立即调用 read 方法，读取组件的内容。</div>
</tb-word-explain>
<tb-word-explain>
  <div style="width:140px" class="tb-word-explain-title-group">
    <div class="tb-word-explain-title">read()</div>
    <div class="tb-word-explain-subtitle">读取组件内容的方法</div>
  </div>
  <div class="tb-word-explain-detail">当 match 方法返回为 true 时，Textbus 会把匹配到的 DOM 节点，再次传入 read 方法的第一个参数，并同时在第二个参数传入当前编辑器的 IoC 容器（Injector），在第三个参数传入用于解析插槽内容的函数（SlotParser）。<br/>我们需要在 read 方法内完成组件的读取，并返回组件的实例（也可以返回插槽，主要用于拍平数据结构，但在大多数情况下不需要，因在此不多做介绍）。<br/></div>
</tb-word-explain>
<p>我们以段落组件为例，下面让我们来编写一个段落组件的加载器。</p>
<p>这是我们前面编写的段落组件：</p><pre lang="Tsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-comment">// # paragraph.component.tsx</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} defineComponent, ContentType, createVNode {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/core'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} ViewComponentProps {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/adapter-viewfly'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} ViewAdapter {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/platform-browser'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} inject {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/core'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;paragraphComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'ParagraphComponent'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;type: ContentType.BlockComponent</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;ParagraphComponentView = (props: ViewComponentProps&lt;<span class="tb-hl-keyword">typeof</span>&nbsp;paragraphComponent&gt;) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;adapter =&nbsp;<span class="tb-hl-function">inject</span>(ViewAdapter)</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">data-component</span>={'{'}props.component.name{'}'}<span class="tb-hl-tag">&nbsp;</span><span class="tb-hl-attr-name">ref</span>={'{'}props.rootRef{'}'}&gt;</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adapter.<span class="tb-hl-function">slotRender</span>(props.component.slots.first!, children =&gt; {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">createVNode</span>(<span class="tb-hl-string">'p'</span>,&nbsp;<span class="tb-hl-keyword">null</span>, children)</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">Tsx</span></div></pre>
<p>我们可以看到，我们的段落组件根节点为一个 div 标签，并且有一个&nbsp;<code>data-component="ParagraphComponent"</code>&nbsp;的属性。而段落组件内插槽的内容渲染在了一个 p 标签内。我们可以编辑如下加载器。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} ComponentInstance, Slot, ContentType {'}'} form&nbsp;<span class="tb-hl-string">'@textbus/core'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} ComponentLoder, SlotParser {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/platform-browser'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} Injector {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/core'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;paragraphComponentLoader: ComponentLoader = {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">match</span>(element: HTMLElement) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;element.tagName ===&nbsp;<span class="tb-hl-string">'DIV'</span>&nbsp;&amp;&amp; element.dataset.component === paragraphComponent.name</div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element: HTMLElement, injector: Injector, slotParser: SlotParser): ComponentInstance | Slot |&nbsp;<span class="tb-hl-keyword">void</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 获取插槽内容的容器节点</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;p = element.children[<span class="tb-hl-number">0</span>]&nbsp;<span class="tb-hl-keyword">as</span>&nbsp;HTMLParagraphElement</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 将容器节点内的内容读取到新创建的插槽内</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slot =&nbsp;<span class="tb-hl-function">slotParser</span>(<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([ContentType.Text, ContentType.InlineComponent]), p)</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 创建段落组件并返回</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;paragraphComponent.<span class="tb-hl-function">createInstance</span>(injector, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [slot]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>复杂插槽节点解析</h3>
<p>当你组件在组件通过 slotRender 渲染插槽内容时，如果有多层节点，那么，除了 slotParser 的第二个参数需要传入插槽的根节点外，还需要传入在组件内渲染 content 的根节点。</p>
<p>如组件是这样渲染的。</p><pre lang="Tsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;ParagraphComponentView = (props: ViewComponentProps&lt;<span class="tb-hl-keyword">typeof</span>&nbsp;paragraphComponent&gt;) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;adapter =&nbsp;<span class="tb-hl-function">inject</span>(ViewAdapter)</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">data-component</span>={'{'}props.component.name{'}'}<span class="tb-hl-tag">&nbsp;</span><span class="tb-hl-attr-name">ref</span>={'{'}props.rootRef{'}'}&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adapter.<span class="tb-hl-function">slotRender</span>(props.component.slots.first!, children =&gt; {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">createVNode</span>(<span class="tb-hl-string">'div'</span>, {'{'}<span class="tb-hl-keyword">class</span>:&nbsp;<span class="tb-hl-string">'slot-root'</span>{'}'}, [</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">createVNode</span>(<span class="tb-hl-string">'div'</span>,&nbsp;<span class="tb-hl-keyword">null</span>, [<span class="tb-hl-string">'text'</span>]),</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">createVNode</span>(<span class="tb-hl-string">'p'</span>, {'{'}<span class="tb-hl-keyword">class</span>:&nbsp;<span class="tb-hl-string">'slot-content'</span>{'}'}, children)</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">Tsx</span></div></pre>
<p>那么在加载器中，则需要：</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;paragraphComponentLoader: ComponentLoader = {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">match</span>(element: HTMLElement) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;element.tagName ===&nbsp;<span class="tb-hl-string">'DIV'</span>&nbsp;&amp;&amp; element.dataset.component === paragraphComponent.name</div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element: HTMLElement, injector: Injector, slotParser: SlotParser): ComponentInstance | Slot |&nbsp;<span class="tb-hl-keyword">void</span>&nbsp;{'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 获取插槽根节点</span></div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slotRoot = element.children[<span class="tb-hl-number">0</span>]&nbsp;<span class="tb-hl-keyword">as</span>&nbsp;HTMLDivElement</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 将容器节点内的内容读取到新创建的插槽内</span></div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slot =&nbsp;<span class="tb-hl-function">slotParser</span>(</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([ContentType.Text, ContentType.InlineComponent]),</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slotRoot,</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slotRoot.children[<span class="tb-hl-number">1</span>]</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line-emphasize tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 创建段落组件并返回</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;paragraphComponent.<span class="tb-hl-function">createInstance</span>(injector, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [slot]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>我们可以继续编写其它组件的加载器，组件加载器编写完成后，我们还需要把加载器注册到我们的浏览器模块中，Textbus 会在解析 HTML 时，自动调用我们的组件加载器。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;browserModule =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">BrowserModule</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'editor'</span>)!, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;adapter,&nbsp;<span class="tb-hl-comment">// 添加 Viewfly 适配器</span></div><div class="tb-code-line">&nbsp;&nbsp;componentLoadrs: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;paragraphComponentLoader,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;listComponentLoader</div><div class="tb-code-line">&nbsp;&nbsp;]</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<tb-alert data-type="warning" class="tb-alert tb-alert-warning">
  <div><strong style="color:rgb(246, 48, 48)">重要提示：</strong>我们应当把除根组件外的所有组件和加载器都通过配置项注册到编辑器中，这样 Textbus 在解析 HTML 或做历史记录操作时才能找到对应的加载器和组件。<br/>当没有配置相应加载器时，将导致 Textbus 不能正常解析 HTML，也无法实现复制粘贴功能。当没有配置相应的组件时，Textbus 将不能对相应的组件做历史记录。<br/></div>
</tb-alert>
<h3>格式兼容</h3>
<p>在实际的项目中，我们可能需要兼容来自 word、excel、网页或其它编辑器内容。我们可以灵活使用加载器的特性，用来兼容这些数据。如，我们完全可以把一个 table 转换为一个段落组件，只需要 paragraphComponentLoader 的 match 方法中，添加 div 标签的匹配即可。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;paragraphComponentLoader: ComponentLoader = {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">match</span>(element: HTMLElement) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;element.tagName ===&nbsp;<span class="tb-hl-string">'DIV'</span>&nbsp;&amp;&amp; element.dataset.component === paragraphComponent.name ||</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;element.tagName ===&nbsp;<span class="tb-hl-string">'TABLE'</span></div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element: HTMLElement, injector: Injector, slotParser: SlotParser): ComponentInstance | Slot |&nbsp;<span class="tb-hl-keyword">void</span>&nbsp;{'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">if</span>&nbsp;(element.tagName ===&nbsp;<span class="tb-hl-string">'TABLE'</span>) {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 这里编辑解析逻辑并返回对应组件</span></div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;tableComponent.<span class="tb-hl-function">createInstance</span>(injector, {'{'}...{'}'})</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 获取插槽内容的容器节点</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;p = element.children[<span class="tb-hl-number">0</span>]&nbsp;<span class="tb-hl-keyword">as</span>&nbsp;HTMLParagraphElement</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 将容器节点内的内容读取到新创建的插槽内</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slot =&nbsp;<span class="tb-hl-function">slotParser</span>(<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([ContentType.Text, ContentType.InlineComponent]), p)</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 创建段落组件并返回</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;paragraphComponent.<span class="tb-hl-function">createInstance</span>(injector, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [slot]</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>灵活使用加载器，可以帮我们兼容来自任何数据源的数据。</p>
<h2>格式加载器</h2>
<h3 style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">行内格式加载器</span></h3>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">和组件一样，格式也需要能够识别 DOM 节点，我们同样需要加载器来完成这个工作，格式加载器接口定义如下：</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">FormatLoaderReadResult</span>&lt;T<span class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-keyword">extends</span><span class="tb-hl-class-name">&nbsp;FormatValue</span>&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;formatter: Formatter&lt;T&gt;</div><div class="tb-code-line">&nbsp;&nbsp;value: T</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;* 格式加载器</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;*/</span></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">FormatLoader</span>&lt;T<span class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-keyword">extends</span><span class="tb-hl-class-name">&nbsp;FormatValue</span>&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 匹配一个 DOM 节点是否是某个格式节点</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param element</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">match</span>(element: HTMLElement):&nbsp;<span class="tb-hl-builtin">boolean</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 读取匹配到的节点，并返回读取后的信息</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param element</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element: HTMLElement): FormatLoaderReadResult&lt;T&gt;</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<tb-word-explain>
  <div style="width:140px" class="tb-word-explain-title-group">
    <div style="text-align:right" class="tb-word-explain-title"><strong style="font-size:inherit">match()</strong></div>
    <div style="text-align:right" class="tb-word-explain-subtitle"><span style="font-size:0.9em">用于识别格式的方法</span></div>
  </div>
  <div class="tb-word-explain-detail">匹配一个节点是否为一个格式节点。返回 boolean 值。</div>
</tb-word-explain>
<tb-word-explain>
  <div style="width:140px" class="tb-word-explain-title-group">
    <div style="text-align:right" class="tb-word-explain-title"><strong style="font-size:inherit">read()</strong></div>
    <div style="text-align:right" class="tb-word-explain-subtitle"><span style="font-size:0.9em">读取格式值的方法</span></div>
  </div>
  <div class="tb-word-explain-detail">当 match 方法返回值为 true 时，则会调用 read 方法获取格式的值并返回。</div>
</tb-word-explain>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">我们以字体大小为例，创建一个加载器对应的 Formatter：</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;fontSizeFormatter = {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'FontSizeFormatter'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;columnd:&nbsp;<span class="tb-hl-boolean">false</span>,</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">render</span>(chilren, value) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fallbackTagName:&nbsp;<span class="tb-hl-string">'span'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">attach</span>(host: VElement) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;element.styles.<span class="tb-hl-function">set</span>(<span class="tb-hl-string">'fontSize'</span>, value)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;fontSizeFormatLoader = {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 匹配一个节点是否为格式节点</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">match</span>(element) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;!!element.style.fontSize</div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 读取格式的值</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formatter: fontSizeFormatter,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: element.style.fontSize</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">我们可以继续完成所有格式加载器，当加载器编写完成后，我们应该把它们注册到浏览器模块中。</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;browserModule =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">BrowserModule</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'editor'</span>)!, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;adapter,&nbsp;<span class="tb-hl-comment">// 添加 Viewfly 适配器</span></div><div class="tb-code-line">&nbsp;&nbsp;componentLoadrs: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;paragraphComponentLoader,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;listComponentLoader</div><div class="tb-code-line">&nbsp;&nbsp;],</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;formatLoaders: [</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;colorFormatLoader,</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;boldFormatLoader,</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;fontSizeFormatLoader</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;]</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2><span style="color:rgb(73, 80, 96)">属性加载器</span></h2>
<p><span style="color:rgb(73, 80, 96)">属性加载器和格式加载器一样，只是返回的数据有所不同。</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">AttributeLoaderReadResult</span>&lt;T<span class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-keyword">extends</span><span class="tb-hl-class-name">&nbsp;FormatValue</span>&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;attribute: Attribute&lt;T&gt;</div><div class="tb-code-line">&nbsp;&nbsp;value: T</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;* 属性加载器</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;*/</span></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">AttributeLoader</span>&lt;T<span class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-keyword">extends</span><span class="tb-hl-class-name">&nbsp;FormatValue</span>&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 匹配一个 DOM 节点是否是某个属性节点</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param element</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">match</span>(element: HTMLElement):&nbsp;<span class="tb-hl-builtin">boolean</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 读取匹配到的节点，并返回读取后的信息</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param element</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element: HTMLElement): AttributeLoaderReadResult&lt;T&gt;</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>我们以对齐方式的属性加载器为例：</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;textAlignAttributeLoader: AttributeLoader&lt;<span class="tb-hl-builtin">string</span>&gt; = {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">match</span>(element: HTMLElement) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;!!element.style.textAlign</div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element: HTMLElement) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attribute: textAlignAttribute,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: element.style.textAlign</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p><span style="color:rgb(73, 80, 96)">不要忘记把加载器添加到浏览器模块中。</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;browserModule =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">BrowserModule</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'editor'</span>)!, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;adapter,&nbsp;<span class="tb-hl-comment">// 添加 Viewfly 适配器</span></div><div class="tb-code-line">&nbsp;&nbsp;componentLoadrs: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;paragraphComponentLoader,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;listComponentLoader</div><div class="tb-code-line">&nbsp;&nbsp;],</div><div class="tb-code-line">&nbsp;&nbsp;formatLoaders: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;colorFormatLoader,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;boldFormatLoader,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;fontSizeFormatLoader</div><div class="tb-code-line">&nbsp;&nbsp;],</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;attributeLoaders: [</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;textAlignAttributeLoader</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;]</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h1 style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">总结</span></h1>
<p><span style="color:rgb(73, 80, 96)">加载器是 Textbus 识别 HTML 的关键实现，由于 Textbus 的灵活性，在 Textbus 内部并未预置任何规则来解析 HTML，需要我们根据需要添加合适的加载器并注册到浏览器模块中。</span></p>
<p><span style="color:rgb(73, 80, 96)">我们也可以利用加载器的特点，对一些外来数据做匹配，并转换成我们的数据。不仅是组件的加载器可以转换任意节点，格式和属性加载器也是一样的。</span></p>
<tb-alert data-type="danger" class="tb-alert tb-alert-danger">
  <div><strong style="color:#f63030">重要提示：</strong>在没有相应加载器时，Textbus 将会忽略那些未匹配到的标签与样式，且不会产生任何效果。如果你发现一些样式没有了，那基本就是你没有实现对应的加载器，或者你的加载器排在太后面，导致优先级太低没有匹配到。</div>
</tb-alert>
<h2><span style="color:rgb(73, 80, 96)">加载器优先级</span></h2>
<p><span style="color:rgb(73, 80, 96)">加载器默认按照从前到后的顺序依次匹配，你需要注意你的加载器顺序，以便能准确匹配并应用到相应的加载器。</span></p>
<h2><span style="color:rgb(73, 80, 96)">返回 Slot 有什么结果</span></h2>
<p><span style="color:rgb(73, 80, 96)">在调用加载器的 read() 方法时，我们还可以返回一个插槽实例。Textbus 分拆分这个插槽里的内容，并插入在上一层的插槽内，我们可以利用这个特点，拍平一些嵌套层级很深的 DOM 结构。</span></p>
<h2><span style="color:rgb(73, 80, 96)">不返回有什么结果</span></h2>
<p><span style="color:rgb(73, 80, 96)">当调用加载器的 read() 方法时，如果我们没有任何返回，Textbus 将忽略这个 DOM 节点的数据。</span></p>
<p><br/></p></div>
    )
  }
}
