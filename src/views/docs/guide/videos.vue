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
    <h2>Textbus 格式开发实战</h2>
    <p>2023-05-10</p>
    <p>本视频分享了 Textbus 格式（Formatter）和属性（Attribute)开发的一些要点及注意事项。</p>
    <div>
      <iframe src="//player.bilibili.com/player.html?aid=485955179&bvid=BV1WT41187KY&cid=1125041623&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
    <h2>Textbus 原理解析</h2>
    <p>2023-04-23</p>
    <p>本视频分享了 Textbus 架构设计和一些 API 知识。</p>
    <div>
      <iframe src="//player.bilibili.com/player.html?aid=612767758&bvid=BV1Gh4y1p7df&cid=1106627357&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
    <h2>使用 Vue/React 开发 Textbus 扩展</h2>
    <p>2023-04-14</p>
    <p>本视频分享了在 Vue 或 React 中，怎么简便的开发 Textbus 的工具或 UI。</p>
    <div>
      <iframe src="//player.bilibili.com/player.html?aid=952468399&bvid=BV1vs4y1P7DE&cid=1095656000&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
    <h2>从零开始创建一个协作富文本编辑器</h2>
    <p>2023-03-24</p>
    <p>本视频分享了使用 Textbus 内核和浏览器平台层创建一个完全自定义的富文本编辑器的入门知识。</p>
    <div>
      <iframe src="//player.bilibili.com/player.html?aid=611612276&bvid=BV1B84y1u7SA&cid=1069234432&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
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
