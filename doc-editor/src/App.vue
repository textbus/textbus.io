<template>
  <div class="container">
    <div class="nav">
      <div v-for="item in viewModel.pages">
        <a href="javascript:;" @click="edit(item)">{{ item }}</a>
      </div>
    </div>
    <div class="right">
      <div class="editor" ref="editorRef"></div>
      <p>
        <button type="button" @click="save()">保存</button>
        <span>{{ viewModel.message }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import axios from 'axios';
import { createEditor, Editor } from '@textbus/editor';
import { Keyboard } from '@textbus/core';

export default defineComponent({
  name: 'App',
  setup() {
    const editorRef = ref<HTMLElement>()

    const viewModel = reactive({
      pages: [] as string[],
      currentPath: '',
      message: ''
    })

    let editor: Editor | null = null
    axios.get('/api/tree').then(response => {
      viewModel.pages = response.data
    })

    function edit(path: string) {
      axios.get('/api/doc/get', {
        params: {
          path
        }
      }).then(response => {
        viewModel.currentPath = path
        if (editor) {
          editor.destroy()
        }
        editor = createEditor(editorRef.value!, {
          content: response.data.doc
        })
        editor.onReady.subscribe((injector) => {
          const keyboard = injector.get(Keyboard)
          keyboard.addShortcut({
            keymap: { ctrlKey: true, key: 's' },
            action: () => {
              save()
            }
          })
        })
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
          viewModel.message = '保存成功'
          setTimeout(() => {
            viewModel.message = ''
          }, 2000)
        })
      }
    }

    return {
      editorRef,
      viewModel,
      edit,
      save
    }
  }
});
</script>

<style>
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

.right {
  width: 800px;
}
</style>
