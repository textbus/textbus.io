<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    <h1>视频教程</h1>
    <p>以下是 Textbus 官方群的在线分享视频，你可以通过视频更直观的了解 Textbus。</p>
    <h2>TodoList 组件开发实战</h2>
    <p>2022-05-07</p>
    <p>本视频分享了使用 Textbus 开发一个 TodoList 组件的要点及注意事项。</p>
    <div>
      <iframe src="//player.bilibili.com/player.html?bvid=BV1K44y1u7eK&page=1" scrolling="no" border="0"
              frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
    <h2>Textbus 数据结构和组件开发分享</h2>
    <p>2022-03-07</p>
    <p>本视频分享了 Textbus 组件的基本要素，组件加载器解释，组件状态管理及历史记录。</p>
    <div>
      <iframe src="//player.bilibili.com/player.html?bvid=BV1RT4y1S7qe&page=1" scrolling="no" border="0"
              frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
  </div>
</template>
<style lang="scss" scoped>
iframe {
  width: 710px;
  height: 450px;
}
</style>
