import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>配置项</h1>
<p>在我们创建 Textbus 实例时，我们可以根据我们的扩展，添加配置项。Textbus 配置项如下：</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;* Textbus 模块配置</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;*/</span></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">Module</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 组件列表 */</span></div><div class="tb-code-line">&nbsp;&nbsp;components?: Component[]</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 格式列表 */</span></div><div class="tb-code-line">&nbsp;&nbsp;formatters?: (Formatter&lt;<span class="tb-hl-builtin">any</span>&gt; | ((injector: Injector) =&gt; Formatter&lt;<span class="tb-hl-builtin">any</span>&gt;))[]</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 属性列表 */</span></div><div class="tb-code-line">&nbsp;&nbsp;attributes?: (Attribute&lt;<span class="tb-hl-builtin">any</span>&gt; | ((injector: Injector) =&gt; Attribute&lt;<span class="tb-hl-builtin">any</span>&gt;))[]</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 跨平台及基础扩展实现的提供者 */</span></div><div class="tb-code-line">&nbsp;&nbsp;providers?: Provider[]</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 插件集合 */</span></div><div class="tb-code-line">&nbsp;&nbsp;plugins?:&nbsp;<span class="tb-hl-builtin">Array</span>&lt;Plugin | (() =&gt; Plugin)&gt;</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当模块注册时调用</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;beforeEach?(textbus: Textbus):&nbsp;<span class="tb-hl-keyword">void</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 初始化时的设置，返回一个函数，当 Textbus 销毁时调用</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* @param textbus</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;setup?(textbus: Textbus):&nbsp;<span class="tb-hl-builtin">Promise</span>&lt;(() =&gt;&nbsp;<span class="tb-hl-keyword">void</span>) |&nbsp;<span class="tb-hl-keyword">void</span>&gt; | (() =&gt;&nbsp;<span class="tb-hl-keyword">void</span>) |&nbsp;<span class="tb-hl-keyword">void</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当启动完成时触发</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;onAfterStartup?(textbus: Textbus):&nbsp;<span class="tb-hl-keyword">void</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 当 Textbus 销毁时触发</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></div><div class="tb-code-line">&nbsp;&nbsp;onDestroy?():&nbsp;<span class="tb-hl-keyword">void</span></div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">/**</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;* Textbus 核心配置</span></div><div class="tb-code-line"><span class="tb-hl-comment">&nbsp;*/</span></div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">TextbusConfig</span>&nbsp;<span class="tb-hl-keyword">extends</span>&nbsp;<span class="tb-hl-class-name">Module</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 导入第三方包 */</span></div><div class="tb-code-line">&nbsp;&nbsp;imports?: Module[]</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 开启 Zen Coding 支持 */</span></div><div class="tb-code-line">&nbsp;&nbsp;zenCoding?:&nbsp;<span class="tb-hl-builtin">boolean</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 最大历史记录栈 */</span></div><div class="tb-code-line">&nbsp;&nbsp;historyStackSize?:&nbsp;<span class="tb-hl-builtin">number</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">/** 是否只读 */</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">readonly</span>?:&nbsp;<span class="tb-hl-builtin">boolean</span></div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>通过 createEditor 创建的编辑器时，会返回 Editor 的实例。我们可以访问实例上的属性和方法，对接我们自己的需求。</p>
<p>事实上我们前面创建的编辑器还应该把我们创建的组件和格式都添加到配置项。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-comment">// 创建 Textbus 实例</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;textbus =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Textbus</span>({'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;components: [</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;rootComponent,</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;paragraphComponent,</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;listComponent</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;],</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;formatters: [</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;boldFormatter,</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;colorFormatter,</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;],</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;attributes: [</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;textAlignAttribute</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;],</div><div class="tb-code-line">&nbsp;&nbsp;imports: [</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;browserModule&nbsp;<span class="tb-hl-comment">// 添加浏览器支持模块</span></div><div class="tb-code-line">&nbsp;&nbsp;]</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2 style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">焦点事件 onFocus</span></h2>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">当编辑器获得焦点时的可观察对象。</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.onFocus.<span class="tb-hl-function">subscribe</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">//</span></div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2 style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">失去焦点事件 onBlur</span></h2>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">当编辑器失去焦点时的可观察对象。</span></p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.onBlur.<span class="tb-hl-function">subscribe</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">//</span></div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>监听文档变化 onChange</h2>
<p>编辑器内容是否变化可观察对象。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">textbus.onChange.<span class="tb-hl-function">subscribe</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(<span class="tb-hl-string">'editor content is changed!'</span>)</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>保存事件 onSave</h2>
<p>当用户按 ctrl + s &nbsp;的可观察对象。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.onSave.<span class="tb-hl-function">subscribe</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 用户触发了保存</span></div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>是否销毁 destroyed</h2>
<p>编辑器是否已销毁。</p>
<h2>是否已准备完成 isReady</h2>
<p>编辑器是否已准备好。</p>
<h2>是否获取焦点 isFocus</h2>
<p>编辑器是否已经获取焦点。</p>
<h2>只读 readonly</h2>
<p>是否是只读，可读写。</p>
<h2>配置项 config</h2>
<p>初始化编辑器时的配置项。</p>
<h2>渲染组件 render()</h2>
<p>使用 Textbus 渲染一个组件。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">textbus.<span class="tb-hl-function">render</span>(component)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>获取焦点 focus()</h2>
<p>编辑器获取焦点。</p>
<h2>失去焦点 blur()</h2>
<p>取消编辑器焦点。</p>
<h2>获取 JSON 格式文档 getJSON()</h2>
<p>获取 JSON 格式的编辑器内容。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;json = textbus.<span class="tb-hl-function">getJSON</span>()</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>销毁编辑器 destroy()</h2>
<p>销毁编辑器实例。</p><pre lang="TypeScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">textbus.<span class="tb-hl-function">destroy</span>()</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p><br/></p></div>
    )
  }
}