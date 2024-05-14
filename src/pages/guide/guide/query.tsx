import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>状态查询</h1>
<p>Query 用于根据格式、属性或组件在编辑器选区内查询状态。调用 Query 实例的不同方法，都会返回如下数据 QueryState 类型。只有查询结果的 state 值为 QueryStateType.Enabled 时，value 才会有对应查询结果的值，否则，value 为 null。</p>
<p>你可以根据查询结果，处理相应逻辑。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;* Textbus 状态查询状态枚举</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;*/</span></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">declare</span>&nbsp;<span class="tb-hl-keyword">enum</span>&nbsp;QueryStateType {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 正常 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;Normal =&nbsp;<span class="tb-hl-string">"Normal"</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 当前不可用 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;Disabled =&nbsp;<span class="tb-hl-string">"Disabled"</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 当前状态为生效 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;Enabled =&nbsp;<span class="tb-hl-string">"Enabled"</span></div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;* Textbus 状态查询结果，当状态为禁用时，`value` 为 null</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;*/</span></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">QueryState</span>&lt;V,<span class="tb-hl-class-name">&nbsp;</span>S<span class="tb-hl-class-name">&nbsp;</span>=<span class="tb-hl-class-name">&nbsp;QueryStateType</span>,<span class="tb-hl-class-name">&nbsp;</span>K<span class="tb-hl-class-name">&nbsp;</span>=<span class="tb-hl-class-name">&nbsp;</span>S<span class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-keyword">extends</span><span class="tb-hl-class-name">&nbsp;QueryStateType</span>.<span class="tb-hl-class-name">Enabled&nbsp;</span>?<span class="tb-hl-class-name">&nbsp;</span>V<span class="tb-hl-class-name">&nbsp;</span>:<span class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-keyword">null</span>&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;state: S;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;value: K;</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取 Query 的实例。</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 方法 1</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;query = textbus.<span class="tb-hl-function">get</span>(Query)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法 2</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;query =&nbsp;<span class="tb-hl-function">useContext</span>(Query)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>queryFormat() 查询格式</h2>
<p>用于查询格式在选区内的状态。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">queryFormat</span>&lt;T&nbsp;<span class="tb-hl-keyword">extends</span>&nbsp;FormatValue&gt;(formatter: Formatter&lt;T&gt;): QueryState&lt;T&gt;;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;result = query.<span class="tb-hl-function">queryFormat</span>(fontSizeFormatter)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">if</span>&nbsp;(result.state === QueryStateType.Enabled) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(result.value)&nbsp;<span class="tb-hl-comment">// 14px</span></div><div class="tb-code-line">{'}'}&nbsp;<span class="tb-hl-keyword">else</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(result.value)&nbsp;<span class="tb-hl-comment">// null</span></div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>queryAttribute() 查询属性</h2>
<p>用于查询属性在选区选中插槽中的状态。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">queryAttribute</span>&lt;T&nbsp;<span class="tb-hl-keyword">extends</span>&nbsp;FormatValue&gt;(attribute: Attribute&lt;T&gt;): QueryState&lt;T&gt;;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">示例：</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;result = query.<span class="tb-hl-function">queryAttribute</span>(alignAttribute)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">if</span>&nbsp;(result.state === QueryStateType.Enabled) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(result.value)&nbsp;<span class="tb-hl-comment">// right</span></div><div class="tb-code-line">{'}'}&nbsp;<span class="tb-hl-keyword">else</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(result.value)&nbsp;<span class="tb-hl-comment">// null</span></div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>queryComponent() 查询组件</h2>
<p>用于查询选区内是否是传入组件的实例。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">queryComponent</span>&lt;Extends, T, U&gt;(component: Component&lt;Extends, T, U&gt;, filter?: (instance: ComponentInstance&lt;Extends, T, U&gt;) =&gt;&nbsp;<span class="tb-hl-builtin">boolean</span>): QueryState&lt;ComponentInstance&lt;Extends, T, U&gt;&gt;;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">示例：</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;result = query.<span class="tb-hl-function">queryComponent</span>(listComponent)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">if</span>&nbsp;(result.state === QueryStateType.Enabled) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(result.value.name)&nbsp;<span class="tb-hl-comment">// ListComponent</span></div><div class="tb-code-line">{'}'}&nbsp;<span class="tb-hl-keyword">else</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(result.value)&nbsp;<span class="tb-hl-comment">// null</span></div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>queryWrappedComponent() 查询上层组件</h2>
<p>查询当前选区是否包含在指定组件内。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">queryWrappedComponent</span>&lt;Extends, T, U&gt;(component: Component&lt;Extends, T, U&gt;): QueryState&lt;ComponentInstance&lt;Extends, T, U&gt;&gt;;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">示例：</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;result = query.<span class="tb-hl-function">queryWrappedComponent</span>(blockquoteComponent)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">if</span>&nbsp;(result.state === QueryStateType.Enabled) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(result.value.name)&nbsp;<span class="tb-hl-comment">// BlockquoteComponent</span></div><div class="tb-code-line">{'}'}&nbsp;<span class="tb-hl-keyword">else</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(result.value)&nbsp;<span class="tb-hl-comment">// null</span></div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p><br/></p></div>
    )
  }
}