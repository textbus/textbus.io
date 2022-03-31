<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h2>NativeRenderer</h2>
<p>原生平台抽象渲染器，用于编辑器实现平台提供 UI 渲染的能力。通过实现其抽象方法，即可实现相应平台的 UI 渲染。</p>
  </div>
</template>