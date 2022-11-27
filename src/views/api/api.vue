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
        <h3>数据模型</h3>
        <ul>
<!--          <li>-->
<!--            <router-link to="/api/formatter" active-class="active">格式 Formatter</router-link>-->
<!--          </li>-->
          <li>
            <router-link to="/api/slot" active-class="active">插槽 Slot</router-link>
          </li>
          <li>
            <router-link to="/api/component" active-class="active">组件 Component</router-link>
          </li>
          <li>
            <router-link to="/api/slots" active-class="active">插槽集 Slots</router-link>
          </li>
<!--          <li>-->
<!--            <router-link to="/api/hooks" active-class="active">勾子函数 Hooks</router-link>-->
<!--          </li>-->
        </ul>
        <h3>内核模块 Core</h3>
        <ul>
          <li>
            <router-link to="/api/commander" active-class="active">命令 Commander</router-link>
          </li>
          <li>
            <router-link to="/api/controller" active-class="active">控制器 Controller</router-link>
          </li>
          <li>
            <router-link to="/api/history" active-class="active">历史记录 History</router-link>
          </li>
          <li>
            <router-link to="/api/keyboard" active-class="active">键盘管理 Keyboard</router-link>
          </li>
          <li>
            <router-link to="/api/output-renderer" active-class="active"><span>输出渲染器 OutputRenderer</span></router-link>
          </li>
          <li>
            <router-link to="/api/query" active-class="active">状态查询 Query</router-link>
          </li>
          <li>
            <router-link to="/api/registry" active-class="active">注册表 Registry</router-link>
          </li>
          <li>
            <router-link to="/api/renderer" active-class="active">渲染器 Renderer</router-link>
          </li>
          <li>
            <router-link to="/api/scheduler" active-class="active">调度器 Scheduler</router-link>
          </li>
          <li>
            <router-link to="/api/selection" active-class="active">选区 Selection</router-link>
          </li>
        </ul>
        <h3>扩展模块</h3>
        <ul>
          <li>
            <router-link to="/api/browser" active-class="active">浏览器模块 Browser</router-link>
          </li>
          <li>
            <router-link to="/api/editor" active-class="active">编辑器模块 Editor</router-link>
          </li>
          <li>
            <router-link to="/api/collaborate" active-class="active">协同模块 Collaborate</router-link>
          </li>
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

  &:before, &:after {
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
