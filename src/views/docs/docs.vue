<script lang="ts" setup>
import AnchorLinks from '../../components/anchor-links/anchor-links.vue'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { DocService } from '@/services/doc.service';

useReflectiveInjector([DocService])
</script>
<template>
  <div class="ui-container page">
    <div class="ui-row">
      <nav class="ui-col-md-4">
        <h3>起步</h3>
        <ul>
          <li><router-link to="/docs/start" active-class="active">开始</router-link></li>
          <li><router-link to="/docs/config" active-class="active">配置</router-link></li>
          <li><router-link to="/docs/members" active-class="active">属性和方法</router-link></li>
          <li><router-link to="/docs/examples" active-class="active">在框架中使用</router-link></li>
        </ul>
        <h3>组件</h3>
        <ul>
          <li><router-link to="/docs/component" active-class="active">自定义组件</router-link></li>
          <li><router-link to="/docs/hooks" active-class="active">Hooks 与生命周期</router-link></li>
          <li><router-link to="/docs/slot" active-class="active">插槽</router-link></li>
        </ul>
        <h3>格式</h3>
        <ul>
          <li><a href="#">自定义格式</a></li>
          <li><a href="#">格式加载器</a></li>
          <li><a href="#">渲染</a></li>
        </ul>
        <h3>数据模型</h3>
        <ul>
          <li><a href="#">数据结构</a></li>
          <li><a href="#">状态查询</a></li>
          <li><a href="#">动态应用格式</a></li>
          <li><a href="#">动态插入组件</a></li>
        </ul>
        <h3>高级</h3>
        <ul>
          <li><a href="#">选区</a></li>
          <li><a href="#">命令</a></li>
          <li><a href="#">动态插入组件</a></li>
        </ul>
      </nav>
      <div class="ui-col-md-16">
        <div class="doc-content v2-doc">
          <router-view></router-view>
          <p class="ad">官方文档由 TextBus 编写</p>
        </div>
      </div>
      <div class="ui-col-md-4">
        <anchor-links></anchor-links>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../_scss/doc";
.ad {
  font-size: .9em;
  text-align: center;
  color: $color-gray;
  &:before,&:after {
    content: "";
    display: inline-block;
    width: 2em;
    height: 1px;
    background: $color-gray;
    vertical-align: middle;
  }
}
</style>
