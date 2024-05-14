import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>输入器</h1>
<p>Input 类用于实现 Textbus 在浏览器平台的输入管理能力。</p>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取 Input 的实例。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 方法1</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;input = textbus.<span class="tb-hl-function">get</span>(Input)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法2</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;input =&nbsp;<span class="tb-hl-function">useContext</span>(Input)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>caret 光标</h2>
<p>在文档内闪动的光标。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">Caret</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;onPositionChange: Observable&lt;CaretPosition |&nbsp;<span class="tb-hl-keyword">null</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">readonly</span>&nbsp;rect: Rect</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">refresh</span>(isFixedCaret:&nbsp;<span class="tb-hl-builtin">boolean</span>):&nbsp;<span class="tb-hl-keyword">void</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">correctScrollTop</span>(scroller: Scroller):&nbsp;<span class="tb-hl-keyword">void</span></div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line">caret: Caret</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>caret.onPositionChange 光标位置变化事件</h3>
<p>当光标位置在文档中的坐标位置变化时，触发事件。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">input.caret.onPositionChange.<span class="tb-hl-function">subscribe</span>(position =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(position)</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>caret.rect 光标尺寸</h3>
<p>光标相对于页面的左边距 left、上边距 top，和光标的宽度 width、高度 height。</p>
<h3>caret.correctScrollTop() 光标位置修正</h3>
<p>当用户编辑时，随着内容的变化，光标可能会跑到可见区域外。由于 Textbus 并不能预见文档会放在哪一个 DOM 容器内，所以需要开发者通过此方法实现光标位置修正，以保证光标始终在可见区域内。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">Scroller</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 当可滚动容器发生滚动时的观察者，如: fromEvent(document, 'scroll')</span></div><div class="tb-code-line">&nbsp;&nbsp;onScroll: Observable&lt;<span class="tb-hl-builtin">any</span>&gt;</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 当容器滚动时，让光标限制在什么范围</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">getLimit</span>(): CaretLimit</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// Textbus 计算出需要修正的偏移量</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setOffset</span>(offsetScrollTop:&nbsp;<span class="tb-hl-builtin">number</span>):&nbsp;<span class="tb-hl-keyword">void</span></div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>当滚动容器为 document 时的示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">input.caret.<span class="tb-hl-function">correctScrollTop</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;onScroll:&nbsp;<span class="tb-hl-function">fromEvent</span>(document,&nbsp;<span class="tb-hl-string">'scroll'</span>),</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">getLimit</span>(): CaretLimit {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top:&nbsp;<span class="tb-hl-number">116</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom: document.documentElement.clientHeight</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setOffset</span>(offsetScrollTop:&nbsp;<span class="tb-hl-builtin">number</span>) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;document.documentElement.scrollTop += offsetScrollTop</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>disabled 是否禁用</h2>
<p>boolean 值，可读写。当值为 true 时，将不能触发输入和快捷键行为。</p>
<h2>focus() 获取焦点</h2>
<p>让 input 获取焦点。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">focus</span>(nativeRange: Range, reFlash:&nbsp;<span class="tb-hl-builtin">boolean</span>):&nbsp;<span class="tb-hl-keyword">void</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>调用 focus 方法，必须指定一个原生的焦点位置（nativeRange)，并且指定是否重新开始光标闪动。</p>
<h2>blur()</h2>
<p>让 input 失去焦点。</p>
<p><br/></p>
<p><br/></p></div>
    )
  }
}