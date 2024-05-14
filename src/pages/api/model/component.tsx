import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>组件</h1>
<p>当我们调用某个组件的 createInstance 方法时，会返回一个组件实例。我们可以通过访问实例属性上的属性或方法，完成我们的需求。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;* 组件实例对象</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;*/</span></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">ComponentInstance</span>&lt;<span class="tb-hl-class-name">Extends&nbsp;</span><span class="tb-hl-keyword">extends</span><span class="tb-hl-class-name">&nbsp;ComponentExtends&nbsp;</span>=<span class="tb-hl-class-name">&nbsp;ComponentExtends</span>,<span class="tb-hl-class-name">&nbsp;State&nbsp;</span>=<span class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-builtin">any</span>,<span class="tb-hl-class-name">&nbsp;SlotState&nbsp;</span>=<span class="tb-hl-class-name">&nbsp;</span><span class="tb-hl-builtin">unknown</span>&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 组件所在的插槽</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* @readonly</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* @internal</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;parent: Slot |&nbsp;<span class="tb-hl-keyword">null</span>;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 父组件</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* @readonly</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* @internal</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;parentComponent: ComponentInstance |&nbsp;<span class="tb-hl-keyword">null</span>;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件变化标识器 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;changeMarker: ChangeMarker;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件是否可拆分 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;separable:&nbsp;<span class="tb-hl-builtin">boolean</span>;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件名 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-builtin">string</span>;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件长度，固定为 1 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;length:&nbsp;<span class="tb-hl-number">1</span>;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件类型 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;type: ContentType;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件的子插槽集合 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;slots: Slots&lt;SlotState&gt;;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件内部实现的方法 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">extends</span>: Extends;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件动态上下文菜单注册表 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;shortcutList: Shortcut[];</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 当状态变更时触发 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;onStateChange: Observable&lt;StateChange&lt;State&gt;&gt;;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件状态 */</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">get</span>&nbsp;<span class="tb-hl-function">state</span>(): State;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 更新组件状态的方法</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* @param fn</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* @param record</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">updateState</span>(fn: (draft: Draft&lt;State&gt;) =&gt;&nbsp;<span class="tb-hl-keyword">void</span>, record?:&nbsp;<span class="tb-hl-builtin">boolean</span>): State;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 组件转为 JSON 数据的方法</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">toJSON</span>(): ComponentLiteral&lt;State&gt;;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 将组件转换为 string</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">toString</span>():&nbsp;<span class="tb-hl-builtin">string</span>;</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>parent 父插槽</h2>
<p>组件的父插槽，当组件未插入任何插槽时，值为 null。</p>
<h2>parentComponent 父组件</h2>
<p>组件的父组件，即组件父插槽没有父组件时，值为 null。</p>
<h2>changeMarker 变化标识器</h2>
<p>用于标识组件是否发生变化。</p>
<h2>sparable 组件是否可拆分</h2>
<p>boolean 值，标识组件是否可拆分。Textbus 会在做结构变换时，根据此属性决定变换结果。</p>
<h2>name 组件名</h2>
<p>组件的名字，在同一个编辑器实例中，不可重复。</p>
<h2>length 组件长度</h2>
<p>组件在插槽中占用的长度，固定为 1。</p>
<h2>type 组件类型</h2>
<p>标识组件的类型，可选值为：ContentType.InlineComponent 或 ContentType.BlockComponent。</p>
<h2>slots 组件的子插槽集合</h2>
<p>Slots 类的实例，用于管理组件子插槽的增删改查功能。</p>
<h2>shortcutList 动态快捷键列表</h2>
<p>组件在 setup 方法内，通过 useDynamicShortcut 勾子注册的快捷键列表。</p>
<h2>onStateChange 组件状态变更事件</h2>
<p>可观察对象，可订阅组件的状态变更。</p>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">componentInstance.onStateChange.<span class="tb-hl-function">subscribe</span>(changes =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(changes)</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>updateState() 更新组件状态</h2>
<p>用于在外部更新组件的状态。</p>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">componentInstance.<span class="tb-hl-function">updateState</span>(draft =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;draft.size =&nbsp;<span class="tb-hl-string">'small'</span></div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>toJSON() 将组件转换为 JSON 对象</h2>
<p>将组件及其后代插槽及组件全部转换为一个 JSON 描述的对象。</p>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;json = componentInstance.<span class="tb-hl-function">toJSON</span>()</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>toString() 将组件转换为字符串</h2>
<p>将组件及其所有后代插槽及组件全部转换为字符串。需要注意的是，此方法只关注插槽的内容，即组件的模板不会参与转换。</p>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;text = componentInstance.<span class="tb-hl-function">toString</span>()</div></div><span class="tb-pre-lang">TypeScript</span></div></pre></div>
    )
  }
}