<script setup lang="ts">
import Header from './views/header/header.vue'
import Footer from './views/footer/footer.vue'
</script>

<template>
  <div class="main-container">
    <Header />
    <router-view />
  </div>
  <Footer />
</template>

<style lang="scss">
body,
html,
#app {
  height: 100%;
}
.main-container {
  min-height: 100%;
  padding-bottom: 192px;
  box-sizing: border-box;
  text-align: center;
}
</style>
