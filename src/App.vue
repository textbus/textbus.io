<script lang="ts" setup>
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { AppService } from '@/services/app.service';
import { ref } from 'vue';

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
              <router-link to="/">API</router-link>
            </li>
            <li>
              <router-link to="/">商业授权</router-link>
            </li>
            <li>
              <router-link to="/">赞助</router-link>
            </li>
            <li>
              <router-link to="/v1" active-class="active">1.0 文档</router-link>
            </li>
            <li>
              <router-link to="/">关于</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="ui-pull-right">
        <nav>
          <ul class="ui-clearfix">
            <li>
              <router-link to="/">QQ 群</router-link>
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
      <div class="copyright">
        <p>遵循 GPL-3.0 License 开源协议</p>
        <div>Copyright © 2022 画笔</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "./scss/varibles";

.footer-top {
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}

.copyright {
  color: rgba(255, 255, 255, .25);
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  font-size: 14px;
  padding: 20px;

  p {
    font-weight: bold;
    margin: 0;
    padding-bottom: 5px;
  }
}

header {
  height: 70px;
  padding: 10px 0;
  background: #333;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;

  &.in-home {
    background: none;
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
    color: #fff;
    opacity: 0.7;
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
  padding-bottom: 80px;
  min-height: 100%;
}

footer {
  height: 80px;
  background: #171f26;
  margin-top: -80px;
  position: relative;
  z-index: 2;
}
</style>
