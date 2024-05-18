import axios from 'axios'
import { Editor } from '@textbus/xnote'
import { debounceTime, merge, Subscription } from '@tanbo/stream'
import { createRef, createSignal, onUnmounted } from '@viewfly/core'
import { useProduce } from '@viewfly/hooks'
import { createApp } from '@viewfly/platform-browser'
import '@textbus/xnote/bundles/index.css'

import './index.scss'
import { componentLoaders } from './browser'

export function App() {
  const editorRef = createRef<HTMLElement>()

  const [viewModel, updateViewModel] = useProduce({
    pages: [] as string[],
    currentPath: ''
  })

  const activatedPath = createSignal('')
  const isEditorActivated = createSignal(false)
  const hasTouchedEditorItem = createSignal(false)

  enum TipStatus {
    DISABLE = 'disable',
    ENABLE = 'enable'
  }

  const tipSaveStyle = createSignal(TipStatus.DISABLE)

  let editor: Editor | null = null
  axios.get('/api/tree').then(response => {
    updateViewModel(draft => {
      draft.pages = response.data
    })
  })

  function edit(path: string) {
    activatedPath.set(path)
    hasTouchedEditorItem.set(true)
    axios.get('/api/doc/get', {
      params: { path }
    }).then(response => {
      updateViewModel(draft => {
        draft.currentPath = path
      })
      removeOldEditor()
      createNewEditor(response)
    })
  }

  function save() {
    if (editor?.isReady) {
      const html = editor.getHTML()
      axios.post('/api/doc/save', {
        path: viewModel().currentPath,
        html
      }).then(() => {
        // 保存成功
        tipSaveStyle.set(TipStatus.ENABLE)
        setTimeout(() => {
          tipSaveStyle.set(TipStatus.DISABLE)
        }, 1000)
      })
    }
  }

  function removeOldEditor() {
    if (editor) {
      editor.destroy()
      editor = null
      isEditorActivated.set(false)
    }
  }

  let sub = new Subscription()

  onUnmounted(() => {
    sub.unsubscribe()
  })

  function createNewEditor(response: { data: { doc: string } }) {
    sub.unsubscribe()
    editor = new Editor({
      content: response.data.doc,
      viewOptions: {
        componentLoaders: componentLoaders
      }
    })
    editor.mount(editorRef.current!)
    editor.onReady.subscribe(() => {
      isEditorActivated.set(true)
    })
    sub = merge(editor.onSave, editor.onChange.pipe(debounceTime(3000))).subscribe(() => {
      save()
    })
  }

  return () => {
    return (
      <div class="container">
        <div class="nav">
          {
            viewModel().pages.map(path => {
              return (
                <div>
                  <a
                    href="javascript:;"
                    onClick={() => edit(path)}
                    class={['nav-item', { active: activatedPath() === path }]}
                  >{path}</a>
                </div>
              )
            })
          }
        </div>
        <div class="right">
          {
            !hasTouchedEditorItem() && <p
                  style="color: #3eaf7c; margin-left: 10px;"
              >请在左侧条目中选择一个编辑项以启动编辑器</p>
          }
          <div class="editor" ref={editorRef}></div>
          {
            isEditorActivated() && <p>
                  <button type="button"
                          onClick={save} class="save-button">保存
                  </button>
                  <span class={['save-tip', tipSaveStyle()]}>保存成功!（温馨提示：可以同过快捷键`ctrl+s`进行快速保存哦）</span>
              </p>
          }
        </div>
      </div>
    )
  }
}

createApp(<App/>).mount(document.getElementById('app')!)
