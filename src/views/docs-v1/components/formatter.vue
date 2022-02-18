<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>自定义格式</h1>
    <p>在 TextBus 中扩展格式是很简单的事情，只需要继承 Formatter 类，并完成抽象方法，即可扩展任意样式。我们以给文字加颜色为例，实现一个自定义的 Formatter。</p>
    <h2>创建 ColorFormatter 类</h2>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// # color.formatter.ts</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;InlineFormatter,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;FormatData,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;VElement,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;FormatterPriority,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;FormatRendingContext</code></div><div
        class="tb-code-line"><code>}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 创建新的字体颜色类</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">ColorFormatter</span>&nbsp;<span
        class="tb-hl-keyword">extends</span>&nbsp;<span
        class="tb-hl-class-name">InlineFormatter</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 通过父类设置匹配规则和渲染优先级。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 这里我们要匹配 style 的 color 的值，由于颜色值是不固定的，所以我们用正则去匹配。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 字体颜色是行内样式，所以我们设置渲染优先级为 FormatterPriority.InlineStyle。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">constructor</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">super</span>({</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;styles: {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;<span
        class="tb-hl-regex">/.+/</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}, FormatterPriority.InlineStyle);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当 TextBus 初始化时，如果某个节点通过了 Formatter 的规则匹配，则会调用 read 方法。</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* read 方法返回一个记录了当前样式的抽象数据，用于后面的修改和渲染。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param node Formatter 匹配通过的节点</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">read</span>(node: HTMLElement): FormatData {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">FormatData</span>({</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;styles: {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: node.style.color</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;});</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当 TextBus 渲染样式时，会调用 Formatter 类 render 方法，并根据 render 方法返回的渲染模式，处理虚拟 DOM 结构。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param context &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;渲染的实时上下文对象。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param existingElement 是否已有同级元素。如：当两个样式的范围是一样的，其中一个样式先渲染时，第二个样式渲染时，则会拿到第一个样式渲染后的元素。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @return &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VElement | void</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">render</span>(context: FormatRendingContext, existingElement?: VElement): VElement |&nbsp;<span
        class="tb-hl-keyword">void</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">if</span>&nbsp;(!existingElement) {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;existingElement =&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">VElement</span>(<span class="tb-hl-string">'span'</span>);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;existingElement.styles.<span
        class="tb-hl-keyword">set</span>(<span class="tb-hl-string">'color'</span>, context.formatData.styles.<span
        class="tb-hl-keyword">get</span>(<span class="tb-hl-string">'color'</span>));</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;existingElement;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;colorFormatter =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">ColorFormatter</span>();</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>当创建完成 ColorFormatter 类时，其实我们已经完成了 99% 的工作，只需要实例化后，添加在 TextBus
      的配置项即可。但常见情况下，我们还需要一个操作命令，让用户可以通过一些交互，让其可以实时修改文档中的格式。</p>
    <p>下面，我们再创建一个命令工具。</p>
    <h2>创建 Commander 操作命令</h2>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// # color.commander.ts</span></code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">import</span>&nbsp;{CommandContext, Commander, FormatData, FormatEffect }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ colorFormatter }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'./color.formatter'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 创建字体颜色操作命令工具</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">ColorCommander</span>&nbsp;<span
        class="tb-hl-keyword">implements</span>&nbsp;<span class="tb-hl-class-name">Commander</span>&lt;<span
        class="tb-hl-builtin">string</span>&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当执行命令时，是否记录历史</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;recordHistory =&nbsp;<span
        class="tb-hl-boolean">true</span>;</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 根据用户选区，执行操作，让新颜色生效</span></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*</span></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param context 上下文对象</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param color 要应用的颜色</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">command</span>(context: CommandContext, color:&nbsp;<span
        class="tb-hl-builtin">string</span>) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;context.selection.ranges.<span
        class="tb-hl-function">forEach</span>(range =&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 获取选区内所有已选择的范围</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;range.<span
        class="tb-hl-function">getSelectedScope</span>().<span class="tb-hl-function">forEach</span>(item =&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 给每一段选中的内容应用样式</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.<span class="tb-hl-function">fragment</span>.<span
        class="tb-hl-function">apply</span>(colorFormatter, {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 如果当前有颜色，则让颜色生效，否则不生效</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;effect: color ? FormatEffect.Valid : FormatEffect.Invalid,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startIndex: item.startIndex,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endIndex: item.endIndex,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formatData:&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">FormatData</span>({</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;styles: {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;});</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>当操作命令创建完成后，我们还需要在用户界面上创建一个控件，让用户可以操作。下面我们来创建一个选择颜色的工具。</p>
    <h2>创建工具条工具</h2>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// # color.tool.ts</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ Toolkit, FormatMatcher, FormatData, SelectToolConfig, SelectTool }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ colorFormatter }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'./color.formatter'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">import</span>&nbsp;{ ColorCommander }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'./color.commander'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;colorToolConfig: SelectToolConfig = {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;options: [{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;<span
        class="tb-hl-string">'红色'</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;<span
        class="tb-hl-string">'#f00'</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;}, {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;<span
        class="tb-hl-string">'绿色'</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;<span
        class="tb-hl-string">'#0f0'</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;}, {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;<span
        class="tb-hl-string">'蓝色'</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;<span
        class="tb-hl-string">'#00f'</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;}, {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;<span
        class="tb-hl-string">'黑色'</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;<span
        class="tb-hl-string">'#000'</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">default</span>:&nbsp;<span class="tb-hl-boolean">true</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}],</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;matcher:&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">FormatMatcher</span>(colorFormatter),</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">matchOption</span>(data) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">if</span>&nbsp;(data&nbsp;<span class="tb-hl-keyword">instanceof</span>&nbsp;<span
        class="tb-hl-class-name">FormatData</span>) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">for</span>&nbsp;(<span class="tb-hl-keyword">const</span>&nbsp;option&nbsp;<span
        class="tb-hl-keyword">of</span>&nbsp;colorToolConfig.options) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">if</span>&nbsp;(option.value === data.style.value) {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">return</span>&nbsp;option;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;},</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">commanderFactory</span>() {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">ColorCommander</span>();</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;colorTool =&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">SelectTool</span>(colorToolConfig);</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>至此，我们的准备工作就全部做完了，把 colorFormatter 和 colorTool 配置到 TextBus 的选项里，即可看到新开发的功能了。</p>
    <h2>配置 TextBus，让新格式生效</h2>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ createEditor, defaultOptions, defaultTools }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">import</span>&nbsp;{ colorTool }&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span
        class="tb-hl-string">'./color.tool'</span>;</code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">import</span>&nbsp;{ colorFormatter }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'./color.formatter'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>defaultOptions.formatters.<span
        class="tb-hl-function">push</span>(colorFormatter);</code></div><div
        class="tb-code-line"><code>defaultTools.<span class="tb-hl-function">push</span>(colorTool);</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;editor =&nbsp;<span class="tb-hl-function">createEditor</span>(<span
        class="tb-hl-string">'#editor'</span>);</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
  </div>
</template>
