<template>
  <div class="home">
    <div class="ui-container">
      <div class="slide-wrapper">
        <UISlide ref="slide" :autoplay="false">
          <UISlideItem class="slide-item">
            <div class="banner">
              <h2 class="slogan">一个组件化、高性能的富文本开发框架</h2>
            </div>
            <div class="starter">
              <code>npm install @textbus/editor</code>
              <router-link to="/docs">
                <span class="icon-arrow-right2"></span>
              </router-link>
            </div>
            <p class="desc">🚀 全新 2.0 版本，富文本也可以像前端框架一样，创造令人惊叹的文档</p>
          </UISlideItem>
          <UISlideItem class="slide-item">
            <div ref="editorDark"></div>
          </UISlideItem>
          <template #toPrevController>
            <button class="prev-btn" @click="slide.prev()" type="button"></button>
          </template>
          <template #toNextController>
            <button class="next-btn" @click="slide.next()" type="button"></button>
          </template>
          <template #pagination="{ progress }">
            <div class="slide-pagination">
              <span :class="{ active: computedIndex(progress) === 0 }"></span>
              <span :class="{ active: computedIndex(progress) === 1 }"></span>
              <span :class="{ active: computedIndex(progress) === 2 }"></span>
              <span :class="{ active: computedIndex(progress) === 3 }"></span>
            </div>
          </template>
        </UISlide>
      </div>
    </div>
    <div class="ad">
      <div class="ui-container">
        <div class="ui-row">
          <div class="ui-col-md-6 ui-col-sm-12 ui-col-xs-24">
            <h3>跨平台</h3>
            <p>不同的中间层，同样的效果</p>
          </div>
          <div class="ui-col-md-6 ui-col-sm-12 ui-col-xs-24">
            <h3>组件化</h3>
            <p>像 Vue 或 React 一样开发富文本组件</p>
          </div>
          <div class="ui-col-md-6 ui-col-sm-12 ui-col-xs-24">
            <h3>数据驱动</h3>
            <p>只关注数据，无需关心渲染</p>
          </div>
          <div class="ui-col-md-6 ui-col-sm-12 ui-col-xs-24">
            <h3>协同</h3>
            <p>多人在线同时编辑，更高效</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="themes">
    <div class="themes-desc">
      <h3>4 种主题</h3>
      <p>多种主题任你选择，适配各种风格</p>
    </div>
  </div>
  <div class="ui-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { createEditor, Editor } from '@textbus/editor';

import { UISlide } from '@/components/slide/slide.component';
import { UISlideItem } from '@/components/slide/slide-item.component';

const editorDark = ref<HTMLElement>()
const slide = ref()

const editors: Editor[] = []
onMounted(() => {
  editors.push(
      createEditor(editorDark.value!, {
        theme: 'dark',
        placeholder: '请输入内容...',
        content: '<p>欢迎你使用 <strong>TextBus 富文本编辑器...</strong></p>'
      })
  )
})

onUnmounted(() => {
  editors.forEach(i => i.destroy())
})

function computedIndex(progress: number) {
  return Math.round((progress - 0.5) % 4)
}
</script>

<style lang="scss" scoped>
@import "../scss/varibles";

.slide-wrapper {
  padding: 20px 100px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.7);
}

.slide-item {
  min-width: 100%;
}

.prev-btn,
.next-btn {
  width: 30px;
  height: 40px;
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  &:before {
    content: "";
    width: 40px;
    height: 40px;
    display: inline-block;
    position: absolute;
  }
}

.prev-btn {
  left: -80px;

  &:before {
    left: 0;
    border-left: 2px solid $color-primary;
    border-top: 2px solid $color-primary;
    transform: rotateZ(-45deg);
  }
}

.next-btn {
  right: -80px;

  &:before {
    right: 0;
    border-right: 2px solid $color-primary;
    border-bottom: 2px solid $color-primary;
    transform: rotateZ(-45deg);
  }
}

.desc {
  text-align: center;
  font-size: 18px;
}

.ad {
  background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.7);

  .ui-container {
    max-width: 1100px;
  }

  h3 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.5em;
  }
}

.home {
  background: #171f26;
}

.banner {
  padding-top: 100px;
  text-align: center;
  padding-bottom: 10px;
}

.slogan {
  font-size: 47px;
  font-weight: 300;
  color: #fff;
  margin: 0;
}

.starter {
  width: 360px;
  height: 50px;
  display: flex;
  margin: 40px auto;
  border-radius: 4px;
  overflow: hidden;

  code {
    flex: 1;
    background: #283542;
    text-align: center;
    font-family: "Source Code Pro", Monaco, Menlo, Consolas, monospace;
    line-height: 30px;
    padding: 10px;
    font-weight: 300;

    &:before {
      content: "$";
      margin-right: 0.5em;
    }
  }

  a {
    width: 50px;
    line-height: 50px;
    text-decoration: none;
    text-align: center;
    font-size: 24px;
    background: $color-primary;
    color: #fff;

    span {
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover {
      span {
        transform: scale(1.2);
      }
    }
  }
}

.slide-pagination {
  text-align: center;
  padding: 16px;

  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-left: 5px;
    margin-right: 5px;
    background: #ccc;
    transition: all 0.2s;
    background: rgba(0, 0, 0, 0.3);

    &.active {
      background: rgba(0, 0, 0, 0.8);
    }
  }
}
.themes {
  padding: 30px 0;
}
.themes-desc {
  text-align: center;
  line-height: 1.2;

  h3 {
    font-size: 36px;
    margin: 0;
    background-image: linear-gradient(red, blue);
    background-clip: text;
    color: transparent;
  }

  p {
    font-size: 24px;
    margin: 0;
  }
}
</style>
