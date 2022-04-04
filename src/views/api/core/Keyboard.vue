<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>Keyboard 键盘管理</h1>
<h2>execShortcut()</h2>
<p>调用快捷键。</p>
<h2>addShortcut()</h2>
<p>注册快捷键。</p>
  </div>
</template>