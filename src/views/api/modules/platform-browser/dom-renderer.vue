<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>DOM 渲染器</h1>
<p>DomRenderer 类实现了内核中 NativeRenderer 抽象类的方法，用于 Textbus 在浏览器平台中实现 DOM 渲染能力实现类。</p>
  </div>
</template>