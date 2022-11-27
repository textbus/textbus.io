<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { createEditor, Editor } from '@textbus/editor';
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { AppService } from '@/services/app.service';
import { html } from './html';

const injector = useReflectiveInjector()
const appService = injector.get(AppService)

appService.onInHome.next(true)

onUnmounted(() => {
  appService.onInHome.next(false)
})
const editor = ref<HTMLElement>()
let editorInstance: Editor | null = null
onMounted(() => {
  editorInstance = createEditor({
    theme: 'darkline',
    content: html
  });
  (window as any).textbus= editorInstance
  editorInstance.mount(editor.value!)
})

onUnmounted(() => {
  editorInstance?.destroy();
  (window as any).textbus= null
})

</script>
<template>
  <div class="home">
    <div class="banner">
      <div class="ui-container">
        <div class="editor-wrapper">
          <div ref="editor"></div>
        </div>
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
            <h3>协同
              <router-link to="/collab"><span class="icon-arrow-right2"></span> go</router-link>
            </h3>
            <p>多人在线同时编辑，更高效</p>
          </div>
        </div>
      </div>
    </div>
    <div class="run">
      <div class="ui-container">
        <div class="slogan">
          <h2>一个组件化、高性能的富文本开发框架</h2>
        </div>
        <p class="desc">🚀 全新 3.0 版本，富文本也可以像前端框架一样，创造令人惊叹的文档</p>
        <div class="starter">
          <code>npm install @textbus/editor</code>
          <router-link to="/docs">
            <span class="icon-arrow-right2"></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="supporter">
    <div class="ui-container">
      <h3>赞助商</h3>
      <p>虚位以待...</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../scss/varibles";

.supporter {
  text-align: center;
  background-color: #fff;
  overflow: hidden;

  h3 {
    font-size: 48px;
    color: $color-primary;

    &::before, &::after {
      content: "";
      width: 2em;
      height: 1px;
      background-color: #333;
      display: inline-block;
      vertical-align: middle;
      margin-left: 15px;
      margin-right: 15px;
    }
  }

  p {
    font-size: 28px;
    height: 200px;
  }

}
.banner {
  margin-top: -70px;
  padding-top: 70px;
  position: relative;
  overflow: hidden;
  //background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.15) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(0, 0, 0, 0.15) 3%, rgba(0, 0, 0, 0) 3%) rgb(224 148 45);
  background-position: center center;
  background-size: 20px 20px;
  //background: url(../assets/bg02.jpg) center center no-repeat;
  //background-size: cover;
  //background: conic-gradient(
  //    from -45deg at 25% 300px,
  //    hsla(170deg, 100%, 70%, .7),
  //    transparent 50%,
  //    hsla(219deg, 90%, 80%, .5) 100%),
  //linear-gradient(-45deg, #060d5e, #002268);
  //background: conic-gradient(from -45deg at 25% 300px, hsl(198deg 10% 49% / 77%), rgb(0 0 0 / 42%) 50%, hsla(140deg, 62%, 94%, 0.27) 100%), linear-gradient(-45deg, #404961, rgb(76 100 104));
  //color: #fff;
  //background-color: #a85911;
  &:before {
    content: "";
    background: url("../assets/tbus-bg.jpg") center center;
    background-size: cover;
    filter: blur(10px);
    position: absolute;
    left: -10px;
    top: -10px;
    right: -10px;
    bottom: -10px;
    opacity: .3;
    z-index: 0;
  }

  .ui-container {
    max-width: 960px;
  }
}

.editor-wrapper {
  padding: 20px 0 40px;
}


.ad {
  background: #fff;
  //background: rgba(0, 0, 0, 0.1);
  //color: rgba(255, 255, 255, 0.7);

  .ui-container {
    max-width: 1100px;
  }

  h3 {
    margin-bottom: 0;

    a {
      font-size: 13px;
      text-decoration: none;
      border-radius: 4px;
      padding: 3px 6px;
      font-weight: normal;
      position: relative;
      top: -5px;
      color: $color-primary;

      span {
        top: 2px;
        position: relative;
      }

      &:hover {
        color: #fff;
        background: $color-primary;
      }
    }
  }

  p {
    margin-top: 0.5em;
  }
}

.home {
  //background: #171f26;
}

.slogan {
  text-align: center;
  padding-bottom: 10px;

  h2 {
    font-size: 47px;
    font-weight: 300;
    margin: 0;
  }
}


.starter {
  width: 360px;
  height: 50px;
  display: flex;
  margin: 40px auto;
  border-radius: 4px;
  overflow: hidden;
  color: #fff;

  code {
    flex: 1;
    background: #283542;
    text-align: center;
    font-family: "Source Code Pro", Monaco, Menlo, Consolas, monospace;
    line-height: 30px;
    padding: 10px;
    font-weight: 300;
    border-radius: 0;

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
.run {
  text-align: center;
  background-color: #eee;
  padding:100px 0;
}
</style>
