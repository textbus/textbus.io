<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>自定义组件</h1>
    <p>Textbus 中组件和现在前端流行的组件是差不多的。组件一般有一段基本固定的结构，可以通过属性或方法更改组件的数据，达到定制组件的目的。同时组件也可以有任意个子插槽，插槽中的内容可以任意编辑。</p>
    <p>虽然 Textbus 中组件和传统 web 开发中的组件差不多，但毕竟 Textbus 中的组件是为了富文本编辑用的，还是需要遵循一些规则，才能更好的实现我们想要编辑的功能。Textbus 把组件分为了以下 4 种：</p>
    <tb-word-explain>
      <div style="width:230px" class="tb-word-explain-title-group">
        <div style="text-align:right" class="tb-word-explain-title"><strong style="background-color:rgb(248, 248, 249)">DivisionAbstractComponent</strong>
        </div>
        <div style="text-align:right" class="tb-word-explain-subtitle"><span
            style="background-color:rgb(248, 248, 249)">区块组件</span></div>
      </div>
      <div class="tb-word-explain-detail">只有一个子插槽的组件，我们可以把 HTML 部分标签看成是这类组件，如：p、div、article、blockquote 等。实际上，在 Textbus
        默认的组件中，就是把原生的 p、div 等封装成 DivisionAbstractComponent 组件。<br>当然，DivisionAbstractComponent
        也可以扩展其它自定义的结构，唯一限制就是，有且只有一个子插槽。
      </div>
    </tb-word-explain>
    <tb-word-explain>
      <div style="width:230px" class="tb-word-explain-title-group">
        <div style="text-align:right" class="tb-word-explain-title"><strong style="background-color:rgb(248, 248, 249)">BranchAbstractComponent</strong>
        </div>
        <div style="text-align:right" class="tb-word-explain-subtitle"><span
            style="background-color:rgb(248, 248, 249)">分支组件</span></div>
      </div>
      <div class="tb-word-explain-detail">有固定结构和多个子插槽，且子插槽可任意增加、删除等，如 ul&gt;li、ol&gt;li 等。也可以其它用户自定义的组件，如 Textbus
        官方组件库提供的待办事项组件。
      </div>
    </tb-word-explain>
    <tb-word-explain>
      <div style="width:230px" class="tb-word-explain-title-group">
        <div style="text-align:right" class="tb-word-explain-title"><strong style="background-color:rgb(248, 248, 249)">BackboneAbstractComponent</strong>
        </div>
        <div style="text-align:right" class="tb-word-explain-subtitle"><span
            style="background-color:rgb(248, 248, 249)">骨架组件</span><br></div>
      </div>
      <div class="tb-word-explain-detail">有固定结构和多个子插槽，且子插槽不可随意增删，如 table 下面的 td，td
        有多个，但不可随意添加和删除，否则会引起表格错乱，只能通过组件提供的方法，或其它方式，按照一定的规则修改。Textbus 的表格和组件库中的卡片就是继承自 BackboneAbstractComponent 的组件。
      </div>
    </tb-word-explain>
    <tb-word-explain>
      <div style="width:230px" class="tb-word-explain-title-group">
        <div style="text-align:right" class="tb-word-explain-title"><strong><span
            style="background-color:rgb(248, 248, 249)">LeafAbstractComponent</span><br></strong></div>
        <div style="text-align:right" class="tb-word-explain-subtitle"><span
            style="background-color:rgb(248, 248, 249)">叶组件</span><br></div>
      </div>
      <div class="tb-word-explain-detail">没有子插槽的组件。如 img、video、audio、br 等，组件本身就是最叶子的组件。</div>
    </tb-word-explain>
    <div>注意：在 Textbus 中开发组件，必须继承自上面 4 种组件中的一种，并实现其抽象方法，只有这样，Textbus 提供的各项基础能力才能更好的处理富文本编辑的逻辑。</div>
    <p><br></p>
    <h2>组件概览</h2>
    <p>一个完整的组件是由 loader 和组件类组成。其中 loader 用于在 DOM 结构中匹配出当前组件，并生成组件实例。而组件实例则是把组件自身的数据渲染成虚拟 DOM，并最终生成真实的 HTML。</p>
    <p>一个典型的组件实现基本是如下结构：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ Component, DivisionAbstractComponent, ComponentLoader, ViewData }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">// 组件加载器</span></code></div><div class="tb-code-line"><code><span class="tb-hl-keyword">class</span>&nbsp;<span
        class="tb-hl-class-name">ExampleComponentLoader</span>&nbsp;<span
        class="tb-hl-keyword">implements</span>&nbsp;<span class="tb-hl-class-name">ComponentLoader</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">// your code</span></code></div><div
        class="tb-code-line"><code>}</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">// 通过装饰器，绑定当前组件的元数据</span></code></div><div
        class="tb-code-line"><code>@<span class="tb-hl-function">Component</span>({</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;loader:&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">ExampleComponentLoader</span>()</code></div><div
        class="tb-code-line"><code>})</code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">// 组件实现</span></code></div><div class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">ExampleComponent</span>&nbsp;<span
        class="tb-hl-keyword">extends</span>&nbsp;<span class="tb-hl-class-name">DivisionAbstractComponent</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">// your code</span></code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p>由于在 Textbus 中组件的形态有 4 类，每一类组件都有自身的特点，当我们开发组件时，必须要实现其抽象方法。</p>
    <p>下面，我们以开发一个 div 组件为例，来初步解开 Textbus 组件的面纱！</p>
    <p><br></p>
    <h1>第一个组件</h1>
    <p>在实际的应用场景中，往往并不是开启一个空白的文档，而是根据已有的 HTML 内容再次编辑。这时，我们需要先实现一个 loader，从 DOM 树中识别出对应的组件，然后再进行编辑。</p>
    <p>一个 loader 必须要有两个方法：</p>
    <ul>
      <li><code>match(element:&nbsp;<strong>HTMLElement</strong>):&nbsp;<span
          style="color:rgb(231, 79, 94)">boolean</span></code>&nbsp;<br>用于匹配一个 DOM 元素，并返回一个 boolean 值，告诉 Textbus ，当前的
        DOM 节点是否是一个组件。
      </li>
      <li><code>read(element:&nbsp;<strong>HTMLElement</strong>):&nbsp;<span
          style="color:rgb(231, 79, 94)">ViewData</span></code>&nbsp;<br>用于把匹配为 true 的 DOM
        元素转换成组件实例，并返回当前组件和后代内容与组件插槽的映射关系。在转换过程中，组件会吃掉一部分 DOM 结构或内容，并把不属于组件的 DOM 返回给 Textbus，Textbus
        将根据返回的组件和映射关系，继续向下解析，直到解析完所有的 DOM。
      </li>
    </ul>
    <p>请参考下面的示例：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// # div.component.ts</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;VElement,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;DivisionAbstractComponent,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;Component,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;SingleSlotRenderFn,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;breakingLine,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;SlotRenderFn,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;ComponentLoader,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;BlockComponent,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;TBEvent,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;ViewData,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;Injectable</code></div><div class="tb-code-line"><code>}&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 创建组件加载器</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">DivComponentLoader</span>&nbsp;<span
        class="tb-hl-keyword">implements</span>&nbsp;<span class="tb-hl-class-name">ComponentLoader</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 匹配当前 HTML 元素是否为 Div 组件，当结果为 true 时，Textbus 将会调用 read 方法。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param element</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">match</span>(element: HTMLElement):&nbsp;<span class="tb-hl-builtin">boolean</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;element.tagName.<span
        class="tb-hl-function">toLowerCase</span>() ===&nbsp;<span class="tb-hl-string">'div'</span>;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 根据 HTML 元素，返回一个新的 Textbus 组件，及其子插槽和子插槽内容对应的 HTML 容器。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 这里，我们的 div 组件本身就是子插槽内容的容器，所以我们直接返回了当前的 element。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param element</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element: HTMLElement): ViewData {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;component =&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">DivComponent</span>();</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component: component,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slotsMap: [{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">from</span>: element,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;toSlot: component.slot</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}]</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;};</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 创建 Div 组件，并继承 DivisionAbstractComponent，表示这是一个只有一个子插槽的组件。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>@<span class="tb-hl-function">Component</span>({</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;loader:&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">DivComponentLoader</span>()</code></div><div class="tb-code-line"><code>})</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">DivComponent</span>&nbsp;<span
        class="tb-hl-keyword">extends</span>&nbsp;<span class="tb-hl-class-name">DivisionAbstractComponent</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">constructor</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">super</span>(<span
        class="tb-hl-string">'div'</span>);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 克隆一个副本。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">clone</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;component =&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">DivComponent</span>();</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;component.slot.<span class="tb-hl-keyword">from</span>(<span
        class="tb-hl-keyword">this</span>.slot.<span class="tb-hl-function">clone</span>());</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">return</span>&nbsp;component;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当子插槽改变时，调用的渲染函数，因为这里的层级只有一个，所以直接创建一个虚拟 DOM</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param isOutputMode</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param singleSlotRenderFn 子插槽渲染函数</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">slotRender</span>(isOutputMode:&nbsp;<span
        class="tb-hl-builtin">boolean</span>, singleSlotRenderFn: SingleSlotRenderFn): VElement {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span
        class="tb-hl-function">singleSlotRenderFn</span>(<span class="tb-hl-keyword">this</span>.slot,&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">VElement</span>(<span
        class="tb-hl-keyword">this</span>.tagName));</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 渲染方法，根据不同条件渲染当前组件的虚拟 DOM。</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param isOutputMode 是否是输出模式。</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param slotRenderFn 子插槽渲染函数。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">render</span>(isOutputMode:&nbsp;<span
        class="tb-hl-builtin">boolean</span>, slotRenderFn: SlotRenderFn) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 这里我们可以创建当前组件的虚拟 DOM 节点，但由于我们的 Div 组件只有一层，</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 组件的虚拟 DOM 节点和插槽是同一个，所以，我们直接调用 slotRenderFn 函数渲染插槽即可</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span
        class="tb-hl-function">slotRenderFn</span>(<span class="tb-hl-keyword">this</span>.slot);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h2>定制编辑功能</h2>
    <p>当我们需要对组件的编辑行为进行控制的时候，这里需要通过拦截器来实现，我们结合上面的 DivComponent， 以拦截回车事件为例：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 创建组件编辑事件拦截器</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>@<span class="tb-hl-function">Injectable</span>()</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">DivComponentInterceptor</span>&nbsp;<span
        class="tb-hl-keyword">implements</span>&nbsp;<span class="tb-hl-class-name">Interceptor</span>&lt;<span
        class="tb-hl-class-name">DivComponent</span>&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-keyword">constructor</span>(<span class="tb-hl-keyword">private</span>&nbsp;selection: TBSelection) {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">onEnter</span>(event: TBEvent&lt;DivComponent&gt;) {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;parent = event.instance.parentFragment;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;component =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">BlockComponent</span>(<span class="tb-hl-string">'p'</span>);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;firstRange =&nbsp;<span
        class="tb-hl-keyword">this</span>.selection.firstRange;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;next =&nbsp;<span class="tb-hl-function">breakingLine</span>(firstRange.startFragment, firstRange.startIndex);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;component.slot.<span class="tb-hl-keyword">from</span>(next);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;parent.<span class="tb-hl-function">insertAfter</span>(component, event.instance);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;position = firstRange.<span
        class="tb-hl-function">findFirstPosition</span>(component.slot);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;firstRange.startFragment = firstRange.endFragment = position.fragment;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;firstRange.startIndex = firstRange.endIndex = position.index;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;event.<span class="tb-hl-function">stopPropagation</span>();</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>现在，我们把上面的拦截器通过装饰器附加在 DivComponent 上。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code>@<span class="tb-hl-function">Component</span>({</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;loader:&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">DivComponentLoader</span>()</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;providers: [{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;provide: Interceptor,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;useClass: DivComponentInterceptor</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}]</code></div><div class="tb-code-line"><code>})</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">DivComponent</span>&nbsp;<span
        class="tb-hl-keyword">extends</span>&nbsp;<span class="tb-hl-class-name">DivisionAbstractComponent</span>&nbsp;{...}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>组件类创建完成了，但是还没有什么方法让新的组件生效，我们需要一个 Commander 类，让用户可以把新组件应用到编辑内容中。</p>
    <p><br></p>
    <h2>创建 Commander 类</h2>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// # div.commander.ts</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ BrComponent, Commander, CommandContext }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ DivComponent }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'./div.component'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 创建 Commander 类</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">DivCommander</span>&nbsp;<span
        class="tb-hl-keyword">implements</span>&nbsp;<span class="tb-hl-class-name">Commander</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 每次操作是否保存历史记录</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;recordHistory =&nbsp;<span
        class="tb-hl-boolean">true</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 给 Textbus 应用样式的方法。</span></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param context &nbsp;&nbsp;上下文对象。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param params &nbsp;&nbsp;&nbsp;应用当前命令所需要的值，这里不需要，我们忽略就好。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">command</span>(context: CommandContext, params:&nbsp;<span
        class="tb-hl-builtin">any</span>) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;{selection} = context;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;selection.ranges.<span
        class="tb-hl-function">forEach</span>(range =&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 创建一个新的组件</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;component =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">DivComponent</span>();</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 为了让组件内部能够有高度，且让光标可以放置以组件内，我们往内添加一个 br 组件。</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component.slot.<span
        class="tb-hl-function">append</span>(<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">BrComponent</span>());</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 获取上层的组件和可编辑片段。</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;parentComponent = range.endFragment.parentComponent;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;parentFragment = parentComponent.parentFragment;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 把新的组件添加到当前父组件之后</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parentFragment.<span
        class="tb-hl-function">insertAfter</span>(component, parentComponent);</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 把光标设置到新组件内</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;range.<span
        class="tb-hl-function">setStart</span>(component.slot,&nbsp;<span class="tb-hl-number">0</span>);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;range.<span
        class="tb-hl-function">collapse</span>();</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>现在我们的组件和命令工具都已开发完毕，我们还需要一个工具去把组件和命令有机结合起来，才能让它们正常工作。</p>
    <p><br></p>
    <h2>创建工具条工具</h2>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// # div.tool.ts</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ ButtonTool }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ DivCommander }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'./div.commander'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;divTool =&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">ButtonTool</span>({</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;label:&nbsp;<span class="tb-hl-string">'div 组件'</span>,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">commanderFactory</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">DivCommander</span>()</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>})</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>最后，我们把新创建的工具添加到 Textbus 中。至此，我们添加新组件的功能就算全做完了，当在工具条点击 "div 组件" 按钮时，Textbus 会创建一个新的 div
      组件，并插入在当前组件后面，同时会把光标移入到了新组件内。</p>
    <p><br></p>
    <h2>把新工具配置 Textbus 中</h2>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ createEditor, defaultOptions, defaultTools }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">import</span>&nbsp;{ DivComponent }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'./div.component'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ divTool }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'./div.tool'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>defaultOptions.components.<span
        class="tb-hl-function">unshift</span>(DivComponent);</code></div><div
        class="tb-code-line"><code>defaultTools.<span class="tb-hl-function">push</span>(divTool);</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;editor =&nbsp;<span class="tb-hl-function">createEditor</span>(<span
        class="tb-hl-string">'#editor'</span>);</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h2>拦截器详解</h2>
    <p>上面我们用到了拦截器实现了一个回车增加段落的功能，实际上拦截器还可以实现更丰富的功能，只需要实现对应的接口即可。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* Textbus 组件编辑行为生命周期方法。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">abstract</span>&nbsp;<span class="tb-hl-keyword">class</span>&nbsp;<span
        class="tb-hl-class-name">Interceptor</span>&lt;<span class="tb-hl-class-name">T&nbsp;</span><span
        class="tb-hl-keyword">extends</span><span
        class="tb-hl-class-name">&nbsp;AbstractComponent</span>&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 在当前组件下输入功能就绪时调用</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param event</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;onInputReady?(event: TBEvent&lt;T&gt;):&nbsp;<span
        class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 在当前组件下，用户输入时调用</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param event</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;onInput?(event: TBEvent&lt;T&gt;):&nbsp;<span
        class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 在当前组件下，选区末闭合且触发删除行为时调用</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param event</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;onDeleteRange?(event: TBEvent&lt;T&gt;):&nbsp;<span
        class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 在当前组件下，选区闭合且触发删除行为时调用</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param event</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;onDelete?(event: TBEvent&lt;T&gt;):&nbsp;<span
        class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 在当前组件下，用户敲击回车键时调用</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param event</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;onEnter?(event: TBEvent&lt;T&gt;):&nbsp;<span
        class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当在当前组件下，触发粘贴行为时调用</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param event</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;onPaste?(event: TBEvent&lt;T, TBClipboard&gt;):&nbsp;<span
        class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 在当前组件下，触发上下文菜单时调用，需返回上下文本菜单配置，Textbus 会根据配置生成上下文本菜单。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param instance</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;onContextmenu?(instance: T): ContextMenuAction[];</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当 Textbus 销毁时调用</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;onDestroy?():&nbsp;<span
        class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h2>设置器详解</h2>
    <p>在复杂组件中，有时需要动态配置一些数据，这时，仅依靠添加事件或在拦截器定制一些行为仍不能满足需求，这时，设置器作为一种增强的解决方案是最好的选择。可参考 Textbus 官方的<a
        href="https:&#x2F;&#x2F;github.com&#x2F;tbhuabi&#x2F;textbus&#x2F;blob&#x2F;master&#x2F;src&#x2F;lib&#x2F;additional-components&#x2F;jumbotron.component.tsx#L23">巨幕组件</a>
    </p>
    <p>设置器的核心是 create 方法，该方法会拿到当前组件的实例，你可以根据当前实例上的数据，返回一个控制页面的视图，当用户在视图上更改数据后，再写回当前组件的实例，从而实现更高级的组件定制功能。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* Textbus 组件控制页面生成器</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">abstract</span>&nbsp;<span class="tb-hl-keyword">class</span>&nbsp;<span
        class="tb-hl-class-name">ComponentSetter</span>&lt;<span class="tb-hl-class-name">T&nbsp;</span><span
        class="tb-hl-keyword">extends</span><span
        class="tb-hl-class-name">&nbsp;AbstractComponent</span>&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 生成控制页面的方法</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param instance</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;<span
        class="tb-hl-function">create</span>(instance: T): ComponentControlPanelView;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* Textbus 销毁时调用</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">abstract</span>&nbsp;onDestroy?():&nbsp;<span
        class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h2>Markdown 语法支持</h2>
    <p>Textbus 组件还可以通过 markdown 语法自动生成，进一提升编辑体验。要组件支持 markdown，需在组件装饰器内提供 markdown 的相关规则配置。规则如下：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">MarkdownGrammarInterceptor</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 匹配字符 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;match: RegExp | ((content:&nbsp;<span class="tb-hl-builtin">string</span>) =&gt;&nbsp;<span
        class="tb-hl-builtin">boolean</span>);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 触发键 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;key:&nbsp;<span
        class="tb-hl-builtin">string</span>&nbsp;|&nbsp;<span class="tb-hl-builtin">string</span>[];</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 触发执行的方法 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">componentFactory</span>(content:&nbsp;<span class="tb-hl-builtin">string</span>): AbstractComponent;</code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <ul>
      <li>key 触发 markdown 转换的热键</li>
      <li>match 当 key 匹配时，将通过 match 属性进一步判定。如 match 是正则表达式，则调用 test 方法，如果是函数，则直接调用。参数为当前光标位置到当前 Fragment 的起始位置。</li>
      <li>如果 match 返回为 true，则触发转换，调用 componentFactory 方法，并把返回的组件替换到文档中。</li>
    </ul>
    <p>我们需要实现 MarkdownSupport 的抽象方法，并添加到装饰器配置中，以标题组件为例：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code>@<span class="tb-hl-function">Injectable</span>()</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">BlockComponentMarkdownSupport</span>&nbsp;<span
        class="tb-hl-keyword">implements</span>&nbsp;<span class="tb-hl-class-name">MarkdownSupport</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">provide</span>(): MarkdownGrammarInterceptor {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key:&nbsp;<span class="tb-hl-string">' '</span>,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">match</span>(content:&nbsp;<span
        class="tb-hl-builtin">string</span>) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-regex">/^#{1,6}$/</span>.<span
        class="tb-hl-function">test</span>(content)</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-function">componentFactory</span>(content): BlockComponent {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">BlockComponent</span>(<span
        class="tb-hl-string">'h'</span>&nbsp;+ content.length)</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div><div
        class="tb-code-line"><code>@<span class="tb-hl-function">Component</span>({</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;loader:&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">BlockComponentLoader</span>(),</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;providers: [{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;provide: MarkdownSupport,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;useClass: BlockComponentMarkdownSupport</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}]</code></div><div class="tb-code-line"><code>})</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">BlockComponent</span>&nbsp;<span
        class="tb-hl-keyword">extends</span>&nbsp;<span class="tb-hl-class-name">DivisionAbstractComponent</span>&nbsp;{ ... }</code></div><div
        class="tb-code-line"><code><br></code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h1>开发组件时常见问题</h1>
    <h2>我的组件怎么不生效？</h2>
    <p>Textbus 在初始化时，会遍历整个 HTML 树，并调用配置项中的 Component 装饰器内声明的 ComponentLoader 实例来转换成 Textbus 所需要抽象数据，当匹配某一个 HTML
      元素时，只要有一个解析器匹配上，则后面的将不再匹配。要解决此问题，你可以把自己开发组件，添加在 Textbus 配置项的 components 数组的前面，以调整优先级。</p>
    <h2>我组件里面的内容不见了？</h2>
    <p>由于组件的形态是不固定的，所以 Textbus 在渲染组件后代内容时，不知道要把后代内容放置在组件的什么位置。所以，当 Textbus
      渲染组件时，会在调用组件的 render 方法时，传入两个参数，第一个参数为当前的渲染模式是否是输出模式，第二个参数为子插槽的渲染函数 SlotRendererFn，如果组件里面的内容不见了，你需要确保你有正确的调用 SlotRendererFn。</p>
    <h2>我要怎么定制组件的交互行为？</h2>
    <p>常见的编辑交互事件，可以通过 Component 装饰器，声明事件拦截器，并根据不同的事件类型，做不同的操作。如果要监听浏览器原生事件，你可以通过虚拟 DOM 的 on 配置项，配置相关方法，Textbus
      会在当前节点渲染完成时自动绑定事件。我们以绑定一个点击事件为例：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ VElement }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;button =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">VElement</span>(<span class="tb-hl-string">'button'</span>, {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;on: {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;click: () =&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">alert</span>(<span
        class="tb-hl-string">'按扭被点击了！'</span>)</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>})</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>如果，以上还不能满足需求，还可以通过添加 Textbus 插件（TBPlugin）类，来订制你想要的功能！</p>
    <h2>为什么我修改了组件的数据，页面没有实时渲染出来？</h2>
    <p>Textbus
      只会监听组件特定的数据。如：组件内容的更改，格式的变化，插槽的增删等。如果是组件上自定义的数据发生变化，但这些变化又会影响文档的展现，那么则需要你手动触发渲染。触发当前组件重新渲染的方法也很简单，只需要调用组件的 markAsDirtied 方法即可。<br>
    </p>
    <p><br></p>
    <h1>使用 TSX 开发组件</h1>
    <p>在前面的文档中，我们看到了使用 new VElement('tagName') 的方式创建虚拟 DOM。其实， VElement 类还实现了 createElement 静态方法，我们还可以通过如下方式实现虚拟 DOM
      的创建：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ VElement }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>VElement.<span
        class="tb-hl-function">createElement</span>(<span class="tb-hl-string">'button'</span>, {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">class</span>:&nbsp;<span
        class="tb-hl-string">'btn'</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;on: {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">click</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">alert</span>(<span
        class="tb-hl-string">'按扭被点击了'</span>)</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>},&nbsp;<span
        class="tb-hl-string">'按扭'</span>)</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p>通过 createElement 静态方法和通过 new 的方式创建虚拟 DOM 是除写法不同，结果是等效的。有了这个基础，我们就可以通过 tsx 的方式来编写组件了。</p>
    <p>要用 tsx 编写组件首先要在项目中的 tsconfig.json 中添加如下声明：</p>
    <pre lang="JSON" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code>{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-attr-name">"compilerOptions"</span>: {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-attr-name">"jsx"</span>:&nbsp;<span class="tb-hl-string">"react"</span>,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-attr-name">"jsxFactory"</span>:&nbsp;<span
        class="tb-hl-string">"VElement.createElement"</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">JSON</div></pre>
    <p>同时在项目的根目录添加一个类型声明文件，如 typings.d.ts，并声明如下类型：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// #typings.d.ts</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ VElement }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">declare</span>&nbsp;<span class="tb-hl-keyword">namespace</span>&nbsp;JSX {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span
        class="tb-hl-class-name">Element</span>&nbsp;<span class="tb-hl-keyword">extends</span>&nbsp;<span
        class="tb-hl-class-name">VElement</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span
        class="tb-hl-class-name">IntrinsicElements</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;[elemName:&nbsp;<span
        class="tb-hl-builtin">string</span>]:&nbsp;<span class="tb-hl-builtin">any</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>以上配置适用于在整个项目只有一种 tsx 类型的情况，如果在 Vue/React 项目中，以上声明会导致 Textbus 的虚拟 DOM 工厂函数和 Vue/React 的虚拟 DOM 工厂函数发生冲突。同时，Vue cli
      的 ts 项目的编译方式和 React 项目的编辑方式还有所不同，我们需要分别处理。</p>
    <p>在 Vue + ts 的项目中，我们通过 vue cli 创建项目时，需选择自定义创建，在命令行中，不要选择通过 babel 编译 jsx。即去掉 babel，默认用 ts 的编译器编辑 tsx。这时，编译流程就由 vue
      默认的 tsx -&gt; jsx -&gt; babel -&gt; js 的方式，改为 tsx - js。我们再把 vue cli 生成的 tsconfig.json 编译配置中的 tsx
      选项由 preserve 改为 react。</p>
    <p>这时，Vue 和 React 的编译方式就可以统一了，当我们在具体的 tsx 文件中，通过注释的方式声明 tsx 工厂函数即可：</p>
    <p>如果是 Textbus 的组件，我们在文件头部作如下声明：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/** @jsx VElement.createElement */</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ VElement }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">// your code</span></code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>如果是 Vue 组件，我们在文件头部作如下声明：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/** @jsx h */</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ h }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'vue'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">// your code</span></code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>如果果 React 组件，我们在文件头部作如下声明：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/** @jsx createElement */</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ createElement }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'react'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">// your code</span></code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h1>区块组件概览</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">onChagne</strong><span style="font-size:15px;color:rgb(119, 119, 119)">&nbsp;</span>类型：<code><strong>Observable</strong>&lt;void&gt;</code>
          </div>
          <p>当组件自身或后代内容变化时触发。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">dirty&nbsp;</strong>类型：<code style="color:rgb(231, 79, 94)">boolean</code>
          </div>
          <p>组件是否变脏。当组件 dirty 为 true 时，组件的 changed、outputDirty、outputChanged 三个状态一定为 true。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">changed</strong>&nbsp;类型：<code
              style="color:rgb(231, 79, 94)">boolean</code></div>
          <p>组件自身或后代内容是否已发生变化。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">outputDirty</strong>&nbsp;类型：<code
              style="color:rgb(231, 79, 94)">boolean</code></div>
          <p>组件输出内容是否变脏。当组件 outputDirty 为 true 时，组件的 outputChanged 状态一定为 true。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">outputChanged&nbsp;</strong>类型：<code style="color:rgb(231, 79, 94)">boolean</code>
          </div>
          <p>组件输出内容自身或后代是否变脏。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">markAsDirtied</strong><span
              style="font-size:15px;color:rgb(119, 119, 119)">&nbsp;</span>类型：<code>() =&gt;&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>标识组件为已变脏，以触发视图更新。一般情况下不需要手动调用，只有当组件有自定义数据，并且更新这些数据时没有通过组件的默认方法，这时，你需要手动调用，以触发视图更新。</p>
          <p>注意，当调用 markAsDirtied 时会自动调用 markAsChanged 方法。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">markAdChanged</strong>&nbsp;类型：<code>() =&gt;&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>标识组件后代内容发生变化，以触发视图更新。一般情况下不需要手动调用。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">rendered&nbsp;</strong>类型：<code>() =&gt;&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>内部方法，用于标识该组件已渲染，并重置组件脏状态为 false。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">outputRendered&nbsp;</strong>类型：<code>() =&gt;&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>内部方法，用于标识组件已输出，并重置组件输出脏状态为 false。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">parentFragment&nbsp;</strong>类型：<strong><code>Fragment</code></strong>
          </div>
          <p>组件所属的可编辑片段。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">length</strong>&nbsp;类型：<code style="color:rgb(231, 79, 94)">number</code>
          </div>
          <p>组件的长度，Textbus 内部定义，不可更改。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">slot</strong>&nbsp;类型：<strong><code>Fragment</code></strong></div>
          <p>组件的插槽，用于存放组件内部的可编辑内容。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-danger">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">clone&nbsp;</strong>类型：<code>()
            =&gt;&nbsp;<strong>AbstractComponet</strong>&nbsp;&amp;&nbsp;<span
                style="color:rgb(231, 79, 94)">ThisType</span>&lt;<strong>this</strong>&gt;</code></div>
          <p>扩展组件必须实现的方法。返回当前组件的副本。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-danger">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">render&nbsp;</strong>类型：<code>(isOutputMode:&nbsp;<span
              style="color:rgb(231, 79, 94)">boolean</span>, slotRenderFn:&nbsp;<span style="color:rgb(231, 79, 94)">SlotRenderFn</span>)
            =&gt;&nbsp;<strong>VElement</strong></code></div>
          <p>渲染组件的勾子函数，用于生成组件的虚拟 DOM。</p>
          <ul>
            <li>isOutputMode 是否为输出模式，某些情况下，组件在编辑时和输出时内容是不一样的，你可以根据此参数动态返回虚拟 DOM。</li>
            <li>slotRenderFn 用于渲染组件插槽的工具函数。</li>
          </ul>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-danger">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">slotRender</strong>&nbsp;类型：<code>(isOutputMode:&nbsp;<span
              style="color:rgb(231, 79, 94)">boolean</span>, singleSlotRenderFn:&nbsp;<span
              style="color:rgb(231, 79, 94)">SingleSlotRenderFn</span>) =&gt;&nbsp;<strong>VElement</strong></code>
          </div>
          <p>渲染组件插槽的勾子函数，用于生成组件插槽的虚拟 DOM。</p>
          <ul>
            <li>isOutputMode 是否为输出模式，某些情况下，组件在编辑时和输出时内容是不一样的，你可以根据此参数动态返回虚拟 DOM。</li>
            <li>singleSlotRenderFn 用于渲染组件插槽内容的工具函数。</li>
          </ul>
        </div>
      </div>
    </tb-timeline>
    <p><br></p>
  </div>
</template>
