<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>架构设计</h1>
    <div><p>Textbus 采用 MVC 设计，将 DOM 数据转换为抽象的 Fragment 对象，并通过自实现 Selection，隔离了浏览器的 Selection 及 Range
      对象，使后续功能开发，再也不用关心不同浏览器的差异，整体设计架构如下：</p>
      <tb-image-card>
        <div><img src="https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;d1.png" style="max-width:100%"></div>
        <p>Textbus 架构设计</p></tb-image-card>
      <p><br></p></div>
    <h2>定制与扩展</h2>
    <p>Textbus 设计之初就充分考虑了可定制性与扩展性，为了践行这一设计，Textbus 核心模块只有组织与调度的能力，其它所有的功能都是只是遵循扩展接口的外部函数或类，也就是说，没有这些外部函数或类，Textbus
      核心模块就只剩一个空的骨架，完成不了任何事情。</p>
    <p>在默认情况下，一般会调用 createEditor 函数来创建一个 Textbus 实例。当我们查看 createEditor 函数的内容时会发现，该函数只是把一系列的接口实例等配置在可选项里而已。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* Textbus 初始化时的配置参数</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span
        class="tb-hl-class-name">EditorOptions</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 设置主题 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;theme?:&nbsp;<span class="tb-hl-builtin">string</span>;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 设置最大历史栈 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;historyStackSize?:&nbsp;<span class="tb-hl-builtin">number</span>;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 声明组件集合 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;components?:&nbsp;<span class="tb-hl-builtin">Array</span>&lt;Type&lt;AbstractComponent&gt;&gt;;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 设置格式转换器 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;formatters?: Formatter[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 配置文档的默认样式 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;styleSheets?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 配置文档编辑状态下用到的样式 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;editingStyleSheets?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 设置初始化 Textbus 时的默认内容 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;contents?:&nbsp;<span
        class="tb-hl-builtin">string</span>;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 配置自定义服务 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;providers?: Provider[];</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 插件配置 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;plugins?: Type&lt;TBPlugin&gt;[];</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当某些工具需要上传资源时的调用函数，调用时会传入上传资源的类型，如 image、video、audio等，该函数返回一个字符串，作为资源的 url 地址 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;uploader?(<span class="tb-hl-keyword">type</span>:&nbsp;<span
        class="tb-hl-builtin">string</span>): (<span class="tb-hl-builtin">string</span>&nbsp;|&nbsp;<span
        class="tb-hl-builtin">Promise</span>&lt;<span class="tb-hl-builtin">string</span>&gt; | Observable&lt;<span
        class="tb-hl-builtin">string</span>&gt;);</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当用户按 Ctrl + S 的时候调用 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;onSave?():&nbsp;<span
        class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h2>交互流程</h2>
    <p>Textbus 并未采用 DOM 的 contentEditable 属性来实现编辑功能，所以 Textbus 并不能直接编辑 HTML 内容，而是通过编辑抽象数据，并通过 Renderer 类渲染到 DOM 中。当初始化
      Textbus，会给 Textbus 传入一段 HTML 文本时，Textbus 会首先通过 Parser，把 HTML 转换为 Textbus 定义的数据，然后再进行后续的操作。</p>
    <tb-image-card>
      <div><img src="https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;d3.png" style="max-width:100%"></div>
      <p>Textbus 交互流程<br><br></p></tb-image-card>
    <p><br></p>
    <h2>数据结构</h2>
    <p>Textbus 的数据类型只有两种，一种是 Component，一种是 string。数据结构也只有两种，一个是 Component，一个是 Fragment。格式信息被当作额外数据，Component 中固定的格式由
      Component 自行保存与渲染，Fragment 中的格式则由 Textbus 抽象成 FormatMap，保存在对应的 Fragment 中，它们的结构如下：</p>
    <tb-image-card>
      <div><img src="https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;d2.png" style="max-width:100%"></div>
      <p>Textbus 数据结构</p></tb-image-card>
    <p><br></p>
    <h2>数据更新策略</h2>
    <p>Textbus 组件和插槽均继承自 Marker 状态标记类，Marker 类使用 4 种状态标记整个组件树的数据变化。</p>
    <ul>
      <li><strong>dirty</strong>&nbsp;当前组件或插槽是否变脏。</li>
      <li><strong>changed</strong>&nbsp;当前组件或插槽自身或后代是否发生变化。</li>
      <li><strong>outputDirty</strong>&nbsp;当前组件输出模式是否变脏。</li>
      <li><strong>outputChanged</strong>&nbsp;当前组件或插槽自身或后代输出模式是否发生变化。</li>
    </ul>
    <p>需要注意的事，dirty 是指自身的数据，不包含后代，changed 是指自身或后代。只有组件或插槽的 ditry 为 true 时，才会触发重新渲染。outputDirty 和 outputChanged
      为输出模式的状态标记，和 ditry、changed 行为是一致的。</p>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">默认状态</strong></div>
          <p>默认状态下，整个数据树上所有的组件和插槽的 dirty 和 change 状态，均为 false。</p>
          <p><img src="https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;0a71ce30c1827c.png" style="max-width:100%"></p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">数据发生变化</strong></div>
          <p>当组件或插件数据发生变化时，组件或插件的 dirty 和 change 的状态均会变为 true。</p>
          <p><img src="https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;062755f4599ff6.png" style="max-width:100%"></p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">标记链路</strong></div>
          <p>当任意一个插槽或组件数据发生变化时，同时会逐级向上把整个树相关的组件和插槽的 changed 状态置为 true。</p>
          <p><img src="https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;0e2f79baebe5cd.png" style="max-width:100%"></p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">更新 DOM</strong></div>
          <p>当根组件接收到数据变更的通知时，会异步触发渲染，Textbus 会从根组件逐级向下遍历，如果组件或插槽的 changed 状态为 false，则会跳过当前组件或插槽以及其所有的后代。</p>
          <p>当检测到组件的 dirty 为 true 时，则会调用组件的 render 方法，重新生成虚拟 DOM。当检测到组件的插槽的 dirty 为 true 时，则会调用组件的 slotRender
            方法，重新生成插槽的虚拟 DOM。在组件或插槽的虚拟 DOM 生成完成之后，Textbus 会重新把组件或插槽的 changed 和 dirty 状态置为 false。在生成一个组件或插槽的虚拟 DOM
            时，由于其虚拟 DOM 的数据总是先生成后代再生成自己，所以，渲染的顺序也总是遵循深度优先的策略。</p>
          <p>和现代前端框架不同的是，Textbus 并不是等整个虚拟 DOM 树生成完成后，再 diff 生成真实 DOM，而是在当前组件虚拟 DOM 生成完成时，马上调用 diff 算法更新真实 DOM。所以，真实 DOM
            的生成顺序也遵循深度优先的策略。</p>
          <p>由于虚拟 DOM 的父节点包含子节点，那么在父虚拟 DOM 节点做 diff 更新真实 DOM 时会不会导致子节点重复 diff 计算呢？并不会。当子节点渲染完成时，Textbus 会缓存其状态。当父虚拟 DOM
            节点更新到子节点时，会直接使用其结果并跳过当前子节点。</p>
          <p><img src="https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;0f9de2f0b70c74.png" style="max-width:100%"></p></div>
      </div>
    </tb-timeline>
    <h1>双渲染架构</h1>
    <p>和其它所有富文本编辑器不一样，Textbus 的渲染分为编辑模式和输出模式，这是为复杂富文本而专门设计的。</p>
    <p>双渲染模式可以天然的帮助我们生成定制化的结果，而不用受限于富文本展现的结果。同时，在富文本编辑时，往往需要一些交互，而在最终呈现页面是不需要的，双渲染模式也可以帮助我们更简单的完成这样的功能。</p>
    <p>同样的数据渲染两次，会有会有性能问题呢？</p>
    <p>得益于 Textbus 高效的 diff 算法。就算是渲染两次，效率也在毫秒级，首页演示文档，复制 50 份，然后再编辑，测试渲染时间，基本都在 2ms 以内，而如果文章再短一点，或电脑性能再好一点，那么一次 diff
      的时间，基本都在 1ms 以内，这个效率，基本上比市面上所有的前端框架都快了。对此，大家可以放心。</p>
    <p><br></p>
    <h1>源码指南</h1>
    <p>正在编辑中。。。</p>
  </div>
</template>
