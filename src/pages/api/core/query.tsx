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
      <p class="xnote-h1">Query 状态查询</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>Query 用于根据格式、属性或组件在编辑器选区内查询状态。调用 Query 实例的不同方法，都会返回如下数据 QueryState 类型。只有查询结果的 state 值为 QueryStateType.Enabled 时，value 才会有对应查询结果的值，否则，value 为 null。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>你可以根据查询结果，处理相应逻辑。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* Textbus 状态查询状态枚举</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">declare</span>&nbsp;<span class="hljs-keyword">enum</span>&nbsp;<span class="hljs-title class_">QueryStateType</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 正常 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title class_">Normal</span>&nbsp;=&nbsp;<span class="hljs-string">"Normal"</span>,</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 当前不可用 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title class_">Disabled</span>&nbsp;=&nbsp;<span class="hljs-string">"Disabled"</span>,</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">/** 当前状态为生效 */</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title class_">Enabled</span>&nbsp;=&nbsp;<span class="hljs-string">"Enabled"</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/**</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;* Textbus 状态查询结果，当状态为禁用时，`value` 为 null</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">&nbsp;*/</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">export</span>&nbsp;<span class="hljs-keyword">interface</span>&nbsp;<span class="hljs-title class_">QueryState</span>&lt;V, S =&nbsp;<span class="hljs-title class_">QueryStateType</span>, K = S&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">QueryStateType</span>.<span class="hljs-title class_">Enabled</span>&nbsp;? V : null&gt; {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">state</span>: S;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">value</span>: K;</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取 Query 的实例。</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法1</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;query = textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">Query</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法2</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;query =&nbsp;<span class="hljs-title function_">useContext</span>(<span class="hljs-title class_">Query</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">queryFormat() 查询格式</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>用于查询格式在选区内的状态。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">queryFormat&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">FormatValue</span>&gt;(<span class="hljs-attr">formatter</span>:&nbsp;<span class="hljs-title class_">Formatter</span>&lt;T&gt;):&nbsp;<span class="hljs-title class_">QueryState</span>&lt;T&gt;;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>示例：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;result = query.<span class="hljs-title function_">queryFormat</span>(fontSizeFormatter)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">if</span>&nbsp;(result.<span class="hljs-property">state</span>&nbsp;===&nbsp;<span class="hljs-title class_">QueryStateType</span>.<span class="hljs-property">Enabled</span>) {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">value</span>)&nbsp;<span class="hljs-comment">// 14px</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}&nbsp;<span class="hljs-keyword">else</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">value</span>)&nbsp;<span class="hljs-comment">// null</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">queryAttribute() 查询属性</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>用于查询属性在选区选中插槽中的状态。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">queryAttribute&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">FormatValue</span>&gt;(<span class="hljs-attr">attribute</span>:&nbsp;<span class="hljs-title class_">Attribute</span>&lt;T&gt;):&nbsp;<span class="hljs-title class_">QueryState</span>&lt;T&gt;;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">示例：</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;result = query.<span class="hljs-title function_">queryAttribute</span>(alignAttribute)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">if</span>&nbsp;(result.<span class="hljs-property">state</span>&nbsp;===&nbsp;<span class="hljs-title class_">QueryStateType</span>.<span class="hljs-property">Enabled</span>) {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">value</span>)&nbsp;<span class="hljs-comment">// right</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}&nbsp;<span class="hljs-keyword">else</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">value</span>)&nbsp;<span class="hljs-comment">// null</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">queryComponent() 查询组件</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>用于查询选区内是否是传入组件的实例。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">queryComponent&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">State</span>, U&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">ComponentConstructor</span>&lt;T&gt;&gt;(<span class="hljs-attr">component</span>: U, filter?:&nbsp;<span class="hljs-function">(<span class="hljs-params">instance: Component&lt;T&gt;</span>) =&gt;</span>&nbsp;<span class="hljs-built_in">boolean</span>):&nbsp;<span class="hljs-title class_">QueryState</span>&lt;<span class="hljs-title class_">Component</span>&lt;T&gt;&gt;;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">示例：</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;result = query.<span class="hljs-title function_">queryComponent</span>(<span class="hljs-title class_">ListComponent</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">if</span>&nbsp;(result.<span class="hljs-property">state</span>&nbsp;===&nbsp;<span class="hljs-title class_">QueryStateType</span>.<span class="hljs-property">Enabled</span>) {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">value</span>.<span class="hljs-property">name</span>)&nbsp;<span class="hljs-comment">// ListComponent</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}&nbsp;<span class="hljs-keyword">else</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">value</span>)&nbsp;<span class="hljs-comment">// null</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">queryWrappedComponent() 查询上层组件</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>查询当前选区是否包含在指定组件内。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 类型签名：</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">queryWrappedComponent&lt;T&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_">State</span>&gt;(<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">ComponentConstructor</span>&lt;T&gt;):&nbsp;<span class="hljs-title class_">QueryState</span>&lt;<span class="hljs-title class_">Component</span>&lt;T&gt;&gt;;</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">示例：</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;result = query.<span class="hljs-title function_">queryWrappedComponent</span>(<span class="hljs-title class_">BlockquoteComponent</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">if</span>&nbsp;(result.<span class="hljs-property">state</span>&nbsp;===&nbsp;<span class="hljs-title class_">QueryStateType</span>.<span class="hljs-property">Enabled</span>) {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">value</span>.<span class="hljs-property">name</span>)&nbsp;<span class="hljs-comment">// BlockquoteComponent</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}&nbsp;<span class="hljs-keyword">else</span>&nbsp;{'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">value</span>)&nbsp;<span class="hljs-comment">// null</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><br/></p>
    </div>
  </div>
</div></div>
    )
  }
}
