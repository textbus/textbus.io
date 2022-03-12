<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>在框架中使用</h1>
    <p>Textbus 不依赖前端的某个框架，意味着 Textbus 可以很轻松的在任意框架或项目中使用。如 Angular、Vue、React，或者是 jQuery 这样的传统项目。</p>
    <div>注意：如果你的项目在使用 Typescript（如 Angular 的项目），在与 Textbus 集成的过程中，可能会遇到 rxjs 的 Subject
      类无法继承的问题（见控制台报错信息），这时需要更改你项目中的 tsconfig.json。
    </div>
    <pre lang="JSON" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code>{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-attr-name">"compilerOptions"</span>: {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-attr-name">"module"</span>:&nbsp;<span class="tb-hl-string">"esnext"</span>,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-attr-name">"lib"</span>: [<span
        class="tb-hl-string">"esnext"</span>,&nbsp;<span class="tb-hl-string">"dom"</span>]</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">JSON</div></pre>
    <h2>在 Angular 中使用</h2>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ Component, ViewChild, ElementRef, OnInit }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@angular/core'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ createEditor }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus/bundles/textbus.min.css'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>@<span class="tb-hl-function">Component</span>({</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;template: `</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div #editorContainer&gt;&lt;/div&gt;`</code></div><div
        class="tb-code-line"><code>})</code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">class</span>&nbsp;<span
        class="tb-hl-class-name">EditorComponent</span>&nbsp;<span class="tb-hl-keyword">implements</span>&nbsp;<span
        class="tb-hl-class-name">OnInit</span>&nbsp;{</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;@<span
        class="tb-hl-function">ViewChild</span>(<span class="tb-hl-string">'editorContainer'</span>, {read: ElementRef,&nbsp;<span
        class="tb-hl-keyword">static</span>:&nbsp;<span class="tb-hl-boolean">true</span>})</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;editorContainer: ElementRef;</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">ngOnInit</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;editor =&nbsp;<span class="tb-hl-function">createEditor</span>(<span
        class="tb-hl-keyword">this</span>.editorContainer.nativeElement);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;editor.onChange.<span
        class="tb-hl-function">subscribe</span>(() =&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(editor.<span
        class="tb-hl-function">getContents</span>());</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;});</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <h2>在 Vue 中使用</h2>
    <h3>2.*</h3>
    <pre lang="HTML" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code>&lt;<span class="tb-hl-tag">template</span>&gt;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span
        class="tb-hl-attr-name">ref</span>="<span class="tb-hl-attr-value">editorContainer</span>"&gt;&lt;/<span
        class="tb-hl-tag">div</span>&gt;</code></div><div class="tb-code-line"><code>&lt;/<span class="tb-hl-tag">template</span>&gt;</code></div><div
        class="tb-code-line"><code>&lt;<span class="tb-hl-tag">script</span>&gt;</code></div><div
        class="tb-code-line"><code>import { createEditor } from '@textbus/textbus';</code></div><div
        class="tb-code-line"><code>import '@textbus/textbus/bundles/textbus.min.css';</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>export default {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;mounted() {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;const editor = createEditor(this.$refs.editorContainer);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;editor.onChange.subscribe(() =&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(editor.getContents());</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;});</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div><div
        class="tb-code-line"><code>&lt;/<span class="tb-hl-tag">script</span>&gt;</code></div></div><div
        class="tb-pre-lang">HTML</div></pre>
    <h3>3.*</h3>
    <pre lang="HTML" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code>&lt;<span class="tb-hl-tag">template</span>&gt;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span
        class="tb-hl-attr-name">ref</span>="<span class="tb-hl-attr-value">editorContainer</span>"&gt;&lt;/<span
        class="tb-hl-tag">div</span>&gt;</code></div><div class="tb-code-line"><code>&lt;/<span class="tb-hl-tag">template</span>&gt;</code></div><div
        class="tb-code-line"><code>&lt;<span class="tb-hl-tag">script</span>&gt;</code></div><div
        class="tb-code-line"><code>import { defineComponent, ref, onMounted } from 'vue'</code></div><div
        class="tb-code-line"><code>import { createEditor } from '@textbus/textbus';</code></div><div
        class="tb-code-line"><code>import '@textbus/textbus/bundles/textbus.min.css';</code></div><div
        class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>export default defineComponent({</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;setup() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;const editorContainer = ref();</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;onMounted(() =&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const editor = createEditor(editorContainer.value);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editor.onChange.subscribe(() =&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(editor.getContents());</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div
        class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;return {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editorContainer</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>})</code></div><div
        class="tb-code-line"><code>&lt;/<span class="tb-hl-tag">script</span>&gt;</code></div></div><div
        class="tb-pre-lang">HTML</div></pre>
    <h2>在 React 中使用</h2>
    <h3>传统版本</h3>
    <pre lang="Javascript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;React&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'react'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ createEditor }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus/bundles/textbus.min.css'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">class</span>&nbsp;<span
        class="tb-hl-class-name">EditorComponent</span>&nbsp;<span class="tb-hl-keyword">extends</span>&nbsp;<span
        class="tb-hl-class-name">React</span>.<span class="tb-hl-class-name">Component</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">componentDidMount</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;editor =&nbsp;<span class="tb-hl-function">createEditor</span>(<span
        class="tb-hl-keyword">this</span>.refs.editorContainer);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;editor.onChange.<span
        class="tb-hl-function">subscribe</span>(() =&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<span
        class="tb-hl-function">log</span>(editor.<span class="tb-hl-function">getContents</span>());</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;});</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">render</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">return</span>&nbsp;(&lt;div ref=<span class="tb-hl-string">"editorContainer"</span>/&gt;);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Javascript</div></pre>
    <h3>Hooks 版本</h3>
    <pre lang="Javascript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ useRef, useEffect }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'react'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ createEditor }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus/bundles/textbus.min.css'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span
        class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">function</span>&nbsp;<span
        class="tb-hl-function">EditorDemo</span>() {</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;editorContainer =&nbsp;<span
        class="tb-hl-function">useRef</span>()</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">useEffect</span>(() =&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;editor =&nbsp;<span class="tb-hl-function">createEditor</span>(editorContainer.current);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;editor.onChange.<span class="tb-hl-function">subscribe</span>(() =&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<span class="tb-hl-function">log</span>(editor.<span
        class="tb-hl-function">getContents</span>());</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;});</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;})</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ref={editorContainer}&gt;&lt;/div&gt;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;)</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Javascript</div></pre>
    <p><br></p>
  </div>
</template>
