<script setup lang="ts">
import Header from './views/header/header.vue'
import Footer from './views/footer/footer.vue'
</script>

<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style lang="scss" scoped>
nav {
  height: 50px;
  padding: 10px 0;
}
</style>
