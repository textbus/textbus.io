<script setup lang="ts">
import { RoutePath } from '@/router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const linkList = [
  { route: '', desc: 'Docs', method: () => { router.push(RoutePath.DOCS) } },
  { route: '', desc: 'API' },
  { route: '', desc: 'News' },
  { route: '', desc: 'Plugins' },
  { route: '', desc: 'Themes' },
  { route: '', desc: 'About' },
]


enum LogoState {
  MOUSE_ENTER = 'mouse-enter',
  MOUSE_LEAVE = 'mouse-leave'
}

function clickLogo() {
  router.push(RoutePath.HOME)
}

const logoBackStyle = ref('')
function onTriggerLogoBack(state: LogoState) {
  logoBackStyle.value = state === LogoState.MOUSE_ENTER ? 'background: white;' : 'background: transparent;'
}
</script>

<template>
  <header class="wrapper">
    <div class="nav-container">
      <div class="logo-back" :style="logoBackStyle"></div>
      <img
        src="../../assets/logo.png"
        alt="text bus logo"
        class="logo-wrapper"
        @mouseenter="onTriggerLogoBack(LogoState.MOUSE_ENTER)"
        @mouseleave="onTriggerLogoBack(LogoState.MOUSE_LEAVE)"
        @click="clickLogo"
      />
      <nav class="link-container">
        <a v-for="item in linkList" :key="item.desc" class="nav-link" @click="item.method">{{ item.desc }}</a>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  padding: 10px 0;
  position: relative;
  user-select: none;
}
.nav-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 20px;
}
.logo-wrapper {
  cursor: pointer;
  width: 50px;
  height: 50px;
}
.logo-back {
  cursor: pointer;
  margin-right: -40px;
  width: 32px;
  height: 24px;
  background-color: transparent;
}
.link-container {
  display: flex;
  justify-content: space-around;
  padding-left: 20px;
}
.nav-link {
  cursor: pointer;
  color: #fff;
  line-height: 50px;
  opacity: 0.7;
  font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: inline-block;
  padding: 0 15px;
  &:hover {
    opacity: 1;
    color: #1094e8;
  }
}
</style>