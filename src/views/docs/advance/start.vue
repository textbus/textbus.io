<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>架构设计</h1>
<p>本文介绍了 TextBus 设计理念及各种概念，以及它们之间的关联关系，以帮助你能快的对 TextBus 有一个整体的了解，可以更轻松的使用 TextBus 的各种功能。</p>
<p>对于大多数编辑器，它们多是以 DOM 为中心，要么直接操作 DOM，要么试图通过自建数据模型，并简化的数据结构，去模拟 DOM 的实现。还有一部分编辑器，依赖于前端框架去实现自己的视图驱动。总之，这些编辑器都在富文本的领域做出了有益的实践。</p>
<p>TextBus 走了另一条路，并且我们认为现在的解决方案是富文本领域内为数不多的优秀解决方案。我们充分考虑了文档编辑时遇到的各种问题。如：光标计算、选区计算及恢复、自定义可编辑区域与不可编辑区域的实现、在富文本内做丰富的交互、富文本产出内容脏、内容可控和可预期等。</p>
<p>因此，在 TextBus 的内核设计时，充分参考了现有部分开源技术方案以及现代前端框架的实践。</p>
<p>TextBus 并不是一个一体化的编辑器，而是提供了成套的技术方案，旨在解决富文本开发中容易掉入各种样式、标签及光标计算的陷阱。使用 TextBus，你基本无需再关心标签如何嵌套，光标位置保持的问题，也不必关心编辑内容生成的代码质量问题。</p>
<p>TextBus 通过抽象的组件（Component）、插槽（Slot）和格式（Formatter）组成基本数据结构，你完全掌控这些数据的变化，也完全可以预期这些数据的渲染结果。同时，得益于 TextBus 高效的渲染器（Renderer），对于超长文档，或者复杂组件，你总是能得到几乎 1ms 内的视图更新效率，同时生成最干净的富文本内容。你也可以像平常使用前端开发框架一样，在组件内添加事件监听，并做出优秀交互效果。还可以根据不同的渲染上下文，在编辑时和输出时，生成不一样的富文本内容。甚至，你可以生成 Vue 或 Angular 的模板代码，作为低代码平台的源数据。</p>
<p>TextBus 还可以实现在不同平台上的富文本开发能力。通过桥接，可以很方便的桥接到小程序、移动端等不同的平台。事实上，TextBus 的内核是和 DOM 无关的富文本抽象。</p>
<p>总之，限制你的是你的想象力！</p>
<p>TextBus 目前有三个模块，它们分别是：</p>
<ul>
  <li><strong>core</strong>&nbsp;核心模块：提供了 TextBus 文档的基本数据模型、操作、渲染，以及状态查询、选区、数据转换、历史记录等；</li>
  <li><strong>browser</strong>&nbsp;浏览器支持模块：提供了 PC 端编辑器的视图层，如选区、HTML 解析、光标及文本输入等；</li>
  <li><strong>editor</strong>：TextBus 官方实现的 PC 端富文本编辑器，提供了大多数富文本所需的功能。</li>
</ul>
<h2>基本概念</h2>
<p>数据结构：</p>
<ul>
  <li><strong>Component 组件</strong>：和前端框架一样，组件是由特定的结构和交互的代码块，组件内也可以有零到多个 slot（插槽），组件也可以有自己的方法，来完成自身的数据交互；</li>
  <li><strong>Slot 插槽</strong>：表示组件内可以动态插入内容的位置，在 TextBus 中，表示这一块的内容是可以编辑的，用户可以通过操作来修改里面的内容；</li>
  <li><strong>Formatter 格式</strong>：表示对文本的修饰，如加粗、字体颜色等；</li>
  <li><strong>ContentType 内容类型</strong>：分别为：BlockComponent（块组件）、InlineComponent（行内组件）、Text（文本）；</li>
  <li><strong>VElement 虚拟无素节点</strong>：TextBus 渲染组件或格式时，虚拟 DOM 树元素节点；</li>
  <li><strong>VTextNode 虚拟文本节点</strong>：TextBus 渲染文本时，虚拟 DOM 树文本节点。</li>
</ul>
<p>数据操作：</p>
<ul>
  <li><strong>Commander 命令</strong>：对文档进行修改操作的简洁方法；</li>
  <li><strong>Selection 选区</strong>：当前选择的区域（大多数情况为用户拖蓝的区域）；</li>
  <li><strong>Query 查询</strong>：根据组件或格式查询在文档选区的中状态；</li>
  <li><strong>Renderer 渲染器</strong>：用于渲染文档的核心类，可通过渲染器获取到直实，DOM 节点，虚拟 DOM 节点，以及数据之间的映射关系；</li>
  <li><strong>History 历史记录</strong>：用于记录用户操作，并提供前进，后退操作；</li>
  <li><strong>Translator 数据转换器</strong>：用于把 JSON 数据转换为 TextBus 数据结构的工具类。</li>
</ul>
<p>可以把 TextBus 简单理解为：<strong>组件提供了你在富文本内创建布局、用户交互和受控渲染的能力，插槽提供了让用户编辑的能力</strong>。</p>
  </div>
</template>