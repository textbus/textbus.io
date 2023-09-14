import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>3.0 -&gt; 4.0 升级指南</h1>
<h2>组件调整</h2>
<h3>可选的 setup()</h3>
<p>在 Textbus 4.0 中，组件和 setup 是可以选的。Textbus 会把组件创建时传入的组件和状态作为组件的插槽的状态。定义一个组件最少代码可以像下面这样：</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;component =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'ComponentName'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;type: ContentType.BlockComponent</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>新增可选的 validate()</h3>
<p>组件配置项增加 validate 函数，用于校验组件初始化时的插槽的状态数据。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;component =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'ComponentName'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;type: ContentType.BlockComponent,</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">validate</span>(initData) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 验证数据正确性并返回</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots: [...],</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: {'{'}...{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>渲染</h3>
<p>Textbus 4.0 舍弃了自实现的渲染，全面拥抱前端框架。现在，在 Textbus 组件的 setup 函数内，不再需要返回一具带 render 方法的对象了。甚至可以不返回。组件的渲染请参考文档，并根据自已所用框架，更改渲染方式。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;component =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'ComponentName'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;type: ContentType.BlockComponent,</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">onBreak</span>(ev = &gt; {'{'}...{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">onDestroy</span>(() =&gt; {'{'}...{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>被舍弃的 hook</h3>
<p>由于 Textbus 不再自实现渲染，并且插槽和状态的验证也放在了 validate 函数来完成，Textbus 4.0 删除了以下 hook：useState、useSlots、useRef、onViewInit、onViewChecked、onDirtyViewClean。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;component =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'ComponentName'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;type: ContentType.BlockComponent,</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function"><del>useState</del></span><del>({'{'}...{'}'})</del></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function"><del>useSlots</del></span><del>([...])</del></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function"><del>useRef</del></span><del>()</del></div><div class="tb-code-line"><del><br/></del></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function"><del>onViewInit</del></span><del>(ev =&gt; {'{'}...{'}'})</del></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function"><del>onViewChecked</del></span><del>(() =&gt; {'{'}...{'}'})</del></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function"><del>onDirtyViewClean</del></span><del>(ev =&gt; {'{'}...{'}'})</del></div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>启动流程调整</h2>
<h3>Starter</h3>
<p>删除了 Starter 类，改为了 Textbus 类，并且不再像 3.0 那样一层层继承实现一个编辑器，4.0 的 Textbus 类是一个容器，可以装饰任意模块，由 Textbus 统一注册和调度。</p>
<h3>Viewer</h3>
<p>删除了 Viewer 类，改为 BrowserModule 类，且把各个模块自已需要的参数，由模块本身的参数实现。而不是一个统一的大配置。</p>
<h2>基础调整</h2>
<ol>
  <li class="tb-list-item">删除了 getHTML() 方法，由于渲染外置，getHTML 可以由外部框架来完成，如 react 的 renderToString()。</li>
  <li class="tb-list-item">不再支持组件或配置项的资源，如样式表。脚本等。</li>
  <li class="tb-list-item">渲染模式不再内置，而是改为一个可选的参数，由开发根据需要自己传入。</li>
</ol>
<p><br/></p>
<p><br/></p>
<p><br/></p>
<p><br/></p>
<h1>2.0 -&gt; 3.0 升级指南</h1>
<h2>组件</h2>
<h3>渲染</h3>
<p>在 Textbus 2.* 中，render 函数的渲染模式只有两种，isOutputMode 为 true 时，表格为输出模式，否则为编辑模式。而 slotRender 的回调函数也只能返回一个空的 VElement 元素节点。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-comment">// v2 版本</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;...</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">render</span>(isOutputMode:&nbsp;<span class="tb-hl-builtin">boolean</span>, slotRender: SlotRender) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots.<span class="tb-hl-function">toArray</span>().<span class="tb-hl-function">map</span>(slot, () =&gt; {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">slotRender</span>(slot, () =&gt; {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;&lt;div/&gt;</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>在 Textbus 3.* 中，调整了 render 函数的参数顺序。渲染模式也变更为三种，分别为输出、只读、编辑。而 slotRender 除了把子节点传入外，回调函数返回的虚拟 DOM 也可以为任意结构了。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">enum</span>&nbsp;RenderMode {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;Output =&nbsp;<span class="tb-hl-string">"Output"</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;Readonly =&nbsp;<span class="tb-hl-string">"Readonly"</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;Editing =&nbsp;<span class="tb-hl-string">"Editing"</span></div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-comment">// v3 版本</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;...</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">render</span>(slotRender: SlotRender, renderMode: RenderMode) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slots.<span class="tb-hl-function">toArray</span>().<span class="tb-hl-function">map</span>(slot, () =&gt; {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">slotRender</span>(slot, children =&gt; {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 这里可以为任意复杂结构，不要忘了 children 一定要添加在某个节点中</span></div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;&lt;div&gt;{'{'}children{'}'}&lt;/div&gt;</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>组件加载器</h3>
<p>在 Textbus 2.* 中，组件加载器识别插槽内容由 slotParser 的第二个参数指定插槽的根节点。</p>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">由于 3.* 版本中，插槽也可以有复杂结构。所以，还需要指定插槽的内容根节点，即在 slotRender 回调函数内 children 所在的父节点。如果插槽根节点和 children 的父节点相同，则可省略第三个参数。</span></p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// v3</span></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">SlotParser</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;T&nbsp;<span class="tb-hl-keyword">extends</span>&nbsp;<span class="tb-hl-class-name">Slot</span>&gt;(childSlot: T, slotRootElement: HTMLElement, slotContentHostElement?: HTMLElement): T;</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-comment">// v3</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponentLoader = {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">match</span>() {'{'}...{'}'},</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">read</span>(element: HTMLElement, context: Injector, slotParser: SlotParser) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slots =&nbsp;<span class="tb-hl-builtin">Array</span>.<span class="tb-hl-function">from</span>(element.children).<span class="tb-hl-function">map</span>(child =&gt; {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slotRootElement = child&nbsp;<span class="tb-hl-keyword">as</span>&nbsp;HTMLElement</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;slotContentRootElement = child.children[<span class="tb-hl-number">0</span>]</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">slotParser</span>(<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([....]), slotRootElement, slotContentRootElement)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>动态 DOM 元素</h3>
<p>在 Textbus 2.* 中，我们可以任意创建 DOM 元素，并插入到文档中，Textbus 的渲染器在 diff 过程中，会忽略这些动态插入的 DOM 节点。</p>
<p>在 3.* 中，这些“意外”插入的 DOM 节点，会被认为是脏的，并从文档中删除。要在文档保留这些 DOM 元素，你需要在组件的 onDirtyViewClean 勾子中告知 Textbus，保留这些节点。</p><pre lang="TypeScript" theme="dark" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-comment">// v3 版本</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;...</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;domRef =&nbsp;<span class="tb-hl-function">useRef</span>()</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">let</span>&nbsp;customElement: HTMLElement |&nbsp;<span class="tb-hl-keyword">null</span>&nbsp;=&nbsp;<span class="tb-hl-keyword">null</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">onViewInit</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;customElement = document.<span class="tb-hl-function">createElement</span>(<span class="tb-hl-string">'div'</span>)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;domRef.current.<span class="tb-hl-function">append</span>(customElement)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">onDirtyViewClean</span>(ev =&gt; {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">if</span>&nbsp;(ev.data === customElement) {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ev.<span class="tb-hl-function">preventDefault</span>()</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-function">render</span>(slotRender: SlotRender, renderMode: RenderMode) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ref={'{'}domRef{'}'}&gt;组件内容</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>格式</h2>
<p>在 Textbus 3.* 中，我们对格式做了较大调整。</p>
<p>在 2.* 中，我们可以通过配置 Formatter 的 type 属性，标识一个格式是块级还是行内。在 3.* 中，块级格式，块级格式改为用属性（Attribute）实现。并删除了原 2.* 中格式中的 type 属性和渲染优先级配置。具体可参考文档中<a target="_self" href="https://textbus.io/docs/slot">插槽与格式</a>一节。</p>
<h2>注册表及转换器</h2>
<p>在 2.* core 模块中，Textbus 使用注册表（Registry）和转换器（Translator）来分别管理，组件及格式的注册和创建。在 3.* 中，转换器的功能合并到了注册表。</p>
<h2>包更改</h2>
<p>2.* 的 @textbus/browser 包更改为 @textbus/platform-browser。为了更好的跨平台能力，把 @textbus/collaborate 内的协作光标绘制能力也迁移到了 platform-browser 包内。</p></div>
    )
  }
}