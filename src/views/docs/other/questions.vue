<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>常见问题</h1>
<h2>Textbus 是怎么启动的？</h2>
<p>Textbus 内核只是一个无任何内置功能的富文本驱动框架，所有的扩展由用户实现，</p>
  </div>
</template>