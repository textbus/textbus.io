<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>Registry 注册表</h1>
<h2>getComponent()</h2>
<p>根据名字获取组件。</p>
<h2>getFormatter()</h2>
<p>根据名字获取格式。</p>
  </div>
</template>