import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>Controller 控制器</h1>
<p>Controller 用于动态控制编辑器全局状态。</p>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取 Controller 的实例。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 方法1</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;controller = textbus.<span class="tb-hl-function">get</span>(Controller)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法2</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;controller =&nbsp;<span class="tb-hl-function">useContext</span>(Controller)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>onReadonlyStateChange 监听只读属性</h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">onReadonlyStateChange 是一个可观察对象，用于实时监听编辑器的只读状态。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line">onReadonlyStateChange: Observable&lt;<span class="tb-hl-builtin">boolean</span>&gt;;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">controller.onReadonlyStateChange.<span class="tb-hl-function">subscribe</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(controller.<span class="tb-hl-keyword">readonly</span>)</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>readonly 是否只读</h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">可读写，编辑器当前是否只读。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-keyword">readonly</span>:&nbsp;<span class="tb-hl-builtin">boolean</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 设置编辑器为只读</span></div><div class="tb-code-line">controller.<span class="tb-hl-keyword">readonly</span>&nbsp;=&nbsp;<span class="tb-hl-boolean">true</span></div></div><span class="tb-pre-lang">TypeScript</span></div></pre></div>
    )
  }
}