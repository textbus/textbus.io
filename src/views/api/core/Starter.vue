<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>Starter 启动器</h1>
<h2>onReady</h2>
<p>当 Textbus 内核准备好后触发。</p>
<h2>mount()</h2>
<p>启动 Textbus 内核。</p>
<h2>destroy()</h2>
<p>销毁 Textbus 内核。</p>
<p><br></p>
  </div>
</template>