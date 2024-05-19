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
      <p class="xnote-h1">跨平台基础</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>Textbus 内核是一个平台无关的富文本内核。如果你需要在 web 平台以外的运行环境中使用 Textbus，可参考以下方法，实现相应接口即可。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>原生选区必须要实现的接口：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="atom-one-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number atom-one-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 用于跨平台实现的原生选区抽象类</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">NativeSelectionBridge</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;* 连接方法，Textbus 在需要桥接原生选区时调用，并传入连接器</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;<span class="hljs-variable">connector</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-title function_">connect</span>(<span class="hljs-attr">connector</span>:&nbsp;<span class="hljs-title class_">NativeSelectionConnector</span>):&nbsp;<span class="hljs-built_in">void</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;* 取消连接方法，Textbus 会在不需要桥接选区时调用</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-title function_">disConnect</span>():&nbsp;<span class="hljs-built_in">void</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;* Textbus 选区变化时调用，同时传入选区位置，用于原生选区实现具体平台的拖蓝效果</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;<span class="hljs-variable">range</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;changeFromLocal 是否是本地引起的变化</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-title function_">restore</span>(<span class="hljs-attr">range</span>:&nbsp;<span class="hljs-title class_">AbstractSelection</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span>,&nbsp;<span class="hljs-attr">changeFromLocal</span>:&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-built_in">void</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;* 获取上一行光标位置</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;<span class="hljs-variable">position</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-title function_">getPreviousLinePositionByCurrent</span>(<span class="hljs-attr">position</span>:&nbsp;<span class="hljs-title class_">SelectionPosition</span>):&nbsp;<span class="hljs-title class_">SelectionPosition</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;* 获取下一行光标位置</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;<span class="hljs-variable">position</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-title function_">getNextLinePositionByCurrent</span>(<span class="hljs-attr">position</span>:&nbsp;<span class="hljs-title class_">SelectionPosition</span>):&nbsp;<span class="hljs-title class_">SelectionPosition</span>&nbsp;|&nbsp;<span class="hljs-literal">null</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>原生平台必须要实现的视图适配器：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="atom-one-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number atom-one-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* Textbus 渲染适配器</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">Adapter</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/** 当视图更新时触发事件的可观察对象，用于通知 Textbus 视图渲染已完成 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-attr">onViewUpdated</span>:&nbsp;<span class="hljs-title class_">Observable</span>&lt;<span class="hljs-built_in">void</span>&gt;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/** 当前平台的复制能力 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-title function_">copy</span>():&nbsp;<span class="hljs-built_in">void</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/** 根组件渲染方法 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-title function_">render</span>(<span class="hljs-attr">rootComponent</span>:&nbsp;<span class="hljs-title class_">ComponentInstance</span>): (<span class="hljs-built_in">void</span>&nbsp;| (<span class="hljs-function">() =&gt;</span>&nbsp;<span class="hljs-built_in">void</span>))</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">提供适配器</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>在实现了如上接口后，你可以 Textbus 初始化时，通过 providers 配置，把你实现的适配器提供给 Textbus 即可。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="atom-one-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number atom-one-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;textbus =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Textbus</span>({'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">providers</span>: [{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">provide</span>:&nbsp;<span class="hljs-title class_">NativeSelectionBridge</span>,</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">useVlaue</span>: yourSelectionBridge</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}, {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">provide</span>:&nbsp;<span class="hljs-title class_">Adapter</span>,</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">useValue</span>: yourAdapter</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}]</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
  </div>
</div></div>
    )
  }
}