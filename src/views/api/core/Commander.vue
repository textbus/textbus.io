<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>Commander</h1>
<p>文档编辑命令，用于快捷操作文档内容。</p>
<h2>extractContentBySchema()</h2>
<p>根据起始位置和结束位置，把源插槽的内容根据 schema 提取到一组新的插槽。</p>
<h2>extractSlots()</h2>
<p>在当前选区内，根据 schema 提取出一组新的插槽和选区位置，并删除选区内的内容。</p>
<h2>write()</h2>
<p>向文档写入内容，写入新的内容会继承光标前的样式。</p>
<h2>insert()</h2>
<p>向文档插入内容。</p>
<h2>enter()</h2>
<p>触发换行事件。</p>
<h2>delete()</h2>
<p>触发删除事件。</p>
<h2>copy()</h2>
<p>复制选区内容。</p>
<h2>cut()</h2>
<p>剪切选区内容。</p>
<h2>cleanFormats()</h2>
<p>删除选区内格式。</p>
<h2>applyFormat()</h2>
<p>根据选区应用格式。</p>
<h2>unApplyFormat()</h2>
<p>取消选区指定样式。</p>
<h2>insertBefore()</h2>
<p>在组件前插入新组件。</p>
<h2>insertAfter()</h2>
<p>在组件后插入新组件。</p>
<h2>replace()</h2>
<p>替换组件。</p>
<h2>remove()</h2>
<p>删除组件。</p>
  </div>
</template>