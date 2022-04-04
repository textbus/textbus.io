<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>OutputRenderer 输出渲染器</h1>
<h2>render()</h2>
<p>以输出模式渲染当前文档。</p>
  </div>
</template>