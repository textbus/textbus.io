<template>
  <div class="container">
    <div class="nav">
      <div v-for="path in viewModel.pages">
        <a
          href="javascript:;"
          @click="edit(path)"
          class="nav-item"
          :class="{ active: activatedPath === path }"
        >{{ path }}</a>
      </div>
    </div>
    <div class="right">
      <p
        v-if="!hasTouchedEditorItem"
        style="color: #3eaf7c; margin-left: 10px;"
      >请在左侧条目中选择一个编辑项以启动编辑器</p>
      <div class="editor" ref="editorRef"></div>
      <p>
        <button v-if="isEditorActivated" type="button" @click="save()" class="save-button">保存</button>
        <span class="save-tip" :class="tipSaveStyle">保存成功!（温馨提示：可以同过快捷键`ctrl+s`进行快速保存哦）</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import axios from 'axios';
import { createEditor, Editor } from '@textbus/editor';
import { Keyboard } from '@textbus/core';

const editorRef = ref<HTMLElement>()

const viewModel = reactive({
  pages: [] as string[],
  currentPath: ''
})

const activatedPath = ref('')
const isEditorActivated = ref(false)
const hasTouchedEditorItem = ref(false)

enum TipStatus {
  DISABLE = 'disable',
  ENABLE = 'enable'
}
const tipSaveStyle = ref(TipStatus.DISABLE)

let editor: Editor | null = null
axios.get('/api/tree').then(response => {
  viewModel.pages = response.data
})

function edit(path: string) {
  activatedPath.value = path
  hasTouchedEditorItem.value = true
  axios.get('/api/doc/get', {
    params: { path }
  }).then(response => {
    viewModel.currentPath = path
    removeOldEditor()
    createNewEditor(response)
  })
}

function save() {
  if (editor) {
    const result = editor.getContents()
    const html = result.content
    axios.post('/api/doc/save', {
      path: viewModel.currentPath,
      html
    }).then(() => {
      // 保存成功
      tipSaveStyle.value = TipStatus.ENABLE
      setTimeout(() => {
        tipSaveStyle.value = TipStatus.DISABLE
      }, 1000)
    })
  }
}

function removeOldEditor() {
  if (editor) {
    editor.destroy()
    editor = null
    isEditorActivated.value = false
  }
}

function createNewEditor(response: { data: { doc: string } }) {
  editor = createEditor(editorRef.value!, {
    content: response.data.doc
  })
  editor.onReady.subscribe((injector) => {
    isEditorActivated.value = true
    const keyboard = injector.get(Keyboard)
    keyboard.addShortcut({
      keymap: { ctrlKey: true, key: 's' },
      action: () => {
        save()
      }
    })
  })
}
</script>

<style lang="scss">
body {
  margin: 0;
}
.container {
  margin: 0 auto;
  display: flex;
}

.nav {
  left: 0;
  height: 100%;
  padding: 0 10px;
  border-right: solid 1px gray;
}

.nav-item {
  text-decoration: none;
  color: #2c3e50;
  &:hover,
  &.active {
    color: #3eaf7c;
  }
}

.save-button {
  font-size: 15px;
  width: 80px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #3eaf7c;
    color: white;
  }
}

.save-tip {
  color: #3eaf7c;
  margin-left: 10px;
  transition-duration: 1s;
  transition-timing-function: linear;
  &.disable {
    opacity: 0;
  }
  &.enable {
    opacity: 1;
  }
}

.right {
  width: 800px;
}
</style>