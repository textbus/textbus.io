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
      <p class="xnote-h1">HTML 解析器</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>Parser 用于将 HTML 字符串，转换为 Textbus 的组件、插槽或格式等。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取&nbsp;</span></p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="background-color:rgb(255, 255, 255)">Parser</span></p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p><span style="color:rgb(73, 80, 96)">&nbsp;的实例。</span></p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法1</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;parser = textbus.<span class="hljs-title function_">get</span>(<span class="hljs-title class_">Parser</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 方法2</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">class</span>&nbsp;<span class="hljs-title class_">YourComponent</span>&nbsp;<span class="hljs-keyword">extends</span>&nbsp;<span class="hljs-title class_ inherited__">Component</span>({'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {'{'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;parser =&nbsp;<span class="hljs-title function_">useContext</span>(<span class="hljs-title class_">Parser</span>)</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">parseDoc() html 转组件或插槽</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>使用指定组件的 loader 解析一段 HTML。返回一个组件实例或插槽实例。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>示例：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;result = parser.<span class="hljs-title function_">parseDoc</span>(htmlString, yourComponentLoader)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">parse() html 转插槽</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>将 HTML 转换为 Textbus 的数据并保存到指定的插槽内。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>示例：</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;slot = parser.<span class="hljs-title function_">parse</span>(htmlString,&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">Slot</span>([</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">text</span>,</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">InlineComponent</span>,</span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title class_">ContentType</span>.<span class="hljs-property">BlockComponent</span></span></pre><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content">]))</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p class="xnote-h2">parseHTML() HTML 转 DOM</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>静态方法。</p>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <p>用于将 HTML 解析为 DOM 对象。</p>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark-blue" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark-blue">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div>
        <div style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><pre class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;<span class="hljs-variable language_">document</span>&nbsp;=&nbsp;<span class="hljs-title class_">Parser</span>.<span class="hljs-title function_">parseHTML</span>(htmlString)</span></pre>
        </div><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
  </div>
</div></div>
    )
  }
}
