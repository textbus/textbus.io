<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
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
import { Collaborate, CollaborateCursor, RemoteSelection } from '@textbus/collaborate';
import { WebrtcProvider } from 'y-webrtc'

const toolbar = ref<HTMLElement>()
const editorWrapper = ref<HTMLElement>()

const props = defineProps({
  username: String,
  color: String
})

const viewModel = reactive({
  users: [] as any[]
})

let editor: Editor
let provide: WebrtcProvider

onMounted(() => {
  editor = createEditor(editorWrapper.value!, {
    placeholder: '欢迎你体验 Textbus 在线协同开发版...',
    providers: [
      Collaborate, // 协同支持核心类
      CollaborateCursor, // 协同多光标实现类
      {
        provide: History, // 替换内核历史记录管理类为协同历史记录管理类
        useClass: Collaborate
      }
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
      // 随机取一个用户
      const user = props

      // 设置当前用户信息
      provide.awareness.setLocalStateField('user', user)

      // 启用协同
      collaborate.setup()

      // 监听本地用户选区变化，并同步
      collaborate.onSelectionChange.subscribe(paths => {
        const localSelection: RemoteSelection = {
          username: user.username!,
          color: user.color!,
          paths
        }
        provide.awareness.setLocalStateField('selection', localSelection)
      })

      // 监听远端数据变化
      provide.awareness.on('update', () => {
        const users: any[] = []
        const remoteSelections: RemoteSelection[] = []
        provide.awareness.getStates().forEach(state => {
          if (state.user) {
            users.push(state.user)
          }
          if (state.selection) {
            remoteSelections.push(state.selection)
          }
        })
        // 过滤本地用户信息
        const selections = remoteSelections.filter(i => i.username !== user.username)
        // 绘制远端用户选区
        collaborate.updateRemoteSelection(selections)
        // 更新用户信息
        viewModel.users = users
      })
    }
  })
})

onUnmounted(() => {
  provide?.disconnect()
  editor.destroy()
})
</script>
<template>
  <div class="ui-container-fluid users">
    <div class="user" v-for="item in viewModel.users" :style="{background: item.color}">{{ item.username }}</div>
  </div>
  <div class="toolbar" ref="toolbar">
  </div>
  <main class="ui-container-fluid">
    <div class="editor-wrapper" ref="editorWrapper"></div>
  </main>
</template>
<style lang="scss" scoped>
.users {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  height: 60px;
  font-size: 14px;

  .user {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
  }
}

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

  .textbus-toolbar-group {
    float: none;
    display: inline-block;
  }
}
</style>
