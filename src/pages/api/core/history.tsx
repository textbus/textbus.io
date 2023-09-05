import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>History 历史记录</h1>
<p>History 用于记录编辑器编辑历史记录，并提供回退、重做等功能。</p>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取 History 的实例。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 方法1</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;history = editor.<span class="tb-hl-function">get</span>(History)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法2</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;history = injector.<span class="tb-hl-function">get</span>(History)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法3</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;history =&nbsp;<span class="tb-hl-function">useContext</span>(History)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>onChange 监听历史记录变化</h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">当历史记录变化时，触发事件。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line">onChange: Observable&lt;<span class="tb-hl-keyword">void</span>&gt;;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">history.onChange.<span class="tb-hl-function">subscribe</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(<span class="tb-hl-string">'历史记录发生变化了'</span>)</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2 style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">onBack 监听历史记录回退</span></h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">当历史记录回退时，触发事件。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line">onBack: Observable&lt;<span class="tb-hl-keyword">void</span>&gt;;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">示例：</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">history.onBack.<span class="tb-hl-function">subscribe</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(<span class="tb-hl-string">'历史记录回退了'</span>)</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2 style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">onForward 监听历史记录重做</span></h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">当历史记录重做时，触发事件。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line">onForward: Observable&lt;<span class="tb-hl-keyword">void</span>&gt;;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">示例：</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">history.onForward.<span class="tb-hl-function">subscribe</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(<span class="tb-hl-string">'重做历史记录了'</span>)</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2 style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">onPush 监听历史记录增加</span></h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">当历史记录增加时，触发事件。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line">onPush: Observable&lt;<span class="tb-hl-keyword">void</span>&gt;;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">示例：</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">history.onPush.<span class="tb-hl-function">subscribe</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(<span class="tb-hl-string">'历史记录增加了'</span>)</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>canBack 是否可回退</h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">当前历史记录是否可回退。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line">canBack:&nbsp;<span class="tb-hl-builtin">boolean</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2 style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">canForward 是否可重做</span></h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">当前历史记录是否可重做。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line">canForward:&nbsp;<span class="tb-hl-builtin">boolean</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2><span style="color:rgb(73, 80, 96)">listen() 记录操作历史</span></h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">开始记录操作记录。</span><strong style="color:rgb(255, 102, 102)"><span style="background-color:rgb(255, 255, 255)">内核自动调用，不需手动调用</span></strong><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">listen</span>():&nbsp;<span class="tb-hl-keyword">void</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>back() 回退</h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">回退一步操作。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">back</span>():&nbsp;<span class="tb-hl-keyword">void</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">history.<span class="tb-hl-function">back</span>()</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>forward() 前进</h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">重做一步操作。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">forward</span>():&nbsp;<span class="tb-hl-keyword">void</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">history.<span class="tb-hl-function">forward</span>()</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>clear() 回退</h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">清空历史记录。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">clear</span>():&nbsp;<span class="tb-hl-keyword">void</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">history.<span class="tb-hl-function">clear</span>()</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>destory() 回退</h2>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">销毁实例。</span><strong style="color:rgb(255, 102, 102)"><span style="background-color:rgb(255, 255, 255)">内核自动调用，不需手动调用</span></strong><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">destory</span>():&nbsp;<span class="tb-hl-keyword">void</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p><br/></p>
<p><br/></p>
<p><br/></p>
<p><br/></p></div>
    )
  }
}