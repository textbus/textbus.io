<template>
  <div>
    <h1>基础教程</h1>
    <p>如果你正在准备编写 TextBus 的扩展，你需要了解在 TextBus 中，组件、格式和插件分别有什么定义和作用。</p>
    <tb-word-explain>
      <div style="width:140px" class="tb-word-explain-title-group">
        <div style="text-align:right" class="tb-word-explain-title"><strong>组件</strong></div>
        <div style="text-align:right" class="tb-word-explain-subtitle">Component</div>
      </div>
      <div class="tb-word-explain-detail">一般用作布局和特殊的功能块。<br>如： div、p、列表、卡片等，这是布局；视频、音频、图片、数学公式等这是特殊的功能块。TextBus
        中代码块，既是布局，同时也附带有特殊的功能。<br>总之，组件一般用来作布局和特殊编辑用的。
      </div>
    </tb-word-explain>
    <tb-word-explain>
      <div style="width:140px" class="tb-word-explain-title-group">
        <div style="text-align:right" class="tb-word-explain-title"><strong>格式</strong></div>
        <div style="text-align:right" class="tb-word-explain-subtitle">Formatter</div>
      </div>
      <div class="tb-word-explain-detail">一般用作内容装饰。<br>如：加粗、字体颜色、文字大小、居中对齐等，超链接也属于某种特殊的装饰。</div>
    </tb-word-explain>
    <tb-word-explain>
      <div style="width:140px" class="tb-word-explain-title-group">
        <div style="text-align:right" class="tb-word-explain-title"><strong>插件</strong></div>
        <div style="text-align:right" class="tb-word-explain-subtitle">TBPlugin</div>
      </div>
      <div class="tb-word-explain-detail">用于对 TextBus 文档操作的功能的增加或其它。<br>如：全屏、文章概览、表格框选等。<br></div>
    </tb-word-explain>
    <p>有了上面的分类，你应该能根据自己的需求，选择自己要从哪里做起了。如果你还有疑问，不妨加入 TextBus 的官方 QQ 群&nbsp;<strong style="color:rgb(18, 150, 219)">786923770</strong>，直接咨询。
    </p>
    <p><br></p>
    <h2>获取依赖</h2>
    <p>在 TextBus 中，除组件本身，所有的可编辑内容都从属于组件的插槽（slot）。同时，所有插槽类型都是 Fragment（可编辑片段） 类或 Fragment 的子类。通过对 Fragment
      的修改，即可修改富文本编辑器的内容。</p>
    <p>大多数场景下，我们可能需要根据光标位置去修改内容，获取光标位置的方法也很简单。</p>
    <p>通过编辑器实例的 injector 属性获取 TBSelection：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span
        class="tb-hl-keyword">import</span>&nbsp;{ createEditor, TBSelection }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;editor =&nbsp;<span class="tb-hl-function">createEditor</span>(<span
        class="tb-hl-string">'#editor'</span>)</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>editor.onReady.<span class="tb-hl-function">subscribe</span>(<span
        class="tb-hl-keyword">function</span>() {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;selection = editor.injector.<span class="tb-hl-keyword">get</span>(TBSelection);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(selection);</code></div><div
        class="tb-code-line"><code>})</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p>如果你在编写插件或组件的行为定制类，则可以通过注入获取，以插件为例：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ TBSelection, Injectable, TBPlugin }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>@<span class="tb-hl-function">Injectable</span>()</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">ExamplePlugin</span>&nbsp;<span
        class="tb-hl-keyword">implements</span>&nbsp;<span class="tb-hl-class-name">TBPlugin</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">constructor</span>(<span
        class="tb-hl-keyword">private</span>&nbsp;selection: TBSelection) {}</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">setup</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span
        class="tb-hl-function">log</span>(<span class="tb-hl-keyword">this</span>.selection)</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>在修改内容之前，你应该了解 TBSelection 的一些基础知识。</p>
    <p>一个编辑器有且只有一个 TBSelection 的实例，但 TBSelection 内可能包含 0 到多个 TBRange。大多数情况下，TBRange 也只会有一个，但有的场景下可能会有多个<span
        style="color:rgb(128, 132, 143)">（如表格框选编辑，每一个单元格都是一个 TBRange）</span>，我们可以通过 TBSelection 实例的 rangeCount
      属性判断当前有多少个 TBRange。</p>
    <p>同时，光标也有可能不是闭合的，当光标不闭合时，一般我们会在编辑器内看到有一段选中的区域，我们把这个区域叫做<strong>拖蓝</strong>，在实际的开发中，你可能需要先判断选区数量，同时判断选区是否闭合，然后再针对不同情况作出处理。
    </p>
    <p><br></p>
    <h2>插入文本或组件</h2>
    <p>为方便理解，下面示例我们假定 TBRange 只有一个，且是闭合的。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// 获取 selection 下的第一个 range</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;firstRange = selection.firstRange;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">const</span>&nbsp;text =&nbsp;<span class="tb-hl-string">'text'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">// 在光标所在的 Fragment 中插入 'text' 文本，firstRange.startIndex 是指光标的起始位置</span></code></div><div
        class="tb-code-line"><code>firstRange.startFragment.<span class="tb-hl-function">insert</span>(text, firstRange.startIndex);</code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">// 更新光标位置</span></code></div><div
        class="tb-code-line"><code>firstRange.<span class="tb-hl-function">setPosition</span>(firstRange.startFragment, firstRange.startIndex + text.length)</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>在上面的示例中，我们在光标位置插入了&nbsp;<code>text</code>&nbsp;文本，同时更新了光标位置。你还可以用 insert 方法插入组件和 Fragment。如：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">const</span>&nbsp;component =&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">BlockComponent</span>(<span
        class="tb-hl-string">'p'</span>);</code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;fragment =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">Fragment</span>();</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>fragment.<span class="tb-hl-function">append</span>(<span
        class="tb-hl-string">'text'</span>);</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">const</span>&nbsp;offset = component.length + fragment.length;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>firstRange.startFragment.<span
        class="tb-hl-function">insert</span>(component, firstRange.startIndex);</code></div><div
        class="tb-code-line"><code>firstRange.startFragment.<span class="tb-hl-function">insert</span>(fragment, firstRange.startIndex);</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>firstRange.<span
        class="tb-hl-function">setPosition</span>(firstRange.startFragment, firstRange.startIndex + offset);</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>组件和 Fragment 都有 length 属性，你可以大胆使用。</p>
    <p>insert 方法还有两个伴生方法，即 insertBefore、insertAfter，调用这两个方法，需要传第二个参数，且第二个参数一定是当前 Fragment 下的组件。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// 在子组件之前插入文本</span></code></div><div
        class="tb-code-line"><code>firstRange.startFragment.<span class="tb-hl-function">insertBefore</span>(<span
        class="tb-hl-string">'text'</span>, childComponent);</code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">// 在子组件之后插入文本</span></code></div><div class="tb-code-line"><code>firstRange.startFragment.<span
        class="tb-hl-function">insertAfter</span>(<span
        class="tb-hl-string">'text'</span>, childComponent);</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p>你还可以调用 append 方法，把内容直接添加到当前 Fragmnet 的最后。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code>firstRange.startFragment.<span class="tb-hl-function">append</span>(<span
        class="tb-hl-string">'text'</span>);</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h2>删除内容</h2>
    <p>删除内容只需要传入删除范围即可，其中，结束位置是可选的，如果不传结束位置，则删除开始位置后所有。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code>firstRange.startFragment.<span class="tb-hl-function">remove</span>(firstRange.startIndex -&nbsp;<span
        class="tb-hl-number">1</span>, firstRange.startIndex);</code></div><div
        class="tb-code-line"><code>firstRange.<span class="tb-hl-function">setPosition</span>(firstRange.startFragment, firstRange.startIndex -&nbsp;<span
        class="tb-hl-number">1</span>);</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h2>剪切内容</h2>
    <p>剪切和删除一样，不过，剪切后会返回一个剪切内容的 Fragment。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;fragment = firstRange.startFragment.<span
        class="tb-hl-function">cut</span>(firstRange.startIndex -&nbsp;<span class="tb-hl-number">1</span>, firstRange.startIndex);</code></div><div
        class="tb-code-line"><code>firstRange.<span class="tb-hl-function">setPosition</span>(firstRange.startFragment, firstRange.startIndex -&nbsp;<span
        class="tb-hl-number">1</span>);</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">// 剪切的内容</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(fragment)</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h2>应用样式</h2>
    <p>要给一段内容应用样式，我们需要指定 Formatter，同时指定范围和依赖的数据，Formatter 会根据我们的设置的范围和数据渲染生成对应的样式。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ colorFormatter, FormatData, FormatEffect }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>firstRange.<span
        class="tb-hl-function">startFragment</span>.<span
        class="tb-hl-function">apply</span>(colorFormatter, {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;startIndex: firstRange.startIndex,&nbsp;<span
        class="tb-hl-comment">// 样式开始位置</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;endIndex: firstRange.endIndex,&nbsp;<span
        class="tb-hl-comment">// 样式结束位置</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;effect: FormatEffect.valid,&nbsp;<span
        class="tb-hl-comment">// 样式生效状态</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;formatData:&nbsp;<span
        class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">FormatData</span>({&nbsp;<span
        class="tb-hl-comment">// 样式所依赖的数据</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;styles: {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;<span
        class="tb-hl-string">'#ccc'</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;})</code></div><div class="tb-code-line"><code>})</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>colorFormatter 为我们指定的样式渲染器，TextBus 中还有针对不同的样式提供了多个 Formatter（<a target="_blank"
                                                                       href="https:&#x2F;&#x2F;github.com&#x2F;textbus&#x2F;formatters">查看所有
      Formatter</a>），你可以直接使用。你也可以封装自己的 Formatter，添加指定的样式。</p>
    <p>第个参数是一个配置对象，我们指定了开始和结束位置，同时设置了生效状态和数据。</p>
    <p>在 TextBus 中，样式的生效状态有四种：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">enum</span>&nbsp;FormatEffect {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 生效的 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;Valid =&nbsp;<span class="tb-hl-string">'Valid'</span>,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 不生效的 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;Invalid =&nbsp;<span class="tb-hl-string">'Invalid'</span>,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 排除 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;Exclude =&nbsp;<span class="tb-hl-string">'Exclude'</span>,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/** 继承 */</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;Inherit =&nbsp;<span class="tb-hl-string">'Inherit'</span></code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p>大多数情况下，我们只需要关心有 Valid 和 Invalid 两种状态。即，添加样式为 Valid，去掉样式为 Invalid。&nbsp;</p>
    <div class="tb-alert"><strong style="color:rgb(231, 79, 94)">注意：</strong>TextBus 的<strong>行内样式不支持零宽选区</strong>，必须要指定范围，且范围的开始和结束不能为同一位置，否则会不生效。块级样式则因为不涉及范围，会应用到当前整个
      Fragment，所以没有这个限制。
    </div>
    <p><br></p>
    <h2>样式查询</h2>
    <p>在有的时候，我们会需要知道查询当前 Fragment 内有没有应用某个样式，你可以通过 getFormatRanges 方法获取。我们以查询文字颜色为例：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">const</span>&nbsp;formatRanges: FormatRange[] = firstRange.startFragment.<span
        class="tb-hl-function">getFormatRanges</span>(colorFormatter);</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code><span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(formatRanges)</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>其中 FormatRange 的数据结构如下：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 标识一段格式的范围。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span
        class="tb-hl-class-name">FormatRange</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;startIndex:&nbsp;<span
        class="tb-hl-builtin">number</span>;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;endIndex:&nbsp;<span class="tb-hl-builtin">number</span>;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;formatData: FormatData;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;effect: FormatEffect;</code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p>我们可以根据查询到的结果，作出后续的操作。</p>
    <div class="tb-alert"><strong style="color:rgb(18, 150, 219)">提示：</strong>由于状态查询涉及到多选区，多 Fragment
      等复杂数据，如果你要开发工具条的小工具，在 TextBus 官方扩展的工具条中，已有封装好的更简单的状态查询工具类（<a target="_blank"
                                                                   href="https:&#x2F;&#x2F;github.com&#x2F;textbus&#x2F;toolbar&#x2F;blob&#x2F;main&#x2F;src&#x2F;toolbar&#x2F;matcher&#x2F;_api.ts">查看</a>），你可以直接使用，当然，你也可以开发自己的。
    </div>
    <p><br></p>
    <h1>选区操作</h1>
    <p>在富文本编辑器中，选区是大多数交互行为的核心，如框选一段区域，然后加粗。TextBus 的 TBRange 对象提供了非常丰富的 API 帮助我们更快捷的操作选区。我们以加粗任意一段选区内的文本为例。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">// 获取当前拖蓝区域的所有可编辑片段的范围</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-keyword">const</span>&nbsp;scopes: TBRangeScope[] = firstRange.<span class="tb-hl-function">getSelectedScope</span>();</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>scopes.<span class="tb-hl-function">forEach</span>(scope =&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;scope.<span class="tb-hl-function">fragment</span>.<span
        class="tb-hl-function">apply</span>(boldFormatter, {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;startIndex: scope.startIndex,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;endIndex: scope.endIndex,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;effect: FormatEffect.valid,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;formatData:&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">FormatData</span>({</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tag:&nbsp;<span
        class="tb-hl-string">'strong'</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;})</code></div><div class="tb-code-line"><code>})</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>通过 TBRange 的 getSelectedScope 方法，我们可以获取到当前用户所选择的所有可编辑片段。每一个 scope 的数据结构如下：</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* 标识一个选中 Fragment 的范围。</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span
        class="tb-hl-class-name">TBRangeScope</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;startIndex:&nbsp;<span
        class="tb-hl-builtin">number</span>;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;endIndex:&nbsp;<span class="tb-hl-builtin">number</span>;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;fragment: Fragment;</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p>我们只需要循环操作获取到的所有 scope，并执行我们的操作即可。</p>
  </div>
</template>
