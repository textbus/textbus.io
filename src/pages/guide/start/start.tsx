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
      <div class="xnote-h1">简介</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 是一个以组件为中心，数据驱动的富文本编辑器开发框架！为了解决传统富文本开发中遇到的各种问题，我们完全自主设计了富文本的组件系统和格式系统，旨在降低富文本的开发成本，帮助你更轻松的扩展出丰富的富文本功能。不管你是富文本开发的老鸟，亦或是前端的新手，你都将会在 Textbus 中感受到非凡的开发体验和扩展能力。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>从 4.0 开始，Textbus 全面拥抱前端生态，支持&nbsp;<a href="https://viewfly.org/" target="_blank">Viewfly</a>、Vue、React 直接渲染富文本内容。意味着你可以无任何成本的使用一些开源组件库，更简单的实现富文本中各种的交互能力。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 还拥有超强的性能，在使用&nbsp;<a href="https://viewfly.org/" target="_blank">Viewfly</a>&nbsp;作为渲染层时，我们使用红楼梦作为测试样本，Textbus 可以实现&nbsp;<strong style="color:rgb(18, 150, 219)">5 万个段落无卡顿编辑，这相当于 15 本红楼梦共 1700 万字同时在一个文档内</strong>&nbsp;(<span style="font-size:14px">一本红楼梦大约 3100 个段落，测试电脑：MacBook M1 Pro，32G内存</span>），这在以前是不可想象的。</div>
    </div>
    <div data-component="HighlightBoxComponent" data-icon="❗" class="xnote-highlight-box">
      <div class="xnote-highlight-box-left">
        <div class="xnote-highlight-box-icon"><button type="button">❗</button></div>
      </div>
      <div class="xnote-highlight-box-content">
        <div data-component="ParagraphComponent" class="xnote-paragraph">
          <div><strong style="color:rgb(255, 46, 46)">提示</strong>：从 4.0 开始，Textbus 仓库将<strong>不再提供默认的编辑器</strong>，不过我们重新开发了 XNote 富文本编辑器，仓库地址：<a href="https://github.com/textbus/xnote" target="_blanK">https://github.com/textbus/xnote</a>。</div>
        </div>
        <div data-component="ParagraphComponent" class="xnote-paragraph">
          <div>你也可以阅读文档并开发自己的编辑器，或者 github issue 留言咨询相关问题。</div>
        </div>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>让我们开始吧！</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">总览</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 4.0 总共有以下几个部分，我们可以根据自己的需要安装相关模块。</div>
    </div>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(18, 150, 219)">@textbus/core</strong>&nbsp;Textbus 内核，封装了富文本所需的组件、格式、选区、数据操作、历史记录、快捷键、语法糖等相关功能</div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(18, 150, 219)">@textbus/platform-browser</strong>&nbsp;Textbus 在浏览器运行所需要的基础模块</div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(18, 150, 219)">@textbus/platform-node</strong>&nbsp;Textbus 在 node 环境支持所需要的基础模块</div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(18, 150, 219)">@textbus/collaborate</strong>&nbsp;Textbus 协作能力支持模块（Yjs 版）</div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(18, 150, 219)">@textbus/adapter-viewfly</strong>&nbsp;Textbus 使用&nbsp;<a href="https://viewfly.org/" target="_blank">Viewfly</a>&nbsp;作渲染实现时的适配器</div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(18, 150, 219)">@textbus/adapter-vue</strong>&nbsp;Textbus 使用 Vue 作渲染实现时的适配器</div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(18, 150, 219)">@textbus/adapter-react</strong>&nbsp;Textbus 使用 React 作渲染实现时的适配器</div>
      </li>
    </ul>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h1">开始</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 官方文档将会以&nbsp;<a href="https://viewfly.org/" target="_blank">Viewfly</a>&nbsp;作为默认视图实现，帮助大家一步步实现自己的编辑器。</div>
    </div>
    <blockquote data-component="BlockquoteComponent" class="xnote-blockquote">
      <div>
        <div data-component="ParagraphComponent" class="xnote-paragraph">
          <div>Viewfly 是一个简单易用、高性能的前端视图库，通过几个少量的 API 和 jsx，即可开发出富交互的用户界面。</div>
        </div>
      </div>
    </blockquote>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">安装依赖</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>通过 npm 安装 Viewfly：</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="false" class="xnote-source-code xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install @viewfly/core @viewfly/platform-browser</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>安装 Textbus：</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="false" class="xnote-source-code xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install @textbus/core @textbus/platform-browser @textbus/adapter-viewfly</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>我们安装了 Textbus 下的：</div>
    </div>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(58, 170, 250)">core</strong>&nbsp;使用 Textbus 必不可少的依赖</div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(58, 170, 250)">platform-browser</strong>&nbsp;Textbus 在浏览器运行所必须的环境支持模块</div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(58, 170, 250)">adapter-viewfly</strong>&nbsp;使用 Viewfly 渲染 Textbus 组件所必须的适配器</div>
      </li>
    </ul>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>还安装了 Viewfly 下的：</div>
    </div>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(58, 170, 250)">core</strong>&nbsp;Viewfly 内核</div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content"><strong style="color:rgb(58, 170, 250)">platform-browser</strong>&nbsp;Viewfly 在浏览器运行所必须的环境支持模块</div>
      </li>
    </ul>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">创建第一个编辑器</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>先准备一个空的 DOM 节点用于渲染编辑器。</div>
    </div>
    <div data-lang="HTML" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&nbsp;<span class="hljs-attr">id</span>=<span class="hljs-string">"editor"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></div></pre><span class="xnote-source-code-lang">HTML</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">创建根组件</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// # root.component.tsx</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">Component</span>,&nbsp;<span class="hljs-title class_">ContentType</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/core'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">ViewComponentProps</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/adapter-viewfly'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 定义 Textbus 根组件数据模型</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">RootComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">static</span>&nbsp;componentName =&nbsp;<span class="hljs-string">'RootComponent'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">static</span>&nbsp;<span class="hljs-keyword">type</span>&nbsp;=&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">BlockComponent</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 创建 RootComponentView 组件用于渲染 Textbus 根组件</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">const</span>&nbsp;<span class="hljs-title function_">RootComponentView</span>&nbsp;= (<span class="hljs-params">props: ViewComponentProps&lt;RootComponent&gt;</span>) =&gt; {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&nbsp;<span class="hljs-attr">ref</span>=<span class="hljs-string">{'{'}props.rootRef{'}'}</span>&gt;</span>这是 Textbus 富文本编辑器，我是 {'{'}props.component.name{'}'} 组件！<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>创建一个空编辑器，并渲染到指定 DOM 元素内。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// # editor.ts</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">ContentType</span>,&nbsp;<span class="hljs-title class_">Textbus</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/core'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">ViewflyAdapter</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/adapter-viewfly'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">BrowserModule</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/platform-browser'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'} createApp {'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/platform-browser'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">RootComponentView</span>,&nbsp;<span class="hljs-title class_">RootComponent</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'./root.component'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 创建 Viewfly 适配器，用于桥接 Textbus 和 Viewfly</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;adapter =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">ViewflyAdapter</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;[<span class="hljs-title class_">RootComponent</span>.<span class="hljs-property">componentName</span>]:&nbsp;<span class="hljs-title class_">RootComponentView</span>&nbsp;<span class="hljs-comment">// 声明 Textbus 根组件用 RootComponentView 组件渲染</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'},&nbsp;<span class="hljs-function">(<span class="hljs-params">host, root, textbus</span>) =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">// host 为 Textbus 创建的用于渲染文档的容器</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">// root 为 Viewfly 的根组件，即 RootComponentView 组件</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">// 使用 Viewfly 创建一个编辑器视图</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;app =&nbsp;<span class="hljs-title function_">createApp</span>(root, {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">// 使用 Textbus 实例作为 Viewfly App 的上下文，这样</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">// 我们就可以在 Viewfly 组件内通过 inject 函数注入 Textbus 实例</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">// 中包含的内部对象了</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">context</span>: textbus</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}).<span class="hljs-title function_">mount</span>(host)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">// 返回一个函数，当 Textbus 销毁时，同时销毁 Viewlfy 实例</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;app.<span class="hljs-title function_">destroy</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 创建 Textbus 浏览器平台运行环境模块</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;browserModule =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">BrowserModule</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;adapter,&nbsp;<span class="hljs-comment">// 添加 Viewfly 适配器</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">renderTo</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">'editor'</span>)!</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 创建 Textbus 实例</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;textbus =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Textbus</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">imports</span>: [</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;browserModule&nbsp;<span class="hljs-comment">// 添加浏览器支持模块</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;]</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 创建一个数据模型</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;rootModel =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">RootComponent</span>(textbus, {'{'}{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 渲染数据模型</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">textbus.<span class="hljs-title function_">render</span>(rootModel)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>上面的代码对于刚上手的你来说，可能有点复杂，这是因为 Textbus 要保持最大的灵活性和可扩展性做出的必要妥协。不过后面的开发我们只会在上面的代码中增加一些声明，不会有其它改动了。<br/></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>运行上面的代码，你现在应该可以在浏览器看到 RootComponentView 组件的内容渲染到页面了。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>目前我们创建的编辑器是不可编辑的，这是正常情况，在 Textbus 中，任意组件的内容都不可以通过光标去编辑的，要想内容支持编辑，我们需要给组件添加插槽来实现。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">浏览器兼容</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 兼容现代浏览器，包括 Chrome、Firefox、Safari、Edge 等。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">兼容补丁</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>已知 Firefox 不支持&nbsp;<code class="xnote-code">Intl.Segmenter</code>，需要在 Textbus 启动之前打上特定补丁。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="false" class="xnote-source-code xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install intl-segmenter-polyfill</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在 Textbus 启动时，打上补丁</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">async</span>&nbsp;<span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">createEditor</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">if</span>&nbsp;(!<span class="hljs-title class_">Intl</span>.<span class="hljs-property">Segmenter</span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;polyfill =&nbsp;<span class="hljs-keyword">await</span>&nbsp;<span class="hljs-keyword">import</span>(<span class="hljs-string">'intl-segmenter-polyfill/dist/bundled'</span>);</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;(<span class="hljs-title class_">Intl</span>&nbsp;<span class="hljs-keyword">as</span>&nbsp;<span class="hljs-built_in">any</span>).<span class="hljs-property">Segmenter</span>&nbsp;=&nbsp;<span class="hljs-keyword">await</span>&nbsp;polyfill.<span class="hljs-title function_">createIntlSegmenterPolyfill</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">// 从这里开始创建编辑器</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">createEditor</span>()</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
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