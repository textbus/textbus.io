<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import {
  boldTool,
  cleanTool,
  colorTool,
  createEditor, defaultGroupTool,
  Editor,
  fontFamilyTool, fontSizeTool,
  headingTool,
  historyBackTool,
  historyForwardTool, imageTool, insertParagraphAfterTool, insertParagraphBeforeTool, italicTool,
  LinkJumpTipPlugin,
  linkTool,
  olTool,
  strikeThroughTool,
  tableAddTool, tableRemoveTool, textAlignTool, textBackgroundTool,
  textIndentTool,
  Toolbar,
  ulTool,
  underlineTool, unlinkTool
} from '@textbus/editor';
import { Collaborate } from '@textbus/collaborate';
import { WebrtcProvider } from 'y-webrtc'

const toolbar = ref<HTMLElement>()
const editorWrapper = ref<HTMLElement>()

let editor: Editor
let provide: WebrtcProvider

onMounted(() => {
  editor = createEditor(editorWrapper.value!, {
    placeholder: '欢迎你体验 Textbus 在线协同开发版...',
    providers: [
      Collaborate
    ],
    plugins: [
      new Toolbar([
        [historyBackTool, historyForwardTool],
        [defaultGroupTool],
        [headingTool],
        [boldTool, italicTool, strikeThroughTool, underlineTool],
        [olTool, ulTool],
        [fontSizeTool, textIndentTool],
        [colorTool, textBackgroundTool],
        [insertParagraphBeforeTool, insertParagraphAfterTool],
        [fontFamilyTool],
        [linkTool, unlinkTool],
        [imageTool],
        [textAlignTool],
        [tableAddTool, tableRemoveTool],
        [cleanTool]
      ], toolbar.value!),
      new LinkJumpTipPlugin()
    ],
    setup(starter) {
      const collaborate = starter.get(Collaborate)

      provide = new WebrtcProvider('textbus', collaborate.yDoc)
      collaborate.setup()
    }
  })
})

onUnmounted(() => {
  provide?.disconnect()
  editor.destroy()
})
</script>
<template>
  <div class="toolbar" ref="toolbar">
  </div>
  <main class="ui-container-fluid">
    <div class="editor-wrapper" ref="editorWrapper"></div>
  </main>
</template>
<style lang="scss" scoped>
.toolbar {
  text-align: center;
  position: sticky;
  top: 70px;
  z-index: 10;
}

main {
  padding-top: 30px;
  padding-bottom: 30px;
  background: #f5f5f5;
}

.editor-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

::v-deep {
  .textbus-container {
    height: 800px;
    border-radius: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  }

  .textbus-ui-middle {
    border-width: 0;
  }

  .textbus-toolbar-wrapper {
    border-width: 0;
  }
}
</style>
