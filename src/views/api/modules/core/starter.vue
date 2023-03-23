<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>启动器</h1>
<p>Starter 为 Textbus 内核启动器，用于引导并创建一个 Textbus 实例。Starter 继承自&nbsp;<a target="_blank" href="https://github.com/tbhuabi/di">@tanbo/di</a>&nbsp;包内的&nbsp;<code>ReflectiveInjector</code>&nbsp;类，所以 Starter 也是一个 IoC 容器（依赖注入容器）。</p>
<p>只有的 Starter 并不能创建一个编辑器，还需要搭配具体的平台层实现。</p>
<p>创建一个 Starter 实例需传入扩展配置，如组件、格式等。还必须在 Providers 数组里配置&nbsp;<code>NativeSelectionBridgge</code>&nbsp;（原生选区桥接实现）和&nbsp;<code>NativeRenderer</code>&nbsp;（原生渲染能力实现）两个运行平台必须要实现的类。Textbus 官方包里已经实现了<span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">浏览器平台的桥接能力（ @textbus/platform-browser），你可以直接使用。你也可以根据自己的需要，实现如小程序等平台的桥接。</span></p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;config: TextbusConfig = {</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-comment">// textbus 配置项</span></div><div class="tb-code-line">}</div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;starter =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">Starter</span>(config)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<p>配置项可参考文档<a target="_blank" href="https://textbus.io/docs/config">配置</a>页的说明。</p>
<h2>属性</h2>
<h3>config 配置</h3>
<p>实例化 Textbus 时，传入的配置。</p>
<h2>方法</h2>
<h3>mount() 启动</h3>
<p>启动 Textbus，需调用 mount 方法，Textbus 会把根组件（rootComponentInstance）渲染到你指定的原生节点（nativeNode）内。并同时启动文档数据变更的监听和历史记录的记录。</p><pre lang="TypeScript" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">starter.<span class="tb-hl-function">mount</span>(nativeNode, rootComponentInstance)</div></div><span class="tb-pre-lang">TypeScript</span></div></pre>
<h3>destroy() 销毁</h3>
<p>销毁 Textbus 实例</p>
<h2>静态属性</h2>
<h3>diScope</h3>
<p>Starter 实例容器的依赖注入容器名。</p>
<p><br></p>
  </div>
</template>