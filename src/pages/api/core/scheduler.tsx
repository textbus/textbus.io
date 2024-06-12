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
      <p class="xnote-h1">Scheduler 调度器</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>Scheduler 用于兼听文档变化，并自动触发渲染，并提供协作及历史记录管理事务相关的能力。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取&nbsp;</span><span style="background-color:rgb(255, 255, 255)">Scheduler&nbsp;</span><span style="color:rgb(73, 80, 96)">的实例。</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法1</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;scheduler = textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">Scheduler</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法2</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;scheduler =&nbsp;<span class="hljs-title function_">useContext</span>(<span class="hljs-title class_">Scheduler</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">lastChangesHasLocalUpdate 是否有本地变更</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>一个变更周期内，是否包含本地变更。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">lastChangesHasLocalUpdate</span>:&nbsp;<span class="hljs-built_in">boolean</span></span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">lastChangesHasRemoteUpdate 是否有远程变更</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">一个变更周期内，是否包含远程变更（通常指协作引起的变更）。</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">lastChangesHasRemoteUpdate</span>:&nbsp;<span class="hljs-built_in">boolean</span></span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">onDocChange 监听文档变化</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>当文档发生变更时触发，直到文档文档渲染完成后文档再次产生变更时，继续触发。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">onDocChange</span>:&nbsp;<span class="hljs-title class_">Observable</span>&lt;<span class="hljs-built_in">void</span>&gt;;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>示例：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">scheduler.<span class="hljs-property">onDocChange</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'文档发生变更了'</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">onDocChanged 监听视图同步完成</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>文档变更并渲染完成后触发，ChangeItem 为变更的变更源和原子命令。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">onDocChanged</span>:&nbsp;<span class="hljs-title class_">Observable</span>&lt;<span class="hljs-title class_">ChangeItem</span>[]&gt;;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>示例：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">scheduler.<span class="hljs-property">onDocChanged</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function"><span class="hljs-params">changes</span>&nbsp;=&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(changes)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">remoteUpdateTransact() 远程变更事务</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>用于收集远程数据更新原子命令。task 为引起数据变更的回调函数。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">remoteUpdateTransact</span>(<span class="hljs-attr">task</span>:&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;<span class="hljs-built_in">void</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>示例：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">scheduler.<span class="hljs-title function_">remoteUpdateTransact</span>(<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;slot.<span class="hljs-title function_">insert</span>(<span class="hljs-string">'你好，'</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;slot.<span class="hljs-title function_">insert</span>(<span class="hljs-string">'Textbus!'</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">historyApplyTranscat() 历史记录变更事务</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>用于收集历史记录引起的数据更新原子命令，task 为引起数据变更的回调函数。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">historyApplyTransact</span>(<span class="hljs-attr">task</span>:&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;<span class="hljs-built_in">void</span>):&nbsp;<span class="hljs-built_in">void</span>;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">示例：</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">scheduler.<span class="hljs-title function_">historyApplyTransact</span>(<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;history.<span class="hljs-title function_">back</span>()</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">run() 启动调度器</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>无需手动调用。Textbus 会在启动时自动调用。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">run</span>():&nbsp;<span class="hljs-built_in">void</span></span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">destroy() 销毁调度器</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>无需手动调用。Textbus 会在销毁时自动调用。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">destroy</span>():&nbsp;<span class="hljs-built_in">void</span></span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
  </div>
</div></div>
    )
  }
}
