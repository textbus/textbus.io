<script setup lang="ts">
import Header from './views/header/header.vue'
import Footer from './views/footer/footer.vue'
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style lang="scss">
body {
  margin: 0px;
  background: #171f26;
  color: #444;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>
