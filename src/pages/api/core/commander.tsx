import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><div data-comopnent="RootComponent" class="xnote-root">
  <div data-placeholder="" class="xnote-content">
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h1">Commander 命令</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Commander 类用于根据当前编辑器选区做出不同行为，如对选区进行添加或清除格式、插入或删除内容，亦或是对选区内容进行结构变换等。同时，Commander 会在修改文档完成后，<strong style="color:rgb(255, 102, 102)">自动复原选区</strong>，你可以不必关心选区相关的问题。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>通过编辑器实例或通过 useContext 勾子获取 Commander 的实例。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法1</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;commander = textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">Commander</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法2</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;commander =&nbsp;<span class="hljs-title function_">useContext</span>(<span class="hljs-title class_">Commander</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">transform() 结构变换</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">transform 方法用于对文档内容进行结构变换，如把选区框选的内容或光标所在的插槽转换成列表组件、段落组件等。调用 transform 方法需要传入一个变换规则，Textbus 将根据你传入的规则，动态的创建或删除文档中的组件，并最终生成新组件和插槽，替换变换之前的内容。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 组件转换规则</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">TransformRule</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 目标组件的数据类型 */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">targetType</span>:&nbsp;<span class="hljs-title class_">ContentType</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 创建目标组件新插槽的工厂函数</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;<span class="hljs-variable">from</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title function_">slotFactory</span>(<span class="hljs-attr">from</span>:&nbsp;<span class="hljs-title class_">Component</span>&lt;<span class="hljs-built_in">any</span>&gt;):&nbsp;<span class="hljs-title class_">Slot</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 创建组件状态的工厂函数</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title function_">stateFactory</span>(<span class="hljs-attr">slots</span>:&nbsp;<span class="hljs-title class_">Slot</span>[],&nbsp;<span class="hljs-attr">textbus</span>:&nbsp;<span class="hljs-title class_">Textbus</span>):&nbsp;<span class="hljs-title class_">Component</span>&lt;<span class="hljs-built_in">any</span>&gt;[];</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><strong style="font-size:18px">targetType</strong></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>要转换的目标组件类型，即你想要把当前选中的内容转换成何种组件的数据类型。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><strong style="font-size:18px">slotFactory</strong></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>创建新组件子插槽的工厂函数。Textbus 会在变换需要时调用，并传入当前转换的上下文信息，在部分情况下，你可能需要根据上下文信息返回不同的插槽实例。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><strong style="font-size:18px">stateFactory</strong></div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>创建组件状态的工厂函数。Textbus 会在需要变换需要时调用，你需要返回当前目标组件实例的状态，如果组件没有状态，则不需要实现此方法。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>我们以转换多插槽的无序列表为例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;<span class="hljs-attr">rule</span>:&nbsp;<span class="hljs-title class_">TransformRule</span>&nbsp;= {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">targetType</span>:&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">BlockComponent</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">slotFactory</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Slot</span>([</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">InlineComponent</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">Text</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;])</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'},</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">stateFactory</span>(<span class="hljs-params">slots</span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">ListComponent</span>(textbus, {'{'}slots{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">transform</span>(rule)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <blockquote data-component="BlockquoteComponent" class="xnote-blockquote">
      <div>
        <div data-component="ParagraphComponent" class="xnote-paragraph">
          <div><strong>注意：</strong>对于未实现 separate 方法的组件，即表示该组件不可拆解，Textbus 将不会对此类组件做自动变换，对不可变换或不能变换的组件，Textbus 将自动跳过。</div>
        </div>
      </div>
    </blockquote>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">write() 写入内容</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">在选区位置写入内容。当选区闭合时（即呈现为光标），直接写入新内容。当选区未闭合时（即呈现为拖蓝），则会先删除选区的内容，再插入新的内容。你还可以传入更多参数，给当前内容添加样式。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">write</span>(<span class="hljs-attr">content</span>:&nbsp;<span class="hljs-built_in">string</span>&nbsp;|&nbsp;<span class="hljs-title class_">Component</span>, formats?:&nbsp;<span class="hljs-title class_">Formats</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">write&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">FormatValue</span>&gt;(<span class="hljs-attr">content</span>:&nbsp;<span class="hljs-built_in">string</span>&nbsp;|&nbsp;<span class="hljs-title class_">Component</span>, formatter?:&nbsp;<span class="hljs-title class_">Formatter</span>&lt;T&gt;, value?: T):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>write 方法在写入内容时，会默认继承光标前面内容的格式，如果你传入的格式和继承的样式来自同一个 formatter，则以你传入的为准。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例如下：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 写入内容</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">write</span>(<span class="hljs-string">'你好'</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 写入加粗的内容</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">write</span>(<span class="hljs-string">'你好'</span>, boldFormatter,&nbsp;<span class="hljs-literal">true</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 写入带多种格式的内容</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">write</span>(<span class="hljs-string">'你好'</span>, [</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;[boldFormatter,&nbsp;<span class="hljs-literal">true</span>],</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;[fontSizeFormatter,&nbsp;<span class="hljs-string">'14px'</span>]</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">])</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">insert() 插入内容</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">insert 方法和 write 方法使用方式一致，不过不会从光标前面继承格式。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">insert</span>(<span class="hljs-attr">content</span>:&nbsp;<span class="hljs-built_in">string</span>&nbsp;|&nbsp;<span class="hljs-title class_">Component</span>, formats?:&nbsp;<span class="hljs-title class_">Formats</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">insert&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">FormatValue</span>&gt;(<span class="hljs-attr">content</span>:&nbsp;<span class="hljs-built_in">string</span>&nbsp;|&nbsp;<span class="hljs-title class_">Component</span>, formatter?:&nbsp;<span class="hljs-title class_">Formatter</span>&lt;T&gt;, value?: T):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">delete() 删除内容</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>删除当前选区内容，如果选区为闭合状态，即显示为光标，则根据传入参数向前或向后删除。如果选区为非闭合状态，即显示为拖蓝，则删除拖蓝区的内容。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">delete</span>(deleteBefore?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">delete</span>(<span class="hljs-attr">receiver</span>:&nbsp;<span class="hljs-function">(<span class="hljs-params">slot: Slot</span>) =&gt;</span>&nbsp;<span class="hljs-built_in">void</span>, deleteBefore?:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 向后删除一位</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">delete</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 向前删除一位</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">delete</span>(<span class="hljs-literal">true</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 删除时获取已删除内容</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">delete</span>(<span class="hljs-function"><span class="hljs-params">slot</span>&nbsp;=&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'已删除的内容为：'</span>, slot)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">break() 换行</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">触发换行行为，如果此时选区未闭合，则会先删除选中内容，再触发换行。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">break</span>():&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">break</span>()</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">insertBefore() 在指定组件前插入新组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">根据文档中已有组件，把一个新的组件插入到已有组件前面。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">insertBefore</span>(<span class="hljs-attr">newChild</span>:&nbsp;<span class="hljs-title class_">Component</span>,&nbsp;<span class="hljs-attr">ref</span>:&nbsp;<span class="hljs-title class_">Component</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;newComponent =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">YourComponent</span>(textbus, {'{'}...{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">insertBefore</span>(newComponent, refComponent)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">insertAfter() 在指定组件后插入新组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">根据文档中已有组件，把一个新的组件插入到已有组件后面。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">insertAfter</span>(<span class="hljs-attr">newChild</span>:&nbsp;<span class="hljs-title class_">Component</span>,&nbsp;<span class="hljs-attr">ref</span>:&nbsp;<span class="hljs-title class_">Component</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;newComponent =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">YourComponent</span>(textbus, {'{'}...{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">insertAfter</span>(newComponent, refComponent)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">replaceComponent() 替换组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">使用一个新组件，替换文档中现有组件。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">replaceComponent</span>(<span class="hljs-attr">oldComponent</span>:&nbsp;<span class="hljs-title class_">Component</span>,&nbsp;<span class="hljs-attr">newComponent</span>:&nbsp;<span class="hljs-title class_">Component</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;newComponent =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">YourComponent</span>(textbus, {'{'}...{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">replaceComponent</span>(oldComponent, newComponent)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">removeComponent() 删除组件</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">在文档中删除一个组件。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">removeComponent</span>(<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">Component</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">removeComponent</span>(yourComponent)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">copy() 复制选区内容</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">把选区选中的内容拷贝到剪贴板。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">copy</span>():&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">copy</span>()</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">cut() 剪切</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">剪切选区选中的内容。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">cut</span>():&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">cut</span>()</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">paste() 粘贴</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">粘贴指定插槽的内容或文本到选区，如果粘贴前选区未闭合，则会选删除选中的内容，再进行粘贴。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">paste</span>(<span class="hljs-attr">pasteSlot</span>:&nbsp;<span class="hljs-title class_">Slot</span>,&nbsp;<span class="hljs-attr">text</span>:&nbsp;<span class="hljs-built_in">string</span>):&nbsp;<span class="hljs-built_in">boolean</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">paste</span>(yourSlot, yourSlot.<span class="hljs-title function_">toString</span>())</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">cleanFormats() 清除格式</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">清除当前选区的所有格式。你可以传入一个 Formatter 数组，表示哪些格式不清除，或传入一个函数，Textbus 在清除格式时，会调用引函数，并传入当前要清除格式的 Formatter，当返回为 true 时，则不清除。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">cleanFormats</span>(excludeFormatters?:&nbsp;<span class="hljs-title class_">Formatter</span>&lt;<span class="hljs-built_in">any</span>&gt;[] | (<span class="hljs-function">(<span class="hljs-params">formatter: Formatter&lt;<span class="hljs-built_in">any</span>&gt;</span>) =&gt;</span>&nbsp;<span class="hljs-built_in">boolean</span>)):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 清除所有格式</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">cleanFormats</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 清除除加粗外的所有格式</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">cleanFormats</span>([boldFormatter])</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 清除除加粗外的所有格式</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">cleanFormats</span>(<span class="hljs-function"><span class="hljs-params">formatter</span>&nbsp;=&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;formatter === boldFormatter</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">applyFormat() 应用格式</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">给当前选区选中的内容应用格式。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">applyFormat&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">FormatValue</span>&gt;(<span class="hljs-attr">formatter</span>:&nbsp;<span class="hljs-title class_">Formatter</span>&lt;T&gt;,&nbsp;<span class="hljs-attr">value</span>: T):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置字体小大为 14px</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">applyFormat</span>(fontSizeFormatter,&nbsp;<span class="hljs-string">'14px'</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置超链接</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">applyFormat</span>(linkForamtter, {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">href</span>:&nbsp;<span class="hljs-string">'https://textbus.io'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">target</span>:&nbsp;<span class="hljs-string">'_blank'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">unApplyFormat() 取消格式</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">清除当前选区指定的格式。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">unApplyFormat</span>(<span class="hljs-attr">formatter</span>:&nbsp;<span class="hljs-title class_">Formatter</span>&lt;<span class="hljs-built_in">any</span>&gt;):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">unApplyFormat</span>(boldFormatter)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">applyAttribute() 应用属性</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">给当前选区选中的插槽应用属性。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">applyAttribute&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">FormatValue</span>&gt;(<span class="hljs-attr">attribute</span>:&nbsp;<span class="hljs-title class_">Attribute</span>&lt;T&gt;,&nbsp;<span class="hljs-attr">value</span>: T):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">applyFormat</span>(alignAttribute,&nbsp;<span class="hljs-string">'right'</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">unApplyAttribute() 取消属性</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">清除当前选区指定的格式。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">unApplyAttribute</span>(<span class="hljs-attr">attribute</span>:&nbsp;<span class="hljs-title class_">Attribute</span>&lt;<span class="hljs-built_in">any</span>&gt;):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">unApplyAttribute</span>(alignAttribute)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">cleanAttributes() 清除格式</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><span style="background-color:rgb(255, 255, 255)">清除当前选区内插槽的所有属性。你可以传入一个 Attribute 数组，表示哪些格式不清除，或传入一个函数，Textbus 在清除属性时，会调用引函数，并传入当前要清除属性的 Attribute ，当返回为 true 时，则不清除。</span></div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">cleanAttributes</span>(excludeAttributes?:&nbsp;<span class="hljs-title class_">Attribute</span>&lt;<span class="hljs-built_in">any</span>&gt;[] | (<span class="hljs-function">(<span class="hljs-params">attribute: Attribute&lt;<span class="hljs-built_in">any</span>&gt;</span>) =&gt;</span>&nbsp;<span class="hljs-built_in">boolean</span>)):&nbsp;<span class="hljs-built_in">void</span>;</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 清除所有格式</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">cleanAttributes</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 清除除对齐方式外的所有格式</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">cleanAttributes</span>([alignAttribute])</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 清除除对齐方式外的所有格式</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">commander.<span class="hljs-title function_">cleanAttributes</span>(<span class="hljs-function"><span class="hljs-params">formatter</span>&nbsp;=&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;formatter === alignAttribute</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
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