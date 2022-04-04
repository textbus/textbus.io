<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>Translator 数据转换器</h1>
<h2>createSlot()</h2>
<p>根据插槽数据生成插槽实例。</p>
<h2>createComponent()</h2>
<p>根据组件数据生成组件实例。</p>
<h2>createComponentByFactory()</h2>
<p>根据组件数据和组件创建组件实例。<br></p>
<h2>fillSlot()</h2>
<p>将插槽数据填充到指定插槽。</p>
  </div>
</template>