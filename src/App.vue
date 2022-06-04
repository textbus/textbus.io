<script lang="ts" setup>
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { AppService } from '@/services/app.service';
import { ref } from 'vue';
import { dependencies } from '../package.json'

const isHome = ref<boolean>(false)
const injector = useReflectiveInjector([
  AppService
])
const appService = injector.get(AppService)
appService.onInHome.subscribe(b => {
  isHome.value = b
})
</script>
<template>
  <header :class="{'in-home': isHome}">
    <div class="ui-container">
      <div class="ui-pull-left ui-clearfix">
        <h1 class="logo ui-pull-left">
          <router-link to="/"><img src="./assets/logo.png" alt="TextBus logo"></router-link>
        </h1>
        <nav class="ui-pull-left">
          <ul class="ui-clearfix">
            <li>
              <router-link to="/docs" active-class="active">文档</router-link>
            </li>
            <li>
              <router-link to="/api" active-class="active">API</router-link>
            </li>
            <li>
              <router-link to="/auth" active-class="active">商业授权</router-link>
            </li>
            <li>
              <router-link to="/sponsor" active-class="active">赞助</router-link>
            </li>
            <li>
              <router-link to="/v1" active-class="active">1.0 文档</router-link>
            </li>
            <li>
              <router-link to="/collab" active-class="active">在线协同演示</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="ui-pull-right">
        <nav>
          <ul class="ui-clearfix">
            <li class="qq-group">
              <a href="javascript:;">QQ 群</a>
              <div><img src="./assets/qq-group.png" alt="qq 群"></div>
            </li>
            <li>
              <a href="https://github.com/textbus/textbus" target="_blank"><span class="icon-github"></span> Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <div class="ui-container">
      <div class="ui-row">
        <div class="ui-col-sm-6 list">
          <h4>当前版本</h4>
          <ul>
            <li>Core 核心库：{{ dependencies['@textbus/core'].substring(1) }}</li>
            <li>Browser 浏览器中间层：{{ dependencies['@textbus/browser'].substring(1) }}</li>
            <li>Editor 编辑器：{{ dependencies['@textbus/editor'].substring(1) }}</li>
            <li>Collaborate 协作库：{{ dependencies['@textbus/collaborate'].substring(1) }}</li>
          </ul>
        </div>
        <div class="ui-col-sm-6 about">
          <h4>关注我们</h4>
          <div class="ui-clearfix">
            <div class="ui-pull-left"><img src="./assets/qq-group-mini.png">加入 QQ 群</div>
            <div class="ui-pull-left"><img src="./assets/bilibili.png">关注 bilibili</div>
          </div>
        </div>
        <div class="ui-col-sm-6 list">
          <h4>浏览器兼容</h4>
          <ul>
            <li>Chrome</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>Edge</li>
          </ul>
        </div>
        <div class="ui-col-sm-6">
          <div class="copyright">
            <h4><img src="./assets/logo.png" alt=""></h4>
            <p>遵循 GPL-3.0 License 开源协议</p>
            <div>Copyright © 2022 画笔</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "./scss/varibles";

footer {
  height: 230px;
  background: #171f26;
  margin-top: -230px;
  position: relative;
  padding: 26px;
  z-index: 2;
  color: rgba(255, 255, 255, .4);

  h4 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 15px;
  }

  .about {
    .ui-clearfix {
      padding-top: 5px;
    }

    .ui-pull-left {
      font-size: 14px;
      text-align: center;
      margin-right: 1em;
    }

    img {
      width: 120px;
      height: 120px;
      display: block;
      margin-bottom: 12px;
    }
  }
}

.copyright {
  max-width: 800px;
  margin: 0 auto;
  font-size: 14px;

  img {
    width: 80px;
  }

  p {
    font-weight: bold;
    margin: 0;
    padding-bottom: 5px;
  }
}

.list {
  font-size: 14px;
  line-height: 1.5;

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;

    li {
      &:before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: $color-primary;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
  }
}

.qq-group {
  position: relative;

  &:hover {
    div {
      display: block;
    }
  }

  div {
    position: absolute;
    width: 252px;
    top: 100%;
    left: 50%;
    margin-left: -127px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    display: none;

    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
      top: -12px;
      left: 50%;
      margin-left: -6px;
    }

    img {
      border-radius: 4px;
      overflow: hidden;
      width: 100%;
      display: block;
    }
  }
}


header {
  height: 70px;
  padding: 10px 0;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 50;
  //backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid #eee;

  &.in-home {
    //background: #171f26;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    //border-bottom: 0;
    //a {
    //  color: rgba(255, 255, 255, .9);
    //}
  }
}

.logo {
  margin: 0;
  line-height: 50px;

  img {
    width: 100px;
  }
}

nav {
  line-height: 50px;
  font-size: 15px;
  font-weight: 400;

  ul {
    list-style: none;
    margin: 0;

    li {
      float: left;
      padding: 10px 15px;
      line-height: 30px;
    }
  }

  a {
    color: #333;
    //opacity: 0.7;
    text-decoration: none;
    transition: color .2s;
    position: relative;

    &.active {
      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -27px;
        border-bottom: 3px solid #00baf4;
        margin-left: -3px;
        margin-right: -3px;
      }
    }

    &:hover {
      color: #00baf4;
    }
  }
}


main {
  padding-top: 70px;
  padding-bottom: 230px;
  min-height: 100%;
}
</style>
