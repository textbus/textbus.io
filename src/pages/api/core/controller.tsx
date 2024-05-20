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
      <p class="xnote-h1">Controller 控制器</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>Controller 用于动态控制编辑器全局状态。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取 Controller 的实例。</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="atom-one-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number atom-one-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法1</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;controller = textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">Controller</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法2</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;controller =&nbsp;<span class="hljs-title function_">useContext</span>(<span class="hljs-title class_">Controller</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">onReadonlyStateChange 监听只读属性</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">onReadonlyStateChange 是一个可观察对象，用于实时监听编辑器的只读状态。</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="atom-one-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number atom-one-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">onReadonlyStateChange</span>:&nbsp;<span class="hljs-title class_">Observable</span>&lt;<span class="hljs-built_in">boolean</span>&gt;;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>示例：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="atom-one-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number atom-one-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">controller.<span class="hljs-property">onReadonlyStateChange</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(controller.<span class="hljs-property">readonly</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">readonly 是否只读</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">可读写，编辑器当前是否只读。</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="atom-one-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number atom-one-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-attr">readonly</span>:&nbsp;<span class="hljs-built_in">boolean</span>;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>示例：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="atom-one-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number atom-one-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 设置编辑器为只读</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">controller.<span class="hljs-property">readonly</span>&nbsp;=&nbsp;<span class="hljs-literal">true</span></span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
  </div>
</div></div>
    )
  }
}