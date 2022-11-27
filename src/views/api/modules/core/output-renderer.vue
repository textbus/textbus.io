<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>OutputRenderer 输出渲染器</h1>
<p>输出模式渲染器。一般无需手动调用，<span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">Textbus 会在你获取输出结果时自动调用。</span></p>
<p style="background-color:rgb(255, 255, 255)"><span style="color:rgb(73, 80, 96)">通过编辑器实例或通过 useContext 勾子获取 OutputRenderer 的实例。</span></p><pre lang="TypeScript" theme="light" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 方法1</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;outputRenderer = editor.<span class="tb-hl-function">get</span>(OutputRenderer)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法2</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;outputRenderer = injector.<span class="tb-hl-function">get</span>(OutputRenderer)</div><div class="tb-code-line"><span class="tb-hl-comment">// 方法3</span></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;yourComponent =&nbsp;<span class="tb-hl-function">defineComponent</span>({</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;outputRenderer =&nbsp;<span class="tb-hl-function">useContext</span>(OutputRenderer)</div><div class="tb-code-line">&nbsp;&nbsp;}</div><div class="tb-code-line">})</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<h2>render() 渲染</h2>
<p>以输出模式渲染文档内容。</p><pre lang="TypeScript" theme="null" class="tb-pre"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-comment">// 类型签名：</span></div><div class="tb-code-line"><span class="tb-hl-function">render</span>(): VElement;</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<p><br></p>
  </div>
</template>