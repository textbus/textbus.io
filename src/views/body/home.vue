<script setup lang="ts">
</script>

<template>
  <div class="banner">
    <div>
      <h2 class="introduction">A fast, simple & powerful rich text editor</h2>
      <div class="banner-start">
        <span class="banner-start-command">npm install @textbus/editor</span>
        <p class="banner-start-link">
          <i class="fa fa-arrow-right"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  color: rgba(255, 255, 255, 0.8);
}
.introduction {
  padding-top: 100px;
  line-height: 1.15;
  font-weight: 300;
  font-size: 48px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}
.banner-start {
  padding: 60px 0;
  font-size: 18px;
  text-align: center;
}
.banner-start-command {
  background: #283542;
  font-family: "Source Code Pro", Monaco, Menlo, Consolas, monospace;
  font-size: 18px;
  display: inline-block;
  padding: 15px 20px;
  &::before {
    content: "$";
    opacity: 0.5;
    padding-right: 10px;
  }
}
.banner-start-link {
  color: #fff;
  background: #0e83cd;
  display: inline-block;
  padding: 17px;
  text-decoration: none;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background: #1094e8;
  }
}
</style>
