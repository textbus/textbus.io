<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>自定义插件</h1>
    <p>插件是用于增强 TextBus 额外能力的，如果你想增加格式支持（如：加粗、字体颜色），请扩展样式（Formatter），如果你想增加布局支持，请扩展组件（Component）。</p>
    <p>TextBus 的插件必须实现 TBPlugin 接口。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;* TextBus 插件扩展接口</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;*/</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">interface</span>&nbsp;<span class="tb-hl-class-name">TBPlugin</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">/**</span></code></div><div
        class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 在 TextBus 初始化完成时调用</span></code></div><div class="tb-code-line"><code><span
        class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">setup</span>():&nbsp;<span class="tb-hl-keyword">void</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-comment">/**</span></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;* 在 TextBus 销毁时调用</span></code></div><div
        class="tb-code-line"><code><span class="tb-hl-comment">&nbsp;&nbsp;&nbsp;*/</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;onDestroy?():&nbsp;<span class="tb-hl-keyword">void</span>;</code></div><div
        class="tb-code-line"><code>}</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
    <p>同时，插件还必须为一个可注入类。当插件标识为一个可注入类时，即可通过构造函数注入 TextBus 内部内的实例。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ TBPlugin, Injectable, TBSelection }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code><span class="tb-hl-comment">// 通过 Injectable 装饰器，标识当前插件为一个可注入类</span></code></div><div
        class="tb-code-line"><code>@<span class="tb-hl-function">Injectable</span>()</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">ExamplePlugin</span>&nbsp;<span
        class="tb-hl-keyword">implements</span>&nbsp;<span class="tb-hl-class-name">TBPlugin</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">// 通过构造函数注入 TextBus 内部实例，你可以根据自己的需要，注入自已需要的任意类。</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">constructor</span>(<span
        class="tb-hl-keyword">private</span>&nbsp;selection: TBSelection) {}</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;<span
        class="tb-hl-function">setup</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span
        class="tb-hl-function">log</span>(<span class="tb-hl-keyword">this</span>.selection);</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// your code...</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <h2>哪些类可注入</h2>
    <p>请参考&nbsp;<a target="_self" href="https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;doc&#x2F;interface">API 概览</a>。</p>

  </div>
</template>
