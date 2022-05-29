<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>Core 模块</h1>
<p>core 模块是 Textbus 整个架构的基础能力，包括了 Textbus 的数据模型定义、选区、文档操作能力等。所有 Textbus 的其它模块都是在 core 模块的基础之上构建的。</p>
<p>Textbus 所有内部类均采用了依赖注入组织代码，以下文档中，如无特殊说明，均可在标记了 Injectable 的类的构建函数参数注入，或者通过 injector.get() 方法获取。</p>
<p><strong>通过构建函数注入：</strong></p><pre theme="light" lang="TypeScript" class="tb-pre"><div style="width:2em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{ Injectable, History }&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@textbus/core'</span></div><div class="tb-code-line"><br></div><div class="tb-code-line">@<span class="tb-hl-function">Injectable</span>()</div><div class="tb-code-line"><span class="tb-hl-keyword">export</span>&nbsp;<span class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">Example</span>&nbsp;{</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">constructor</span>(<span class="tb-hl-keyword">private</span>&nbsp;history: History) {</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(<span class="tb-hl-keyword">this</span>.history)</div><div class="tb-code-line">&nbsp;&nbsp;}</div><div class="tb-code-line">}</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<p><strong>通过注入器获取：</strong></p><pre theme="light" lang="TypeScript" class="tb-pre"><div style="width:2em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;history = injector.<span class="tb-hl-function">get</span>(History)</div><div class="tb-code-line"><span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(history)</div></div><span class="tb-pre-lang">TypeScript</span></pre>
<p>只要可以访问 injector 的地方，均可通过上面的方法访问内部类的实例（如组件内的 useContext 勾子返回的注入器）。</p>
<h2>Commander 命令</h2>
<p>文档编辑命令，用于快捷操作文档内容。</p>
<h4>extractContentBySchema()</h4>
<p>根据起始位置和结束位置，把源插槽的内容根据 schema 提取到一组新的插槽。</p>
<h4>extractSlots()</h4>
<p>在当前选区内，根据 schema 提取出一组新的插槽和选区位置，并删除选区内的内容。</p>
<h4>write()</h4>
<p>向文档写入内容，写入新的内容会继承光标前的样式。</p>
<h4>insert()</h4>
<p>向文档插入内容。</p>
<h4>enter()</h4>
<p>触发换行事件。</p>
<h4>delete()</h4>
<p>触发删除事件。</p>
<h4>copy()</h4>
<p>复制选区内容。</p>
<h4>cut()</h4>
<p>剪切选区内容。</p>
<h4>cleanFormats()</h4>
<p>删除选区内格式。</p>
<h4>applyFormat()</h4>
<p>根据选区应用格式。</p>
<h4>unApplyFormat()</h4>
<p>取消选区指定样式。</p>
<h4>insertBefore()</h4>
<p>在组件前插入新组件。</p>
<h4>insertAfter()</h4>
<p>在组件后插入新组件。</p>
<h4>replace()</h4>
<p>替换组件。</p>
<h4>remove()</h4>
<p>删除组件。</p>
<h2>History 历史记录</h2>
<h4>onChange</h4>
<p>当历史记录变化时触发。</p>
<h4>onBack</h4>
<p>当回退时触发。</p>
<h4>onForward</h4>
<p>当前进时触发。</p>
<h4>onPush</h4>
<p>当产生新的历史记录时触发。</p>
<h4>canBack</h4>
<p>是否可以回退。</p>
<h4>canForward</h4>
<p>是否可以前进。</p>
<h4>listen()</h4>
<p>监听历史记录。</p>
<h4>back()</h4>
<p>回退操作。</p>
<h4>forward()</h4>
<p>重做操作。</p>
<h4>destroy()</h4>
<p>销毁 History 实例。</p>
<h2>Keyboard 键盘管理</h2>
<h4>execShortcut()</h4>
<p>调用快捷键。</p>
<h4>addShortcut()</h4>
<p>注册快捷键。</p>
<h2>NativeRenderer</h2>
<p>原生平台抽象渲染器，用于编辑器实现平台提供 UI 渲染的能力。通过实现其抽象方法，即可实现相应平台的 UI 渲染。</p>
<h2>OutputRenderer 输出渲染器</h2>
<h4>render()</h4>
<p>以输出模式渲染当前文档。</p>
<h2>Query 状态查询器</h2>
<h4>queryFormat()<br></h4>
<p>查询当前选区内格式的状态。</p>
<h4>queryComponent()</h4>
<p>查询当前选区内是否为指定组件。</p>
<h4>queryWrappedComponent()</h4>
<p>查询当前选区是否包含在指定组件之内。</p>
<h2>Registry 注册表</h2>
<h4>getComponent()</h4>
<p>根据名字获取组件。</p>
<h4>getFormatter()</h4>
<p>根据名字获取格式。</p>
<h2>Renderer 渲染器</h2>
<h4>onViewUpdateBefore</h4>
<p>当视图更新前触发。</p>
<h4>onViewChecked</h4>
<p>当视图更新后触发。</p>
<h4>render()</h4>
<p>以编辑模式渲染文档。</p>
<h4>getVNodeByComponent()</h4>
<p>通过组件实例获取对应的虚拟 DOM 节点。</p>
<h4>getVNodeBySlot()</h4>
<p>通过插槽实例获取对应的虚拟 DOM 节点。</p>
<h4>getNativeNodeByVNode()</h4>
<p>通过虚拟 DOM 节点获取对应的原生节点。</p>
<h4>getLocationByVNode()</h4>
<p>获取虚拟 DOM 节点在文档中的位置。</p>
<h4>getLocationByNativeNode()</h4>
<p>获取原生节点在文档中的位置。</p>
<h2>RootComponentRef 根组件引用</h2>
<p>根组件引用，用于在访问根组件和原生根节点。由于根组件内可能会通过注入器访问其它实例，这样会造成初始化时的死循环注入引用，所以，我们扩展 core 模块，在调用启动器（Starter）的 mount() 方法时都约定异步调用。同时，mount() 方法会把参数传入的根组件和原生根节点赋值到 RootComponentRef 的实例属性上。</p>
<h4>component</h4>
<p>根组件</p>
<h4>host</h4>
<p>原生根节点</p>
<h2>Selection 选区</h2>
<h4>onChange</h4>
<p>当选区变化时触发。</p>
<h4>isSelected</h4>
<p>是否有选区。</p>
<h4>isCollapsed</h4>
<p>选区是否是闭合的。</p>
<h4>startSlot</h4>
<p>选区开始的插槽。</p>
<h4>endSlot</h4>
<p>选区结束的插槽。</p>
<h4>startOffset</h4>
<p>选区开始的偏移量。</p>
<h4>endOffset</h4>
<p>选区结束的偏移量。</p>
<h4>anchorSlot</h4>
<p>锚点插槽。</p>
<h4>focusSlot</h4>
<p>焦点插槽。</p>
<h4>anchorOffset</h4>
<p>锚点偏移量。</p>
<h4>focusOffset</h4>
<p>焦点偏移量。</p>
<h4>commonAncestorSlot</h4>
<p>公共父插槽。</p>
<h4>commonAncestorComponent</h4>
<p>公共父组件。</p>
<h4>setBaseAndExtent()</h4>
<p>设置选区的锚点位置和焦点集团</p>
<h4>setAnchor()</h4>
<p>设置选区锚点位置。</p>
<h4>setFocus()</h4>
<p>设置选区焦点位置。</p>
<h4>setPosition()</h4>
<p>设置选区位置。</p>
<h4>selectSlot()</h4>
<p>选中一个插槽的所有内容</p>
<h4>selectFirstPosition()</h4>
<p>将选区设置到组件第一个插槽的第一个位置</p>
<h4>selectLastPosition()</h4>
<p>将选区设置到组件最后一个插槽的最后一个位置</p>
<h4>selectComponentFront()</h4>
<p>将选区设置在组件之前</p>
<h4>selectComponentEnd()</h4>
<p>将选区设置在组件之后</p>
<h4>selectChildSlots()</h4>
<p>选中组件所有子插槽</p>
<h4>selectComponent()</h4>
<p>选中一个组件。</p>
<h4>getSelectedScopes()</h4>
<p>获取选区内所有的插槽片段集合。</p>
<h4>toPrevious()</h4>
<p>光标移动到前一个位置。</p>
<h4>toNext()</h4>
<p>光标移动到后一个位置。</p>
<h4>toPreviousLine()</h4>
<p>光标移动到上一行。</p>
<h4>toNextLine()</h4>
<p>光标移动到下一行。</p>
<h4>wrapToAfter()</h4>
<p>向后框选。</p>
<h4>wrapToBefore()</h4>
<p>向前框选。</p>
<h4>wrapToTop()</h4>
<p>向上框选。</p>
<h4>wrapToBottom()</h4>
<p>向下框选。</p>
<h4>collapse()</h4>
<p>闭合选区。</p>
<h4>restore()</h4>
<p>同步 Textbus 选区到原生选区。</p>
<h4>getPaths()</h4>
<p>获取选区路径。</p>
<h4>usePaths()</h4>
<p>使用选区路径。</p>
<h4>unSelect()</h4>
<p>取消选区。</p>
<h4>selectAll()</h4>
<p>全选。</p>
<h4>getNextPosition()</h4>
<p>获取后一个选区位置。</p>
<h4>getPreviousPosition()</h4>
<p>获取前一个选区位置。</p>
<h4>findSlotByPaths()</h4>
<p>根据路径获取插槽。</p>
<h4>findComponentByPaths()</h4>
<p>根据路径获取组件。</p>
<h4>getBlocks()</h4>
<p>获取选区内块级区域。</p>
<h4>getSlotRangeInCommonAncestorComponent()</h4>
<p>获取开始插槽和结束插槽在公共组件内的下标范围。</p>
<h4>getGreedyScopes()</h4>
<p>获取当前选区在开始和结束位置均扩展到最大行内内容位置是的块。</p>
<h4>findFirstPosition()</h4>
<p>获取插槽内第一个选区位置。</p>
<h4>findLastPosition()</h4>
<p>获取插槽内最后一个选区位置。</p>
<h4>getCommonAncestorSlotScope()</h4>
<p>获取当前选区在公共插槽的位置。</p>
<h2>Translator 数据转换器</h2>
<h4>createSlot()</h4>
<p>根据插槽数据生成插槽实例。</p>
<h4>createComponent()</h4>
<p>根据组件数据生成组件实例。</p>
<h4>createComponentByFactory()</h4>
<p>根据组件数据和组件创建组件实例。<br></p>
<h4>fillSlot()</h4>
<p>将插槽数据填充到指定插槽。</p>
<h2>Starter 启动器</h2>
<h4>onReady</h4>
<p>当 Textbus 内核准备好后触发。</p>
<h4>mount()</h4>
<p>启动 Textbus 内核。</p>
<h4>destroy()</h4>
<p>销毁 Textbus 内核。</p>
<p><br></p>
  </div>
</template>