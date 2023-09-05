import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>Registry 注册表</h1>
<p>Registry 用于管理一个 Textbus 实例内已配置的组件、格式或属性。只有在 Textbus 配置项中配置的 Component、Formatter 或 Attribute 才会被 Registry 管理，并同时支持这些组件、格式和属性的历史记录，否则在历史回退或协作时，没有注册的组件将会引起报错，没有注册的格式或属性将会被忽略。</p>
<p>在有的场景中，可能我们不需要部分格式或属性参与协作，你可以利用些特征，在启动 Textbus 的配置项中，只配置那些需要协作的格式或属性。</p>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取 Registry 的实例。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 方法1</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;registry = editor.<span class="tb-hl-function">get</span>(Registry)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法2</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;registry = injector.<span class="tb-hl-function">get</span>(Registry)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法3</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;registry =&nbsp;<span class="tb-hl-function">useContext</span>(Registry)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>getComponent() 获取组件</h2>
<p>根据名字获取组件。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">getComponent</span>(name:&nbsp;<span class="tb-hl-builtin">string</span>): Component |&nbsp;<span class="tb-hl-keyword">null</span></div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;component = registry.<span class="tb-hl-function">get</span>(<span class="tb-hl-string">'ListComponent'</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">if</span>&nbsp;(component) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;instance = component.<span class="tb-hl-function">createInstance</span>(injector)</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(instance)</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>getFormatter() 获取格式实例</h2>
<p>根据名字获取格式。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-function">getFormatter</span>(name:&nbsp;<span class="tb-hl-builtin">string</span>): Formatter&lt;<span class="tb-hl-builtin">any</span>&gt; |&nbsp;<span class="tb-hl-keyword">null</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;boldFormatter = registry.<span class="tb-hl-function">get</span>(<span class="tb-hl-string">'boldFormatter'</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">if</span>&nbsp;(boldFormatter) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;commander.<span class="tb-hl-function">insert</span>(<span class="tb-hl-string">'textbus'</span>, boldFormatter,&nbsp;<span class="tb-hl-boolean">true</span>)</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>getAttribute() 获取属性实例</h2>
<p>根据名字获取属性。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">getAttribute</span>(name:&nbsp;<span class="tb-hl-builtin">string</span>): Attribute&lt;<span class="tb-hl-builtin">any</span>&gt; |&nbsp;<span class="tb-hl-keyword">null</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;alignAttribute = registry.<span class="tb-hl-function">get</span>(<span class="tb-hl-string">'alignAttribute'</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">if</span>&nbsp;(alignAttribute) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;slot.<span class="tb-hl-function">setAttribute</span>(alignAttribute,&nbsp;<span class="tb-hl-string">'right'</span>)</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>createComponentByData() 创建组件</h2>
<p>根据组件名和组件状态和插槽创建组件实例，如果没有在注册表内找到对应的名字，则返回 null。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-function">createComponentByData</span>(name:&nbsp;<span class="tb-hl-builtin">string</span>, data: ComponentInitData): ComponentInstance |&nbsp;<span class="tb-hl-keyword">null</span></div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;instance = registry.<span class="tb-hl-function">createComponentByData</span>(<span class="tb-hl-string">'ListComponent'</span>, {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;state:&nbsp;<span class="tb-hl-string">'ul'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;slots: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.Text,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ContentType.InlineComponent</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;])</div><div class="tb-code-line">&nbsp;&nbsp;]</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">if</span>&nbsp;(instance) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;commander.<span class="tb-hl-function">insert</span>(instance)</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>createSlot() 创建插槽</h2>
<p>根据插槽 JSON 数据创建插槽实例。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">createSlot</span>(slotLiteral: SlotLiteral&lt;<span class="tb-hl-builtin">any</span>,&nbsp;<span class="tb-hl-builtin">any</span>&gt;, customComponentCreator?: (componentLiteral: ComponentLiteral, index:&nbsp;<span class="tb-hl-builtin">number</span>) =&gt; ComponentInstance): Slot;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;slot = registry.<span class="tb-hl-function">createSlot</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;schema: [ContentType.Text],</div><div class="tb-code-line">&nbsp;&nbsp;content: [<span class="tb-hl-string">'Textbus'</span>],</div><div class="tb-code-line">&nbsp;&nbsp;attributes: {'{'}{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;formats: {'{'}{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;state:&nbsp;<span class="tb-hl-keyword">null</span></div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>createComponent() 创建组件</h2>
<p>根据组件 JSON 数据创建组件实例。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">createComponent</span>(componentLiteral: ComponentLiteral, customSlotCreator?: (slotLiteral: SlotLiteral&lt;<span class="tb-hl-builtin">any</span>,&nbsp;<span class="tb-hl-builtin">any</span>&gt;, index:&nbsp;<span class="tb-hl-builtin">number</span>) =&gt; Slot): ComponentInstance |&nbsp;<span class="tb-hl-keyword">null</span>;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;instance = registry.<span class="tb-hl-function">createComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'ListComponent'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;slots: [{'{'}...{'}'}],</div><div class="tb-code-line">&nbsp;&nbsp;state:&nbsp;<span class="tb-hl-string">'ul'</span></div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><span class="tb-hl-keyword">if</span>&nbsp;(instance) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;commander.<span class="tb-hl-function">insert</span>(instance)</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>createComponentByFactory() 创建组件</h2>
<p>根据指定数据和组件创建实例。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">createComponentByFactory</span>(componentLiteral: ComponentLiteral, factory: Component, customSlotCreator?: (slotLiteral: SlotLiteral&lt;<span class="tb-hl-builtin">any</span>,&nbsp;<span class="tb-hl-builtin">any</span>&gt;, index:&nbsp;<span class="tb-hl-builtin">number</span>) =&gt; Slot): ComponentInstance</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;instance = registry.<span class="tb-hl-function">createComponentByFactory</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'ListComponent'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;slots: [{'{'}...{'}'}],</div><div class="tb-code-line">&nbsp;&nbsp;state:&nbsp;<span class="tb-hl-string">'ul'</span></div><div class="tb-code-line">{'}'}, listComonent)</div><div class="tb-code-line"><br/></div><div class="tb-code-line">commander.<span class="tb-hl-function">insert</span>(instance)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>fillSlot() 填充插槽</h2>
<p>根据源插槽数据，填充到目标插槽。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">fillSlot</span>&lt;T&nbsp;<span class="tb-hl-keyword">extends</span>&nbsp;SlotLiteral&lt;<span class="tb-hl-builtin">any</span>,&nbsp;<span class="tb-hl-builtin">any</span>&gt;, U&nbsp;<span class="tb-hl-keyword">extends</span>&nbsp;Slot&gt;(source: T, target: U): U;</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>示例：</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;slot = registry.<span class="tb-hl-function">fillSlot</span>(oldSlot,&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([ContentType.Text]))</div></div><span class="tb-pre-lang">TypeScript</span></div></pre></div>
    )
  }
}