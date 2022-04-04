<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>History 历史记录</h1>
<h2>onChange</h2>
<p>当历史记录变化时触发。</p>
<h2>onBack</h2>
<p>当回退时触发。</p>
<h2>onForward</h2>
<p>当前进时触发。</p>
<h2>onPush</h2>
<p>当产生新的历史记录时触发。</p>
<h2>canBack</h2>
<p>是否可以回退。</p>
<h2>canForward</h2>
<p>是否可以前进。</p>
<h2>listen()</h2>
<p>监听历史记录。</p>
<h2>back()</h2>
<p>回退操作。</p>
<h2>forward()</h2>
<p>重做操作。</p>
<h2>destroy()</h2>
<p>销毁 History 实例。</p>
  </div>
</template>