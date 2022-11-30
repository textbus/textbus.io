<script lang="ts" setup>
import AnchorLinks from '../../components/anchor-links/anchor-links.vue'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { DocService } from '@/services/doc.service';

useReflectiveInjector([DocService])
</script>
<template>
  <div class="ui-container page">
    <div class="nav">
      <nav>
        <h3>起步</h3>
        <ul>
          <li><router-link to="/docs/start" active-class="active">开始</router-link></li>
          <li><router-link to="/docs/config" active-class="active">配置</router-link></li>
          <li><router-link to="/docs/members" active-class="active">属性和方法</router-link></li>
          <li><router-link to="/docs/examples" active-class="active">在框架中使用</router-link></li>
        </ul>
        <h3>开发指南</h3>
        <ul>
          <li><router-link to="/docs/guide" active-class="active">准备</router-link></li>
          <li><router-link to="/docs/component" active-class="active">组件</router-link></li>
          <li><router-link to="/docs/hooks" active-class="active">Hooks 与生命周期</router-link></li>
          <li><router-link to="/docs/slot" active-class="active">插槽与格式</router-link></li>
          <li><router-link to="/docs/plugin" active-class="active">插件</router-link></li>
          <li><router-link to="/docs/school" active-class="active">视频教程 <i class="tip">HOT</i></router-link></li>
        </ul>
        <h3>高级</h3>
        <ul>
          <li><router-link to="/docs/advance" active-class="active">架构设计</router-link></li>
          <li><router-link to="/docs/collab" active-class="active">在线协作</router-link></li>
        </ul>
        <h3>其它</h3>
        <ul>
          <li><router-link to="/docs/upgrade" active-class="active">升级指南</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="doc-content v2-doc ui-clearfix">
      <router-view></router-view>
      <p class="ad">官方文档由 Textbus 编写</p>
    </div>
    <div class="links">
      <anchor-links></anchor-links>
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

.tip {
  font-size: 12px;
  background: $color-danger;
  color: #fff;
  border-radius: 4px;
  padding: 1px 3px;
  position: relative;
  display: inline-block;
  top: -2px;
  transform: scale(.8);
}
</style>
