<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>属性和方法</h1>
<p>通过 createEditor 创建的编辑器时，会返回 Editor 的实例。我们可以访问实例上的属性和方法，对接我们自己的需求。</p>
<h2>准备事件 onReady</h2>
<p>编辑器准备可观察对象，你可以订阅此对象用来监听编辑器是否初始化完成。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;editor =&nbsp;<span class="tb-hl-function">createEditor</span>(<span class="tb-hl-string">'#editor'</span>)</div><div class="tb-code-line"><br></div><div class="tb-code-line">editor.onReady.<span class="tb-hl-function">subscribe</span>(() =&gt; {</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(<span class="tb-hl-string">'Textbus is ready!'</span>)</div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>布局对象 layout</h2>
<p>编辑器布局所用的 DOM 对象集合。</p>
<h2>监听文档变化 onChange</h2>
<p>编辑器内容是否变化可观察对象。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.onChange.<span class="tb-hl-function">subscribe</span>(() =&gt; {</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(<span class="tb-hl-string">'editor content is changed!'</span>)</div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>焦点事件 onFocus</h2>
<p>当编辑器获得焦点时的可观察对象。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.onFocus.<span class="tb-hl-function">subscribe</span>(() =&gt; {</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">//</span></div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>失去焦点事件 onBlur</h2>
<p>当编辑器失去焦点时的可观察对象。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.onBlur.<span class="tb-hl-function">subscribe</span>(() =&gt; {</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">//</span></div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>保存事件 onSave</h2>
<p>当用户按 ctrl + s &nbsp;的可观察对象。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.onSave.<span class="tb-hl-function">subscribe</span>(() =&gt; {</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 用户触发了保存</span></div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>注入器 injector</h2>
<p>访问编辑内部实例的 IoC 容器。</p>
<div>关于 IoC 容器和依赖注入的相关文档，请参考我的开源库&nbsp;<a target="_blank" href="https://github.com/tbhuabi/di">di</a>。</div>
<p>通过 injector，你可以获取到 Textbus 内部所有的类的实例，如果在配置项的 providers 数组中配置了你自己的类，你也一样可以从 injector 内获取到对应的实例。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.onReady.<span class="tb-hl-function">subscribe</span>(() =&gt; {</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;injector = editor.injector</div><div class="tb-code-line"><br></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// 获取 Textbus Commander 实例</span></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;commander = injector.<span class="tb-hl-function">get</span>(Commander)</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(commander)</div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>是否销毁 destroyed</h2>
<p>编辑器是否已销毁。</p>
<h2>是否已准备完成 isReady</h2>
<p>编辑器是否已准备好。</p>
<h2>只读 readonly</h2>
<p>是否是只读，可读写。</p>
<h2>配置项 options</h2>
<p>初始化编辑器时的配置项。</p>
<h2>挂载到 DOM 对象 mount()</h2>
<p>把编辑器挂载到指定 DOM 元素，并返回一个 Promise，当编辑器准备完成时，触发回调。</p>
<p>参数：</p>
<ol>
  <li class="tb-list-item">host: 放置编辑器的 DOM 节点；</li>
</ol><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.<span class="tb-hl-function">mount</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'editor'</span>)).<span class="tb-hl-function">then</span>(() =&gt; {</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(<span class="tb-hl-string">'编辑器准备完成'</span>)</div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>获取焦点 focus()</h2>
<p>编辑器获取焦点。</p>
<h2>失去焦点 blur()</h2>
<p>取消编辑器焦点。</p>
<h2>获取 HTML 内容 getHTML()</h2>
<p>获取以 HTML 主要结果的编辑器内容。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;html = editor.<span class="tb-hl-function">getHTML</span>()</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>获取 JSON 格式文档 getJSON()</h2>
<p>获取以 JSON 为主要结果的编辑器内容。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;json = editor.<span class="tb-hl-function">getJSON</span>()</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>获取样式表及脚本 getResources()</h2>
<p>获取组件配置的样式表，脚本等外部资源。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;resources = editor.<span class="tb-hl-function">getResources</span>()</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<ul>
  <li class="tb-list-item">content：JSON 表示的 Textbus 组件树；</li>
  <li class="tb-list-item">styleSheets：创建编辑器时，配置项中的 styleSheets 的值；</li>
  <li class="tb-list-item">styleSheet: 文档当前的样式表；<br></li>
</ul>
<ul>
  <li class="tb-list-item">links: 文档依赖外部资源配置。</li>
</ul>
<h2>替换文档内容 replaceContent()</h2>
<p>替换编辑器内容。新内容为一个 HTML 字符串或 Textbus 指定的 JSON 内容。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;newContent =&nbsp;<span class="tb-hl-string">'&lt;p&gt;这里新内容！&lt;/p&gt;'</span></div><div class="tb-code-line"><br></div><div class="tb-code-line">editor.<span class="tb-hl-function">replaceContent</span>(newContent)</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>销毁编辑器 destroy()</h2>
<p>销毁编辑器实例。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">editor.<span class="tb-hl-function">destroy</span>()</div></div><span class="tb-pre-lang">TypeScript</span></pre>
  </div>
</template>