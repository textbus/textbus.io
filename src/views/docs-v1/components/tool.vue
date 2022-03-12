<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>自定义工具</h1>
    <p>本章节示例的工具扩展依赖于 Textbus 官方提供的工具条（Toolbar）插件。在创建 Textbus 时，必须在 plugins 配置项添加 Toolbar 插件。</p>
    <p>Toolbar 插件默认支持以下 7 类工具。</p>
    <ul>
      <li><strong style="color:rgb(18, 150, 219)">ButtonTool</strong>&nbsp;按扭工具<span
          style="font-size:14px">（如：加粗、斜体）</span>；
      </li>
      <li><strong style="color:rgb(18, 150, 219)">SelectTool</strong>&nbsp;下拉选择工具<span style="font-size:14px">（如：字体大小、标题）</span>；
      </li>
      <li><strong style="color:rgb(18, 150, 219)">ActionSheetTool</strong>&nbsp;动作表工具<span style="font-size:14px">（如：表格编辑工具）</span>；
      </li>
      <li><strong style="color:rgb(18, 150, 219)">DropdwonTool</strong>&nbsp;下拉工具<span style="font-size:14px">（如：字体颜色选择工具）</span>；
      </li>
      <li><strong style="color:rgb(18, 150, 219)">FormTool</strong>&nbsp;表单工具<span style="font-size:14px">（如：超链接工具、图片上传工具）</span>；
      </li>
      <li><strong style="color:rgb(18, 150, 219)">AdditionalTool</strong>&nbsp;附加栏工具<span style="font-size:14px">（如：查找替换工具）</span>；
      </li>
      <li><strong style="color:rgb(18, 150, 219)">GroupTool</strong>&nbsp;群组工具，用于把其它工具组装成二级菜单<span
          style="font-size:14px">（如：表格工具）</span>。
      </li>
    </ul>
    <p>我们以按扭工具为例：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span
        class="tb-hl-keyword">import</span>&nbsp;{ ButtonTool, defaultTools }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;yourToolConfig: ButtonToolConfig = {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">// 你的配置...</span></code></div><div
        class="tb-code-line"><code>};</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">const</span>&nbsp;yourTool =&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">ButtonTool</span>(yourToolConfig);</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">// 把自定义工具添加到配置中</span></code></div><div
        class="tb-code-line"><code>defaultTools.<span class="tb-hl-function">push</span>(yourTool);</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <h2>按扭工具</h2>
    <p>按扭工具用于较为简单的点击交互。必须要实现以下接口：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 按扭型工具的配置接口</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">ButtonToolConfig</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 按扭控件点击后调用的命令 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">commanderFactory</span>(): Commander;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 状态查询器 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;matcher?: Matcher;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 设置按扭显示的文字 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;label?: I18nString;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给按扭控件添加一组 css class 类 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;classes?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给按扭控件添加一组 icon css class 类 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;iconClasses?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当鼠标放在控件上的提示文字 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;tooltip?: I18nString;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 当前按扭控件的快捷键配置 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;keymap?: Keymap;</code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">commanderFactory</strong></div>
          <p>一个创建工具命令的工厂，返回一个命令工具（Commander），命令工具可以对 Textbus 文档或其它状态进行操作。当用户点击按扭时，会调用 Commander 的 command 方法。</p>
          <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
              class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 操作编辑器的命令工具</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span
              class="tb-hl-class-name">Commander</span>&lt;<span class="tb-hl-class-name">T&nbsp;</span>=<span
              class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-builtin">any</span>&gt; {</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
              class="tb-code-line"><code><span
              class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当调用 command 方法后，是否把当前操作存入历史栈</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;recordHistory:&nbsp;<span
              class="tb-hl-builtin">boolean</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 工具条初始化时调用</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param injector 用于获取 Textbus 内部实例有注入器</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;setup?(injector: Injector):&nbsp;<span
              class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当工具条销毁时调用</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;onDestroy?():&nbsp;<span class="tb-hl-keyword">void</span>;</code></div><div
              class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 格式化文档的方法</span></code></div><div
              class="tb-code-line"><code><span
              class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param context 格式化上下文</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param params 执行当前命令所需要的参数，大多数情况下，由菜单栏工具生成，也可以通过生命周期生成。</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">command</span>(context: CommandContext, params: T):&nbsp;<span
              class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code>}</code></div></div><div
              class="tb-pre-lang">Typescript</div></pre>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">matcher</strong></div>
          <p>状态查询器，用于查询 Textbus 的状态。</p>
          <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
              class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 状态查询器</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span
              class="tb-hl-class-name">Matcher</span>&nbsp;{</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 工具条初始化时调用</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param injector 获取 Textbus 内部类的注入器</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;setup?(injector: Injector):&nbsp;<span
              class="tb-hl-keyword">void</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 工具条销毁时调用</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;onDestroy?():&nbsp;<span class="tb-hl-keyword">void</span>;</code></div><div
              class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 状态查询方法，返回查询后的状态</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param selection Textbus 的 selection 对象</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">queryState</span>(selection: TBSelection): SelectionMatchState;</code></div><div
              class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
        </div>
      </div>
    </tb-timeline>
    <h2>下拉选择工具</h2>
    <p>下拉选择工具执行同一种命令，但应用不同值操作。下拉工具要实现以下接口：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 下拉选择工具配置项</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">SelectToolConfig</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当前 Select 某项点击后，应用的命令 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">commanderFactory</span>(): Commander;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** Select 的可选项配置 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;options: SelectOptionConfig[];</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 根据当前匹配的抽象数据，返回要高亮的选项 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;matchOption?&lt;T = FormatData | AbstractComponent&gt;(data: T): SelectOptionConfig;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 状态查询器 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;matcher?: Matcher;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给 Select 控件添加一组 css class */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;classes?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给 select 控件添加一组 icon css class 类 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;iconClasses?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 设置当前 Select 是否根据内容扩展宽度 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;mini?:&nbsp;<span
        class="tb-hl-builtin">boolean</span>;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当鼠标放在控件上的提示文字 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;tooltip?: I18nString;</code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">options</strong></div>
          <p>下拉选择的可选项。</p>
          <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
              class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* Select 工具选项配置项</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
              class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span
              class="tb-hl-class-name">SelectOptionConfig</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/** 当前选项被选中后，要应用的值 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;value:&nbsp;<span
              class="tb-hl-builtin">any</span>;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/** 当前选项显示的文字，如为空则显示 value */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;label?: I18nString;</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/** 给当前选项添加一组 css class 类 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;classes?:&nbsp;<span
              class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/** 给当前选项添加 icon css class 类 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;iconClasses?:&nbsp;<span
              class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/** 当所有选项都未锚中时，显示的默认项 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-keyword">default</span>?:&nbsp;<span class="tb-hl-builtin">boolean</span>;</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 当前选项应用的快捷键 */</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;keymap?: Keymap;</code></div><div
              class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">matchOption</strong></div>
          <p>当选区变化时，根据查询的数据，返回高亮的匹配项。</p></div>
      </div>
    </tb-timeline>
    <h2>动作表工具</h2>
    <p>用于把某一类操作创建一个下拉集合。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 动作表工具配置</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span
        class="tb-hl-class-name">ActionSheetToolConfig</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当前控件可操作的选项 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;actions: ActionConfig[];</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当某一项被点击时调用的命令 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">commanderFactory</span>(): Commander;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 状态查询器 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;matcher?: Matcher;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 设置控件显示的文字 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;label?: I18nString;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给当前控件添加一组 css class */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;classes?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给控件添加一组 icon css class 类 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;iconClasses?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当鼠标放在控件上的提示文字 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;tooltip?: I18nString;</code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">actions</strong></div>
          <p>可操作的动作表。</p>
          <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
              class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span
              class="tb-hl-class-name">ActionConfig</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/** 设置当前 action 的 value */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;value?:&nbsp;<span
              class="tb-hl-builtin">any</span>;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/** 设置当前 action 显示的文字 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;label?: I18nString;</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 给当前 action 添加一组 css class */</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;classes?:&nbsp;<span class="tb-hl-builtin">string</span>[];</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/** 给当前 action 添加一组 icon css class */</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;iconClasses?:&nbsp;<span
              class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">/** 给当前 action 添加一组 css class */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;keymap?: Keymap;</code></div><div
              class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
        </div>
      </div>
    </tb-timeline>
    <h2>下拉工具</h2>
    <p>用于自定义下拉的工具，下拉工具必须要实现以下接口。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">DropdownToolConfig</span>&lt;<span
        class="tb-hl-class-name">T&nbsp;</span>=<span class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-builtin">any</span>&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 下拉控件展开后显示的内容 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">viewFactory</span>(i18n: I18n): DropdownViewer&lt;T&gt;;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 状态查询器 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;matcher?: Matcher;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 订阅下拉控件操作完成时调用的命令 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">commanderFactory</span>(): Commander;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 快捷键配置 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;keymap?: Keymap;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给当前控件添加一组 css class */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;classes?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给当前控件添加一组 icon css class */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;iconClasses?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当鼠标放在控件上的提示文字 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;tooltip?: I18nString;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 设置控件显示的文字 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;label?: I18nString;</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">viewFactory</strong></div>
          <p>创建下拉视图的工厂函数。</p></div>
      </div>
    </tb-timeline>
    <h2>表单工具</h2>
    <p>用于创建表单的工具，表单工具可以接入 Textbus 的上传功能。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">FormToolConfig</span>&nbsp;<span
        class="tb-hl-keyword">extends</span>&nbsp;<span class="tb-hl-class-name">DropdownToolConfig</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">viewFactory</span>(i18n: I18n): FormViewer;</code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">viewFactory</strong></div>
          <p>创建下拉表单的工厂函数。</p></div>
      </div>
    </tb-timeline>
    <h2>附加视图工具</h2>
    <p>用于创建一个在工具条下等宽的视图的工具。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 附加视图工具的配置接口</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span
        class="tb-hl-class-name">AdditionalToolConfig</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 按扭控件点击后调用的命令 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">commanderFactory</span>(): Commander;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 下拉控件展开后显示的内容 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">viewFactory</span>(i18n: I18n): AdditionalViewer;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 状态查询器 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;matcher?: Matcher;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 设置按扭显示的文字 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;label?: I18nString;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给按扭控件添加一组 css class 类 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;classes?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 给按扭控件添加一组 icon css class 类 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;iconClasses?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 当鼠标放在控件上的提示文字 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;tooltip?: I18nString;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 当前按扭控件的快捷键配置 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;keymap?: Keymap;</code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h2>群组工具</h2>
    <p>用于把以上工具组装在一起的工具，用于精简工具条 UI。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 群组工具配置</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span
        class="tb-hl-class-name">GroupConfig</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 工具显示的文字 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;label?: I18nString;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 工具按扭的 class */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;classes?:&nbsp;<span class="tb-hl-builtin">string</span>[];</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 工具按扭 icon class */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;iconClasses?:&nbsp;<span
        class="tb-hl-builtin">string</span>[];</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/** 鼠标放置在工具上时的提示文字 */</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;tooltip?: I18nString;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 工具集合 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;menu:&nbsp;<span class="tb-hl-builtin">Array</span>&lt;ActionMenu | SelectMenu | ActionSheetMenu | DropdownMenu | FormMenu&gt;;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 状态查询器 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;matcher?: Matcher;</code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
  </div>
</template>
