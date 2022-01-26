<script setup lang="ts">
import { RoutePath } from '@/router'
import { useRouter } from 'vue-router'
import { createEditor } from '@textbus/editor'
import { onMounted, ref } from 'vue'

const editorRef = ref<HTMLElement>()
onMounted(() => {
  const editor = createEditor(editorRef.value!, { 
    theme: 'dark',
    placeholder: '你好，我是仓鼠，正在苦逼的被压榨加工出一个textbus的新文档中心，如果你还看不到新站点，说明我还在做，敬请期待！'
  })
})

const articleList = [
  { date: '2022-01-03', content: 'text bus 2.0 release!' },
  { date: '2023-01-04', content: 'text bus 3.0 coming soon.' },
  { date: '2024-01-05', content: 'text bus 4.0 coming soon.' },
  { date: '2025-01-06', content: 'text bus 5.0 coming soon.' }
]

const router = useRouter()
function toDocs() {
  router.push(RoutePath.DOCS)
}
</script>

<template>
  <div class="banner">
    <div>
      <h2 class="introduction">A fast, simple & powerful rich text editor</h2>
      <div class="banner-start">
        <span class="banner-start-command">npm install @textbus/editor</span>
        <p class="banner-start-link" @click="toDocs">
          <i class="fa fa-arrow-right"></i>
        </p>
      </div>
    </div>
    <div>
      <ul class="article-container">
        <li v-for="item in articleList">
          <p>{{ item.date }}</p>
          <p>{{ item.content }}</p>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <div ref="editorRef" class="home-editor"></div>
  </div>
</template>

<style lang="scss" scoped>
.home-editor {
  max-width: 1200px;
  margin: 20px auto;
}
.banner {
  color: rgba(255, 255, 255, 0.8);
}
.introduction {
  padding-top: 100px;
  line-height: 1.15;
  font-weight: 300;
  font-size: 48px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}
.banner-start {
  padding: 60px 0;
  font-size: 18px;
  text-align: center;
}
.banner-start-command {
  background: #283542;
  font-family: "Source Code Pro", Monaco, Menlo, Consolas, monospace;
  font-size: 18px;
  display: inline-block;
  padding: 15px 20px;
  &::before {
    content: "$";
    opacity: 0.5;
    padding-right: 10px;
  }
}
.banner-start-link {
  color: #fff;
  background: #0e83cd;
  display: inline-block;
  padding: 17px;
  text-decoration: none;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background: #1094e8;
  }
}
.article-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #151c22;
  flex-wrap: wrap;
  padding: 0px 20px;
  li {
    text-align: left;
    width: 200px;
    list-style: none;
    cursor: pointer;
    padding: 36px 30px;
    &:hover {
      background-color: #0e83cd;
    }
    p {
      &:nth-child(1) {
        opacity: 0.7;
      }
    }
  }
}
</style>
