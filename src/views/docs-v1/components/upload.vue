<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>上传图片</h1>
    <p>Textbus 并未实现任何上传功能，只在配置项提供了一个接口，由使用者自定义上传方式。如上传图片：</p>
    <h2>Typescript 版本</h2>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ createEditor }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ Observable }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'rxjs'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span class="tb-hl-function">createEditor</span>(<span
        class="tb-hl-string">'#editor'</span>, {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">uploader</span>(<span class="tb-hl-keyword">type</span>:&nbsp;<span
        class="tb-hl-builtin">string</span>, prevValue?:&nbsp;<span class="tb-hl-builtin">string</span>):&nbsp;<span
        class="tb-hl-builtin">string</span>&nbsp;|&nbsp;<span class="tb-hl-builtin">Promise</span>&lt;<span
        class="tb-hl-builtin">string</span>&gt; | Observable&lt;<span
        class="tb-hl-builtin">string</span>&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">switch</span>&nbsp;(<span
        class="tb-hl-keyword">type</span>) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">case</span>&nbsp;<span class="tb-hl-string">'image'</span>:</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;fileInput = document.<span
        class="tb-hl-function">createElement</span>(<span class="tb-hl-string">'input'</span>);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.<span
        class="tb-hl-function">setAttribute</span>(<span class="tb-hl-string">'type'</span>,&nbsp;<span
        class="tb-hl-string">'file'</span>);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.<span
        class="tb-hl-function">setAttribute</span>(<span class="tb-hl-string">'accept'</span>,&nbsp;<span
        class="tb-hl-string">'image/png, image/gif, image/jpeg, image/bmp, image/x-icon'</span>);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.style.cssText =&nbsp;<span
        class="tb-hl-string">'position: absolute; left: -9999px; top: -9999px; opacity: 0'</span>;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;promise = &nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-builtin">Promise</span>&lt;<span
        class="tb-hl-builtin">string</span>&gt;(resolve =&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.<span
        class="tb-hl-function">addEventListener</span>(<span class="tb-hl-string">'change'</span>, event =&gt; {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">const</span>&nbsp;form =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">FormData</span>();</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">for</span>&nbsp;(<span class="tb-hl-keyword">const</span>&nbsp;file&nbsp;<span
        class="tb-hl-keyword">of</span>&nbsp;event.target.files) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;form.<span
        class="tb-hl-function">append</span>(<span class="tb-hl-string">'file'</span>, file);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.body.<span
        class="tb-hl-function">removeChild</span>(fileInput);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$.<span
        class="tb-hl-function">fileUploader</span>(<span class="tb-hl-string">'/api'</span>, form).<span
        class="tb-hl-function">success</span>(response =&gt; {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-function">resolve</span>(response.imageUrl);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.body.<span
        class="tb-hl-function">appendChild</span>(fileInput);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.<span
        class="tb-hl-function">click</span>();</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">return</span>&nbsp;promise;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// case 'video':</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// &nbsp;&nbsp;console.log('上传视频');</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// &nbsp;&nbsp;break;</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// case 'audio':</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// &nbsp;&nbsp;console.log('上传音频');</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// &nbsp;&nbsp;break;</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>})</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <h2>Javascript 版本</h2>
    <pre lang="Javascript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code>textbus.<span class="tb-hl-function">createEditor</span>(<span class="tb-hl-string">'#editor'</span>, {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;uploader:&nbsp;<span class="tb-hl-keyword">function</span>(type, prevValue) {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">switch</span>&nbsp;(type) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">case</span>&nbsp;<span class="tb-hl-string">'image'</span>:</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">var</span>&nbsp;fileInput = document.<span
        class="tb-hl-function">createElement</span>(<span class="tb-hl-string">'input'</span>);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.<span
        class="tb-hl-function">setAttribute</span>(<span class="tb-hl-string">'type'</span>,&nbsp;<span
        class="tb-hl-string">'file'</span>);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.<span
        class="tb-hl-function">setAttribute</span>(<span class="tb-hl-string">'accept'</span>,&nbsp;<span
        class="tb-hl-string">'image/png, image/gif, image/jpeg, image/bmp, image/x-icon'</span>);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.style.cssText =&nbsp;<span
        class="tb-hl-string">'position: absolute; left: -9999px; top: -9999px; opacity: 0'</span>;</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">var</span>&nbsp;promise = &nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">Promise</span>(<span class="tb-hl-keyword">function</span>(resolve) {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.<span
        class="tb-hl-function">addEventListener</span>(<span class="tb-hl-string">'change'</span>,&nbsp;<span
        class="tb-hl-keyword">function</span>(event) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">var</span>&nbsp;form =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span
        class="tb-hl-class-name">FormData</span>();</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">var</span>&nbsp;files = event.target.files;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">for</span>(<span class="tb-hl-keyword">var</span>&nbsp;i =&nbsp;<span
        class="tb-hl-number">0</span>; i &lt; files.length; i++) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 这里的 file 字符串为后台接收 FormData 的字段名，可以改成自己需要的名字</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;form.<span
        class="tb-hl-function">append</span>(<span class="tb-hl-string">'file'</span>, files[i]);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.body.<span
        class="tb-hl-function">removeChild</span>(fileInput);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 下面以 jQuery 为例实现上传</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$.<span
        class="tb-hl-function">ajax</span>({</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:<span
        class="tb-hl-string">"post"</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url:&nbsp;<span
        class="tb-hl-string">'/api/upload'</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: form,</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dataType:&nbsp;<span
        class="tb-hl-string">'json'</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;processData:&nbsp;<span
        class="tb-hl-boolean">false</span>,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;success:&nbsp;<span
        class="tb-hl-keyword">function</span>(response){</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">if</span>&nbsp;(response.success) {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-function">resolve</span>(response.imageUrl)</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error:&nbsp;<span
        class="tb-hl-keyword">function</span>() {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<span
        class="tb-hl-function">log</span>(<span class="tb-hl-string">'上传失败！'</span>);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.body.<span
        class="tb-hl-function">appendChild</span>(fileInput);</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.<span
        class="tb-hl-function">click</span>();</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">return</span>&nbsp;promise;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// case 'video':</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// &nbsp;&nbsp;console.log('上传视频');</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// &nbsp;&nbsp;break;</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// case 'audio':</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// &nbsp;&nbsp;console.log('上传音频');</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// &nbsp;&nbsp;break;</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>})</code></div></div><div
        class="tb-pre-lang">Javascript</div></pre>
    <h1>关于 Type 参数</h1>
    <p>Textbus 未预定义 uploader 函数的 type 参数值，type 参数值是由工具条的工具类定义的，目前 Textbus 自带的工具类有 image、video、audio
      三种。其它的则由用户扩展的工具类定义。</p>
    <p><br></p>
  </div>
</template>
