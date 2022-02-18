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
          <li>
            <router-link to="/docs/start" active-class="active">开始</router-link>
          </li>
          <li><router-link to="/docs/config" active-class="active">配置</router-link></li>
        </ul>
        <h3>组件</h3>
        <ul>
          <li><a href="#">自定义组件</a></li>
          <li><a href="#">组件加载器</a></li>
          <li><a href="#">数据模型</a></li>
          <li><a href="#">生合周期</a></li>
          <li><a href="#">渲染</a></li>
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
</style>
