import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><div class="xnote-root">
  <div data-placeholder="" class="xnote-content">
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h1">配置项</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>在我们创建 Textbus 实例时，我们可以根据我们的扩展，添加配置项。Textbus 配置项如下：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* Textbus 模块配置</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">Module</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 组件列表 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;components?:&nbsp;<span class="hljs-title class_">ComponentConstructor</span>[];</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 格式列表 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;formatters?:&nbsp;<span class="hljs-title class_">Formatter</span>&lt;<span class="hljs-built_in">any</span>&gt;[];</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 属性列表 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;attributes?:&nbsp;<span class="hljs-title class_">Attribute</span>&lt;<span class="hljs-built_in">any</span>&gt;[];</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 跨平台及基础扩展实现的提供者 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;providers?:&nbsp;<span class="hljs-title class_">Provider</span>[];</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 插件集合 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;plugins?:&nbsp;<span class="hljs-title class_">Plugin</span>[];</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 当模块注册时调用</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;beforeEach?(<span class="hljs-attr">textbus</span>:&nbsp;<span class="hljs-title class_">Textbus</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 初始化时的设置，返回一个函数，当 Textbus 销毁时调用</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;<span class="hljs-variable">textbus</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;setup?(<span class="hljs-attr">textbus</span>:&nbsp;<span class="hljs-title class_">Textbus</span>):&nbsp;<span class="hljs-title class_">Promise</span>&lt;(<span class="hljs-function">() =&gt;</span>&nbsp;<span class="hljs-built_in">void</span>) |&nbsp;<span class="hljs-built_in">void</span>&gt; | (<span class="hljs-function">() =&gt;</span>&nbsp;<span class="hljs-built_in">void</span>) |&nbsp;<span class="hljs-built_in">void</span>;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 当启动完成时触发</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;onAfterStartup?(<span class="hljs-attr">textbus</span>:&nbsp;<span class="hljs-title class_">Textbus</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 当 Textbus 销毁时触发</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;onDestroy?():&nbsp;<span class="hljs-built_in">void</span>;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* Textbus 核心配置</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">TextbusConfig</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">Module</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 导入第三方包 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;imports?:&nbsp;<span class="hljs-title class_">Module</span>[];</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 开启 Zen Coding 支持 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;zenCoding?:&nbsp;<span class="hljs-built_in">boolean</span>;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 最大历史记录栈 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;historyStackSize?:&nbsp;<span class="hljs-built_in">number</span>;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 是否只读 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">readonly</span>?:&nbsp;<span class="hljs-built_in">boolean</span>;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 附加的渲染器。常用于在内存中渲染 HTML 字符串*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;additionalAdapters?:&nbsp;<span class="hljs-title class_">Adapter</span>&lt;<span class="hljs-built_in">any</span>,&nbsp;<span class="hljs-built_in">any</span>&gt;[];</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>我们可以把前面文档中开发的组件及格式等添加到配置项。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content xnote-source-code-content-highlight"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 创建 Textbus 实例</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;textbus =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Textbus</span>({'{'}</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">components</span>: [</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title class_">RootComponent</span>,</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title class_">ParagraphComponent</span>,</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title class_">ListComponent</span></span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;],</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">formatters</span>: [</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;boldFormatter,</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;colorFormatter,</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;],</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">attributes</span>: [</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;textAlignAttribute</span></pre><pre class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;],</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">imports</span>: [</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;browserModule&nbsp;<span class="hljs-comment">// 添加浏览器支持模块</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;]</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2"><span style="color:rgb(73, 80, 96)">焦点事件 onFocus</span></p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">当编辑器获得焦点时的可观察对象。</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">editor.<span class="hljs-property">onFocus</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">//</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2"><span style="color:rgb(73, 80, 96)">失去焦点事件 onBlur</span></p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">当编辑器失去焦点时的可观察对象。</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">editor.<span class="hljs-property">onBlur</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">//</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">监听文档变化 onChange</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>编辑器内容是否变化可观察对象。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">textbus.<span class="hljs-property">onChange</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'editor content is changed!'</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">保存事件 onSave</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>当用户按 ctrl + s &nbsp;的可观察对象。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">editor.<span class="hljs-property">onSave</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">// 用户触发了保存</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">是否销毁 destroyed</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>编辑器是否已销毁。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">是否已准备完成 isReady</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>编辑器是否已准备好。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">是否获取焦点 isFocus</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>编辑器是否已经获取焦点。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">只读 readonly</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>是否是只读，可读写。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">配置项 config</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>初始化编辑器时的配置项。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">渲染组件 render()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>使用 Textbus 渲染一个组件。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">textbus.<span class="hljs-title function_">render</span>(component)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">获取焦点 focus()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>编辑器获取焦点。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">失去焦点 blur()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>取消编辑器焦点。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">获取 JSON 格式文档 getJSON()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>获取 JSON 格式的编辑器内容。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;json = textbus.<span class="hljs-title function_">getJSON</span>()</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">销毁编辑器 destroy()</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>销毁编辑器实例。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">textbus.<span class="hljs-title function_">destroy</span>()</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><br/></p>
    </div>
  </div>
</div></div>
    )
  }
}
