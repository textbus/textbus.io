<script lang="ts" setup>
import Editor from './_components/editor.vue'
</script>
<template>
  <div class="editors">
    <div class="editor-item">
      <Editor username="张三" color="#1f2baf"></Editor>
    </div>
    <div class="line"></div>
    <div class="editor-item">
      <Editor username="李四" color="#2aad30"></Editor>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.editors {
  display: flex;

  .editor-item {
    flex: 1;
  }

  .line {
    width: 2px;
    background: #f5f5f5;
  }
}
</style>
