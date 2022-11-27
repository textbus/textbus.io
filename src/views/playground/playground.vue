<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { createEditor, Editor } from '@textbus/editor';
import { useReflectiveInjector } from '@tanbo/vue-di-plugin';
import { AppService } from '@/services/app.service';
import { html } from './html';

const injector = useReflectiveInjector()
const appService = injector.get(AppService)

appService.onInHome.next(true)

onUnmounted(() => {
  appService.onInHome.next(false)
})
const editor = ref<HTMLElement>()
let editorInstance: Editor | null = null
onMounted(() => {
  editorInstance = createEditor({
    theme: 'darkline',
    content: html
  });
  (window as any).textbus= editorInstance
  editorInstance.mount(editor.value!)
})

onUnmounted(() => {
  editorInstance?.destroy();
  (window as any).textbus= null
})

</script>
<template>
  <div class="home">
    <div class="banner">
      <div class="ui-container">
        <div class="editor-wrapper">
          <div ref="editor"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../scss/varibles";

.banner {
  margin-top: -70px;
  padding-top: 70px;
  position: relative;
  //background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
  //background: linear-gradient(90deg, rgba(0, 0, 0, 0.15) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(0, 0, 0, 0.15) 3%, rgba(0, 0, 0, 0) 3%) rgba(48, 69, 75,1);
  //background-position: center center;

  //background: url(../../assets/bg02.jpg) center center no-repeat;
  //background-size: cover;
  //background: conic-gradient(
  //    from -45deg at 25% 300px,
  //    hsla(170deg, 100%, 70%, .7),
  //    transparent 50%,
  //    hsla(219deg, 90%, 80%, .5) 100%),
  //linear-gradient(-45deg, #060d5e, #002268);
  //background: conic-gradient(from -45deg at 25% 300px, hsl(198deg 10% 49% / 77%), rgb(0 0 0 / 42%) 50%, hsla(140deg, 62%, 94%, 0.27) 100%), linear-gradient(-45deg, #404961, rgb(76 100 104));
  //color: #fff;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.15) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(0, 0, 0, 0.15) 3%, rgba(0, 0, 0, 0) 3%) rgb(104 65 16);
  background-size: 20px 20px;

  .ui-container {
    max-width: 960px;
  }
}

.editor-wrapper {
  padding: 20px 0 40px;
}
</style>
