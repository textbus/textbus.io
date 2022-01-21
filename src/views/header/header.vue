<script setup lang="ts">
import { useRouter } from 'vue-router';

const linkList = [
  { route: '', desc: 'Docs' },
  { route: '', desc: 'API' },
  { route: '', desc: 'News' },
  { route: '', desc: 'Plugins' },
  { route: '', desc: 'Themes' },
  { route: '', desc: 'About' },
]

const router = useRouter()

function clickLogo() {
  router.push('/')
}
</script>

<template>
  <header class="wrapper">
    <div class="nav-container">
      <img src="../../assets/logo.svg" alt="logo" class="logo-wrapper" @click="clickLogo"/>
      <nav class="link-container">
        <a v-for="item in linkList" :key="item.desc" class="nav-link">{{ item.desc }}</a>
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