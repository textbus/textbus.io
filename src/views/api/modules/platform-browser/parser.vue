<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>HTML 解析器</h1>
<p>Parser 用于将 HTML 字符串，转换为 Textbus 的组件、插槽或格式等。</p>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取&nbsp;<span style="background-color:rgb(255, 255, 255)">Parser</span>&nbsp;的实例。</span></p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 方法1</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;parser = editor.<span class="tb-hl-function">get</span>(Parser)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法2</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;parser = injector.<span class="tb-hl-function">get</span>(Parser)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法3</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;parser =&nbsp;<span class="tb-hl-function">useContext</span>(Parser)</div><div class="tb-code-line">&nbsp;&nbsp;}</div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>parseDoc() html 转组件或插槽</h2>
<p>使用指定组件的 loader 解析一段 HTML。返回一个组件实例或插槽实例。</p>
<p>示例：</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;result = parser.<span class="tb-hl-function">parseDoc</span>(htmlString, yourComponentLoader)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>parse() html 转插槽</h2>
<p>将 HTML 转换为 Textbus 的数据并保存到指定的插槽内。</p>
<p>示例：</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;slot = parser.<span class="tb-hl-function">parse</span>(htmlString,&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Slot</span>([</div><div class="tb-code-line">&nbsp;&nbsp;ContentType.text,</div><div class="tb-code-line">&nbsp;&nbsp;ContentType.InlineComponent,</div><div class="tb-code-line">&nbsp;&nbsp;ContentType.BlockComponent</div><div class="tb-code-line">]))</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h2>parseHTML() HTML 转 DOM</h2>
<p>静态方法。</p>
<p>用于将 HTML 解析为 DOM 对象。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;document = Parser.<span class="tb-hl-function">parseHTML</span>(htmlString)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
  </div>
</template>