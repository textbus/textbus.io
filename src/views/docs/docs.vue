<script lang="ts">

</script>
<template>
  <div class="ui-container page">
    <div class="ui-row">
      <nav class="ui-col-md-4">
        <h3>开始</h3>
        <ul>
          <li>
            <router-link to="/docs/intro" active-class="active">介绍</router-link>
          </li>
          <li><a href="#">安装</a></li>
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
        <div class="doc-content">
          <router-view></router-view>
        </div>
      </div>
      <div class="ui-col-md-4"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../scss/varibles";

.page {
  padding-top: 30px;
  padding-bottom: 30px;
}

nav {
  font-size: 15px;
  h3 {
    font-size: 14px;
    font-weight: 400;
    opacity: .7;
  }

  ul {
    list-style: none;
    padding-left: 1em;
  }

  li {
    padding: 5px 0;

    a {
      color: #555;
      text-decoration: none;

      &.active {
        color: $color-primary;
      }
    }
  }
}

.doc-content {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
}
</style>
