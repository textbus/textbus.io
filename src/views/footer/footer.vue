<script setup lang="ts">
</script>

<template>
  <footer class="wrapper">
    <div class="inner">
      <div class="copyright">
        © 2022
        <a
          href="https://github.com/textbus/textbus"
          rel="external nofollow noreferrer"
          target="_blank"
        >TextBus</a>
        <br />Documentation licensed under
        <a
          href="https://github.com/textbus/textbus/blob/master/LICENSE"
          rel="external nofollow noreferrer"
          target="_blank"
        >GPL-3.0.</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  padding: 40px 0;
  color: rgba(255, 255, 255, 0.6);
  font-family: sans-serif;
  position: relative;
  background: #171f26;
  a {
    font-weight: 700;
    color: inherit;
    text-decoration-line: none;
    &:hover {
      color: white;
    }
  }
  .inner {
    padding: 0 20px;
  }
  .copyright {
    text-align: left;
    line-height: 1.4;
  }
}
</style>