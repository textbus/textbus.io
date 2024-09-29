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
      <div class="xnote-h1">协作编辑</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 官方提供了基于 Yjs 的协作实现，要使用在线协作编辑，你需要先安装 Textbus 协作模块，并在 Textbus 实例中声明协作模块。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">安装依赖</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="false" class="xnote-source-code xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install @textbus/collaborate</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">添加协作模块</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Textbus 官方提供了&nbsp;<a href="https://github.com/yjs/y-websocket" target="_blanK">y-websocket</a>&nbsp;和&nbsp;<a href="https://github.com/ueberdosis/hocuspocus" target="_blanK">hocuspocus</a>&nbsp;的实现，你也可以根据自己的需要，实现自己的协作连接器。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>y-websocket 连接器示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">YWebsocketConnector</span>,&nbsp;<span class="hljs-title class_">CollaborateModule</span>,&nbsp;<span class="hljs-title class_">UserActivity</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/collaborate'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">CollaborateCursor</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/platform-browser'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">Textbus</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/core'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 创建协作模块</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;collabModule =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">CollaborateModule</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">userinfo</span>: {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">username</span>:&nbsp;<span class="hljs-string">'张三'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">color</span>:&nbsp;<span class="hljs-string">'#ff0000'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">id</span>:&nbsp;<span class="hljs-string">'user_id'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'},</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">createConnector</span>(<span class="hljs-params">yDoc</span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">YWebsocketConnector</span>(<span class="hljs-string">'ws://example.com'</span>,&nbsp;<span class="hljs-string">'docName'</span>, yDoc)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;textbus =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Textbus</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">imports</span>: [collabModule],&nbsp;<span class="hljs-comment">// 添加协作模块到 Textbus</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">// 订阅多人光标并绑定</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;activity = textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">UserActivity</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;collabCursor = textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">CollaborateCursor</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;sub = activity.<span class="hljs-property">onStateChange</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function"><span class="hljs-params">ev</span>&nbsp;=&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;collabCursor.<span class="hljs-title function_">draw</span>(ev)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sub.<span class="hljs-title function_">unsubscribe</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>hocuspocus 连接器示例：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">HocuspocusConnector</span>,&nbsp;<span class="hljs-title class_">CollaborateModule</span>,&nbsp;<span class="hljs-title class_">UserActivity</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/collaborate'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">CollaborateCursor</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/platform-browser'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">Textbus</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@textbus/core'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 创建协作模块</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;collabModule =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">CollaborateModule</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">userinfo</span>: {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">username</span>:&nbsp;<span class="hljs-string">'张三'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">color</span>:&nbsp;<span class="hljs-string">'#ff0000'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">id</span>:&nbsp;<span class="hljs-string">'user_id'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'},</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">createConnector</span>(<span class="hljs-params">yDoc</span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">HocuspocusConnector</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">url</span>:&nbsp;<span class="hljs-string">'ws://example.com'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">name</span>:&nbsp;<span class="hljs-string">'docName'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">document</span>: yDoc</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;textbus =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Textbus</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">imports</span>: [collabModule],&nbsp;<span class="hljs-comment">// 添加协作模块到 Textbus</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">// 订阅多人光标并绑定</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;activity = textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">UserActivity</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;collabCursor = textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">CollaborateCursor</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;sub = activity.<span class="hljs-property">onStateChange</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function"><span class="hljs-params">ev</span>&nbsp;=&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;collabCursor.<span class="hljs-title function_">draw</span>(ev)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sub.<span class="hljs-title function_">unsubscribe</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">自定义连接器</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>要实现自定义的连接器，只需要实现以下接口即可：</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* 协作通信通用接口</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">SyncConnector</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;* 当文档加载完成时触发的观察者</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-attr">onLoad</span>:&nbsp;<span class="hljs-title class_">Observable</span>&lt;<span class="hljs-built_in">void</span>&gt;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;* 当文档 awareness 状态变更时触发的观察者</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-attr">onStateChange</span>:&nbsp;<span class="hljs-title class_">Observable</span>&lt;<span class="hljs-built_in">any</span>&gt;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;* 设置 awareness 状态</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;key 状态的 key</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;*&nbsp;<span class="hljs-doctag">@param</span>&nbsp;data 状态值</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-title function_">setLocalStateField</span>(<span class="hljs-attr">key</span>:&nbsp;<span class="hljs-built_in">string</span>,&nbsp;<span class="hljs-attr">data</span>:&nbsp;<span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>,&nbsp;<span class="hljs-built_in">any</span>&gt;):&nbsp;<span class="hljs-built_in">void</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">/**</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;* 当文档销毁时调用</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;&nbsp;&nbsp;*/</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">abstract</span>&nbsp;<span class="hljs-title function_">onDestroy</span>():&nbsp;<span class="hljs-built_in">void</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
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