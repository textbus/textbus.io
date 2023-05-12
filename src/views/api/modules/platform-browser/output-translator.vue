<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>HTML 输出转换器</h1>
<p>OutputTranslator 用于将虚拟 DOM 转换为 HTML 字符串。</p>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取&nbsp;<span style="background-color:rgb(255, 255, 255)">OutputTranslator</span>&nbsp;的实例。</span></p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 方法1</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;outputTranslator = editor.<span class="tb-hl-function">get</span>(OutputTranslator)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法2</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;outputTranslator = injector.<span class="tb-hl-function">get</span>(OutputTranslator)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法3</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;outputTranslator =&nbsp;<span class="tb-hl-function">useContext</span>(OutputTranslator)</div><div class="tb-code-line">&nbsp;&nbsp;}</div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>transform() 转换虚拟 DOM</h2>
<p>将虚拟 DOM 转换为 HTML 字符串。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;html = outputTranslator.<span class="tb-hl-function">transform</span>(vDom)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>singleTags 单标签集合</h2>
<p>静态属性。</p>
<p>一个字符串数组，用于枚举哪些标签是单标签，如 img、input 等。</p>
<p>示例：</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(OutputTranslator.singleTags)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>simpleXSSFilter 防 xss 转换器</h2>
<p>静态属性。</p>
<p>一个对象，提供了字符串、标签和属性的转换方法。用于在生成 HTML 时，把敏感字符转换为特定的编码，防止 xss 攻击。</p>
<p>示例：</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;text = OutputTranslator.simpleXSSFilter.<span class="tb-hl-function">text</span>(<span class="tb-hl-string">'xxxxx'</span>)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p><br></p>
  </div>
</template>