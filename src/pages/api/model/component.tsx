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
      <div class="xnote-h1">组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 组件是由一组静态方法和可选的实例方法组成。并且，在实例方法 setup 内，我们可以使用 Textbus 内置的功能丰富的 hooks 来定制组件在编辑时的行为，为我们创建富交互的协作文档提供了无限可能。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">静态属性及方法</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* Textbus 组件静态属性及方法</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">ComponentConstructor</span>&lt;<span class="hljs-title class_">ComponentState</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">State</span>&nbsp;=&nbsp;<span class="hljs-title class_">State</span>&gt;&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">Type</span>&lt;<span class="hljs-title class_">Component</span>&lt;<span class="hljs-title class_">ComponentState</span>&gt;&gt; {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 组件名 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">componentName</span>:&nbsp;<span class="hljs-built_in">string</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 实例数据类型 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">type</span>:&nbsp;<span class="hljs-title class_">ContentType</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 快捷语法拦截器 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;zenCoding?:&nbsp;<span class="hljs-title class_">ZenCodingGrammarInterceptor</span>&lt;<span class="hljs-title class_">ComponentState</span>&gt; |&nbsp;<span class="hljs-title class_">ZenCodingGrammarInterceptor</span>&lt;<span class="hljs-title class_">ComponentState</span>&gt;[];</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 当需要从 JSON 导入数据时，则需要实现此方法 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;fromJSON?(<span class="hljs-attr">textbus</span>:&nbsp;<span class="hljs-title class_">Textbus</span>,&nbsp;<span class="hljs-attr">data</span>:&nbsp;<span class="hljs-title class_">ComponentStateLiteral</span>&lt;<span class="hljs-title class_">ComponentState</span>&gt;):&nbsp;<span class="hljs-title class_">Component</span>&lt;<span class="hljs-title class_">ComponentState</span>&gt;;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">componentName 组件名</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>组件的名字，一个不重复的字符串。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">type 组件数据类型</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>指定组件为数据类型，可选的类型有 ContentType.BlockComponent，或者 ContentType.InlineComponent。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">zenCoding 语法转换规则（可选）</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>组件支持语法糖，如支持 Markdown 语法等。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">fromJSON() JSON 数据导入</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>组件支持从 JSON 导入数据，一般是由 Textbus 数据转换为 JSON 后，再导入时，需要使用。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">实例属性</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>我们的组件都应当继承自 @textbus/core 模块中有 Component 类，Component 实例有以下方法和属性。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 组件扩展可选方法</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">Component</span>&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">State</span>&gt; {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 从当前组件拆分出一个新的同类组件</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;start 拆分的开始插槽</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;end 拆分的结束插槽</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;separate?(start?:&nbsp;<span class="hljs-title class_">Slot</span>, end?:&nbsp;<span class="hljs-title class_">Slot</span>):&nbsp;<span class="hljs-title class_">Component</span>&lt;T&gt;;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 组件初始化时调用的方法，可以此方法内同步使用 Textbus 提供的一系列勾子函数</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;setup?():&nbsp;<span class="hljs-built_in">void</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 当 Textbus 默认行为尝试删除插槽时调用，返回 true 表示删除成功。</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 需要注意的是，实际删除是由组件自己完成的</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;<span class="hljs-variable">slot</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;removeSlot?(<span class="hljs-attr">slot</span>:&nbsp;<span class="hljs-title class_">Slot</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 组件实例对象</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">declare</span>&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">Component</span>&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">State</span>&nbsp;=&nbsp;<span class="hljs-title class_">State</span>&gt; {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">textbus</span>:&nbsp;<span class="hljs-title class_">Textbus</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">readonly</span>&nbsp;<span class="hljs-attr">id</span>:&nbsp;<span class="hljs-built_in">number</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 组件所在的插槽</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@readonly</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@internal</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">get</span>&nbsp;<span class="hljs-title function_">parent</span>():&nbsp;<span class="hljs-title class_">Slot</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 父组件</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">get</span>&nbsp;<span class="hljs-title function_">parentComponent</span>():&nbsp;<span class="hljs-title class_">Component</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 组件长度，固定为 1 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">readonly</span>&nbsp;length =&nbsp;<span class="hljs-number">1</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 组件的子插槽集合</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@internal</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">readonly</span>&nbsp;<span class="hljs-attr">__slots__</span>:&nbsp;<span class="hljs-title class_">Slots</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 组件动态上下文菜单注册表 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">readonly</span>&nbsp;<span class="hljs-attr">shortcutList</span>:&nbsp;<span class="hljs-title class_">Shortcut</span>[];</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 组件名 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">readonly</span>&nbsp;<span class="hljs-attr">name</span>:&nbsp;<span class="hljs-built_in">string</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 组件类型 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">readonly</span>&nbsp;<span class="hljs-attr">type</span>:&nbsp;<span class="hljs-title class_">ContentType</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 组件状态 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">readonly</span>&nbsp;<span class="hljs-attr">state</span>: T;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 组件变化标识器 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">readonly</span>&nbsp;<span class="hljs-attr">changeMarker</span>:&nbsp;<span class="hljs-title class_">ChangeMarker</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title function_">constructor</span>(<span class="hljs-params">textbus: Textbus, initData: T</span>);</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 组件转为 JSON 数据的方法</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title function_">toJSON</span>():&nbsp;<span class="hljs-title class_">ComponentLiteral</span>&lt;<span class="hljs-title class_">State</span>&gt;;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 将组件转换为 string</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title function_">toString</span>():&nbsp;<span class="hljs-built_in">string</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">parent 父插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>组件的父插槽，当组件未插入任何插槽时，值为 null。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">parentComponent 父组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>组件的父组件，即组件父插槽没有父组件时，值为 null。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">changeMarker 变化标识器</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>用于标识组件是否发生变化。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">name 组件名</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>组件的名字，在同一个编辑器实例中，不可重复。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">length 组件长度</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>组件在插槽中占用的长度，固定为 1。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">type 组件类型</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>标识组件的类型，可选值为：ContentType.InlineComponent 或 ContentType.BlockComponent。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">shortcutList 动态快捷键列表</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>组件在 setup 方法内，通过 useDynamicShortcut 勾子注册的快捷键列表。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">toJSON() 将组件转换为 JSON 对象</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>将组件及其后代插槽及组件全部转换为一个 JSON 描述的对象。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;json = component.<span class="hljs-title function_">toJSON</span>()</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">toString() 将组件转换为字符串</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>将组件及其所有后代插槽及组件全部转换为字符串。需要注意的是，此方法只关注插槽的内容，即组件的模板不会参与转换。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;text = component.<span class="hljs-title function_">toString</span>()</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">可选实现方法</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">getSlots() 获取组件插槽的渲染序列</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>由于组件的 state 可以是任意形状的，Textbus 不能推断出插槽在文档中渲染时的顺序，所以，当组件包含插槽时，必须实现这个方法告诉 Textbus 当前组件的插槽顺序，这时，Textbus 才能正确处理光标、选区及格式变换等功能。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="undefined" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">getSlots</span>():&nbsp;<span class="hljs-title class_">Slot</span>[] {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;[]&nbsp;<span class="hljs-comment">// 当前组件插槽的顺序集合</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">setup() 设置组件行为</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div style="text-align:left">通过实现组件的 setup 方法，我们可定义组件的行为，或在 setup 方法内通过 hooks 监听当前组件的事件，并完成我们的操作。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title function_">onBreak</span>(...)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title function_">onContentInsert</span>(...)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div style="text-align:left" class="xnote-h3">separate() 拆分当前组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div style="text-align:left">当组件可拆分时，可实例 separate 方法，当 Textbus 在格式变换时，如果需要拆分组件，则会调用此方法，你可以根据传入的开始插槽位置和结束插槽位置，把拆分后的组件返回给 Textbus。Textbus 会根据格式变换规则，把你返回的组件插入到文档中。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">separate</span>(<span class="hljs-params">startSlot: Slot, endSlot: Slot</span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;startIndex =&nbsp;<span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">slots</span>.<span class="hljs-title function_">indexOf</span>(startSlot)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;endIndex =&nbsp;<span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">slots</span>.<span class="hljs-title function_">indexOf</span>(endSlot)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">YourComponent</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">textbus</span>, {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">slots</span>:&nbsp;<span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">slots</span>.<span class="hljs-title function_">splice</span>(startIndex, endIndex)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div style="text-align:left" class="xnote-h3">removeSlot() 删除插槽</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div style="text-align:left">当组件的插槽可删除时，可实现此方法，当 Textbus 需要删除插槽时，会调用此方法。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">removeSlot</span>(<span class="hljs-params">slot: Slot</span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;index =&nbsp;<span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">slots</span>.<span class="hljs-title function_">indexOf</span>(slot)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">slots</span>.<span class="hljs-title function_">splice</span>(index,&nbsp;<span class="hljs-number">1</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
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