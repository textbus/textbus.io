<script lang="ts" setup>
import AnchorLinks from '../../components/anchor-links/anchor-links.vue'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { DocService } from '@/services/doc.service';

useReflectiveInjector([DocService])
</script>
<template>
  <div class="ui-container page">
    <div class="ui-row">
      <div class="ui-col-md-4">
        <nav>
          <h3>Core 模块</h3>
          <ul>
            <li><router-link to="/api/start" active-class="active">开始</router-link></li>
            <li><router-link to="/api/NativeRenderer" active-class="active">NativeRenderer</router-link></li>
            <li><router-link to="/api/RootComponentRef" active-class="active">RootComponentRef</router-link></li>
            <li><router-link to="/api/Commander" active-class="active">Commander</router-link></li>
            <li><router-link to="/api/History" active-class="active">History</router-link></li>
            <li><router-link to="/api/Keyboard" active-class="active">Keyboard</router-link></li>
            <li><router-link to="/api/OutputRenderer" active-class="active">OutputRenderer</router-link></li>
            <li><router-link to="/api/Query" active-class="active">Query</router-link></li>
            <li><router-link to="/api/Registry" active-class="active">Registry</router-link></li>
            <li><router-link to="/api/Renderer" active-class="active">Renderer</router-link></li>
            <li><router-link to="/api/Selection" active-class="active">Selection</router-link></li>
            <li><router-link to="/api/Translator" active-class="active">Translator</router-link></li>
            <li><router-link to="/api/Starter" active-class="active">Starter</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="ui-col-md-16">
        <div class="doc-content v2-doc ui-clearfix">
          <router-view></router-view>
          <p class="ad">官方文档由 Textbus 编写</p>
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
