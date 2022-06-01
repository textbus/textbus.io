<script lang="ts" setup>
import { onMounted, onUnmounted, ref, shallowReactive } from 'vue';
import {
  ComponentInstance,
  Subscription,
  RootComponentRef,
  auditTime,
  Renderer,
  merge,
  fromPromise, timeout, skip
} from '@textbus/core'
import {
  createEditor,
  Editor,
  LinkJumpTipPlugin,
  Toolbar,
  defaultTools, TableComponentCursorAwarenessDelegate
} from '@textbus/editor';
import {
  collaborateModule,
  CollaborateCursorAwarenessDelegate,
  RemoteSelection, Collaborate
} from '@textbus/collaborate';
import { WebsocketProvider } from 'y-websocket'
import { Viewer } from '@textbus/browser'
import { fromEvent } from '@tanbo/stream';

const toolbar = ref<HTMLElement>()
const editorWrapper = ref<HTMLElement>()

let editor: Editor

interface Header {
  component: ComponentInstance
  highlight: boolean,
  nativeNode: HTMLElement
}

const viewModel = shallowReactive({
  users: [] as User[],
  headers: [] as Header[],
  isLoaded: false
})

export interface User {
  color: string
  name: string
}

const sub = new Subscription()

function updateHeader(rootComponentRef: RootComponentRef, renderer: Renderer) {
  const headers: Header[] = []
  rootComponentRef.component.slots.toArray().forEach(slot => {
    slot.sliceContent().forEach(i => {
      if (typeof i === 'string') {
        return
      }
      if (i.name === 'HeadingComponent') {
        const vNode = renderer.getVNodeByComponent(i)!
        const nativeElement = renderer.getNativeNodeByVNode(vNode) as HTMLElement
        headers.push({
          highlight: false,
          component: i,
          nativeNode: nativeElement
        })
      }
    })
  })
  viewModel.headers = headers
}

onMounted(() => {
  editor = createEditor({
    theme: 'light',
    autoHeight: true,
    autoFocus: true,
    markdownDetect: true,
    minHeight: '800px',
    placeholder: '欢迎你体验 Textbus 在线协同开发版...',
    imports: [
      collaborateModule
    ],
    providers: [
      {
        provide: CollaborateCursorAwarenessDelegate,
        useClass: TableComponentCursorAwarenessDelegate
      }
    ],
    plugins: [
      new Toolbar(defaultTools, toolbar.value!),
      new LinkJumpTipPlugin()
    ],
    setup(starter) {
      const collaborate = starter.get(Collaborate)
      const coreEditor = starter.get(Viewer)

      const provide = new WebsocketProvider('wss://textbus.io/api', 'collab', collaborate.yDoc)

      coreEditor.addInitBeforeListener(new Promise<void>((resolve) => {
        provide.on('sync', (is: boolean) => {
          if (is) {
            resolve()
          }
        })
      }))


      const firstNameText = '王、李、张、刘、陈、杨、黄、赵、周、吴、徐、孙、马、胡、朱、郭、何、罗、高、林'.replace(/、/g, '')
      const lastNameText = '本义既为女子所生子嗣则同一女子所生子嗣组成的亲族也可以称为姓以表示其同出于一个女性始祖的这种特殊的亲属关系这是姓的另一引申义此种亲族组织强调女性始祖则当如许多学者所推拟的其最初必形成于母系氏族社会中即夫从妻居子女属于母族世系以母方计对于这种具有血缘关系的亲属组织的名称杨希枚先生主张称为姓族典籍所记姬姓姜姓嬴姓最初应皆属母系姓族姬姜则是此种母系姓族之名号进入父系氏族社会后妻从夫居子女不再属母族而归于父族世系以父方计所以母系姓族遂转为父系姓族此后父系姓族仍然使用着母系姓族的名号其四姓在东周文献中有时是指姓族之名号如国语周语下言赐姓曰姜之姓即应理解为所赐姓族之名号即姜又如左传哀公五月昭夫人孟子卒昭公娶于吴故不书姓很明显姓在这里是指吴女所属姓族之名号即姬所谓姓族之姓与作姓族名号讲的姓是一实一名属于两种概念范畴所以会发生此种混同当如杨希枚先生所言是由于名代表实积久而以实为名于是产生姬姜之类姓之名号就是姓的概念司马迁在史记中常言姓某氏没能区别古代姓与氏之不同但他所说的姓意思即是指姓族之名号妘黄帝住姬水之滨以姬为姓司马迁在史记五帝本纪中说黄帝二十五子其得姓者十四人三语中胥臣解释说黄帝之子二十五宗其得姓者十四人为十二姓姬酉祁己滕箴任荀僖姞儇衣是也惟青阳与夷鼓同己姓后来的五帝少昊颛顼喾尧舜以及夏禹商族的祖先契周族的祖先农神后稷秦族的祖先伯益等都是黄帝的后代后稷承继姬姓他的后代建立了周朝周初周天子姬发大封诸侯时其中姬姓国个姬姓位于百家姓第位由姬姓演支出个姓占百家姓总姓姓的再演化出来的姓氏更是数不胜数了炎帝居姜水之旁以姜为姓姜姓还是今天中国的许多姓氏如吕姓谢姓齐姓高姓卢姓崔姓等的重要起源之一姜姓在当今以人口排名的中国百家姓氏中居于第位妘起源于帝喾高辛氏嬴起源于少昊金天氏；姚妫同源都是起源于帝舜；姒起源于大禹此外部落首领之子亦可得姓黄帝有二十五子得姓者十四人为姬酉祁己滕任荀葴僖姞儇依十二姓其中有四人分属二姓祝融之后为己董彭秃妘曹斟芈等八姓史称祝融八姓'

      const firstName = firstNameText.substr(Math.floor(Math.random() * firstNameText.length), 1)
      const lastName = lastNameText.substr(Math.floor(Math.random() * lastNameText.length), 1 + Math.floor(Math.random() * 2))

      const username = firstName + lastName
      const colors = [
        '#f00',
        '#448299',
        '#c92699',
        '#1f2baf',
        '#2aad30',
        '#5b7036',
        '#00a6ff'
      ]

      const user: User = {
        name: username,
        color: colors[Math.floor(Math.random() * colors.length)]
      }

      provide.awareness.setLocalStateField('user', user)

      collaborate.setup()

      const sub = collaborate.onSelectionChange.subscribe(paths => {
        const localSelection: RemoteSelection = {
          username: user.name,
          color: user.color,
          paths
        }
        provide.awareness.setLocalStateField('selection', localSelection)
      })

      provide.awareness.on('update', () => {
        const users: User[] = []
        const remoteSelections: RemoteSelection[] = []
        provide.awareness.getStates().forEach(state => {
          if (state.user) {
            users.push(state.user)
          }
          if (state.selection) {
            remoteSelections.push(state.selection)
          }
        })

        const selections = remoteSelections.filter(i => i.username !== user.name).map(i => {
          const paths = i.paths as any
          return {
            ...i,
            paths: {
              start: paths['start'] || paths.anchor,
              end: paths['end'] || paths.focus,
              focus: paths.focus || paths['end'],
              anchor: paths.anchor || paths['start']
            }
          }
        })

        collaborate.updateRemoteSelection(selections as any)
        viewModel.users = users
      })
      return () => {
        provide.disconnect()
        sub.unsubscribe()
      }
    }
  })
  const injector = editor.injector
  const renderer = injector.get(Renderer)
  sub.add(
    merge(
      fromPromise(editor.mount(editorWrapper.value!).then(() => {
        const rootComponentRef = injector.get(RootComponentRef)
        updateHeader(rootComponentRef, renderer)
        sub.add(editor.onChange.subscribe(() => {
          updateHeader(rootComponentRef, renderer)
        }))
      })),
      timeout(300)
    ).pipe(
      skip(1)
    ).subscribe(() => {
      viewModel.isLoaded = true
    })
  )
  sub.add(fromEvent(document, 'scroll').pipe(auditTime(100)).subscribe(() => {
    let current: Header
    for (const h of viewModel.headers) {
      const rect = h.nativeNode.getBoundingClientRect()
      h.highlight = false
      if (rect.top < 120) {
        current = h
      }
    }
    if (!current!) {
      current = viewModel.headers[0]
    }
    if (current) {
      current.highlight = true
    }
    viewModel.headers = [...viewModel.headers]
  }))
})

function toHeading(item: Header) {
  document.documentElement.scrollTop = item.nativeNode.offsetTop + 20
}


onUnmounted(() => {
  editor.destroy()
  sub.unsubscribe()
})
</script>
<template>
  <div class="toolbar" ref="toolbar">
  </div>
  <div class="editor-bg">
    <div class="editor-container ui-container">
      <div class="left">
        <div class="outlines">
          <ul>
            <li v-for="item in viewModel.headers" :class="{
              ['level-'+item.component.state]: true,
              active: item.highlight
            }">
              <span></span><a href="javascript:;" @click="toHeading(item)">{{ item.component.toString() }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="middle">
        <div class="editor-wrapper" :style="{visibility: viewModel.isLoaded ? 'visible' : 'hidden'}" ref="editorWrapper"></div>
        <div v-if="!viewModel.isLoaded" class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
      <div class="right">
        <div class="users" :style="{visibility: viewModel.isLoaded ? 'visible' : 'hidden'}">
          <div v-for="item in viewModel.users" :style="{background: item.color}">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../scss/varibles";

.spinner {
  position: absolute;
  left: 50%;
  top: 40px;
  margin-left: -25px;
  width: 50px;
  height: 40px;
  text-align: center;
}

.spinner > div {
  background-color: $color-primary;
  height: 100%;
  width: 5px;
  margin-left: 1px;
  margin-right: 1px;
  display: inline-block;

  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  animation-delay: -1.1s;
}

.spinner .rect3 {
  animation-delay: -1.0s;
}

.spinner .rect4 {
  animation-delay: -0.9s;
}

.spinner .rect5 {
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4)
  }
  20% {
    transform: scaleY(1.0)
  }
}

@keyframes sk-stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
  }
}

.outlines {
  position: sticky;
  top: 160px;
  font-size: 14px;

  ul {
    list-style: none;
    padding-left: 5px;
  }

  li {
    position: relative;
    padding: 3px 0;

    &.active {
      a {
        color: $color-primary;
      }

      span {
        background: $color-primary;
      }
    }

    &:before {
      content: "";
      width: 1px;
      position: absolute;
      left: 0;
      top: 50%;
      height: 100%;
      transform: translateX(-50%);
      background-color: $color-gray;
    }

    &:last-child {
      &:before {
        display: none;
      }
    }

    span {
      position: absolute;
      left: 0;
      top: 50%;
      display: inline-block;
      border-radius: 50%;
      background-color: $color-gray-dark;
      transform: translate(-50%, -50%);
    }

    &.level-h1 {
      padding-left: 10px;

      span {
        width: 7px;
        height: 7px;
      }
    }

    &.level-h2 {
      padding-left: 15px;

      span {
        width: 5px;
        height: 5px;
      }
    }

    &.level-h3 {
      padding-left: 20px;

      span {
        width: 3px;
        height: 3px;
      }
    }

    &.level-h4 {
      padding-left: 25px;

      span {
        width: 3px;
        height: 3px;
      }
    }

    &.level-h5 {
      padding-left: 30px;

      span {
        width: 3px;
        height: 3px;
      }
    }

    &.level-h6 {
      padding-left: 35px;

      span {
        width: 3px;
        height: 3px;
      }
    }
  }

  a {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: $color-gray-dark;
    text-decoration: none;
    border-radius: 4px;
    padding: 6px 10px;

    &:hover {
      background-color: rgba(0, 0, 0, .05);
      color: $color-primary;
    }
  }
}

.users {
  padding-top: 10px;
  padding-bottom: 10px;
  height: 50px;
  color: #fff;
  line-height: 30px;
  position: sticky;
  top: 160px;

  > div {
    white-space: nowrap;
    margin: 0 3px;
    width: 30px;
    height: 30px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    border-radius: 50%;
    display: inline-block;
  }
}

.toolbar {
  text-align: center;
  position: sticky;
  top: 70px;
  z-index: 20;
}

.editor-bg {
  background: #f5f5f5;
}

.editor-container {
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
}

.left {
  width: 220px;
  padding-right: 20px;
}

.middle {
  flex: 1;
  position: relative;
}

.right {
  padding-left: 20px;
  width: 220px;
}

.editor-wrapper {
  margin: 0 auto;
}

::v-deep {
  .textbus-container {
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  }

  .textbus-ui-middle {
    border-width: 0;
  }

  .textbus-toolbar-wrapper {
    border-width: 0 !important;
  }

  .textbus-toolbar-group {
    float: none;
    display: inline-block;
  }

  [textbus-document] {
    padding: 20px 40px !important;
  }
}

.alert {
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 1.5;

  span {
    color: $color-danger;
  }
}
</style>
