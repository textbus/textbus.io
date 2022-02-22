<script lang="ts" setup>
import AnchorLinks from '../../components/anchor-links/anchor-links.vue'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { DocService } from '@/services/doc.service';

useReflectiveInjector([DocService])
</script>
<template>
  <div class="ui-container page">
    <div class="ui-row">
      <nav class="ui-col-md-4 auto-hide">
        <h3>开始</h3>
        <ul>
          <li>
            <router-link to="/v1/start" active-class="active">安装</router-link>
          </li>
          <li>
            <router-link to="/v1/upload" active-class="active">上传图片及资源</router-link>
          </li>
          <li>
            <router-link to="/v1/examples" active-class="active">在框架中使用</router-link>
          </li>
        </ul>
        <h3>开发者中心</h3>
        <ul>
          <li>
            <router-link to="/v1/design" active-class="active">架构设计</router-link>
          </li>
          <li>
            <router-link to="/v1/tutorial" active-class="active">基础教程</router-link>
          </li>
          <li>
            <router-link to="/v1/component" active-class="active">自定义组件</router-link>
          </li>
          <li>
            <router-link to="/v1/formatter" active-class="active">自定义格式</router-link>
          </li>
          <li>
            <router-link to="/v1/plugin" active-class="active">自定义插件</router-link>
          </li>
          <li>
            <router-link to="/v1/tool" active-class="active">自定义工具</router-link>
          </li>
          <li>
            <router-link to="/v1/api" active-class="active">API 概览</router-link>
          </li>
        </ul>
      </nav>
      <div class="ui-col-md-16">
        <div class="doc-content v1-doc ui-clearfix">
          <router-view></router-view>
        </div>
      </div>
      <div class="ui-col-md-4 auto-hide">
        <anchor-links></anchor-links>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../_scss/doc";
</style>
