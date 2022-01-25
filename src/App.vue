<script setup lang="ts">
import Header from './views/header/header.vue'
import Footer from './views/footer/footer.vue'
</script>

<template>
  <Header />
  <div class="middle-container">
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
.middle-container {
  min-height: 79%;
}
</style>
