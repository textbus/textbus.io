import { createRef, createSignal, onMounted } from '@viewfly/core'
import { withScopedCSS } from '@viewfly/scoped-css'
import { Editor, Member, Organization, StaticToolbarPlugin } from '@textbus/xnote'

import { Banner } from '../../components/banner/banner'
import css from './home.scoped.scss'
import bg from './bg1.jpg'

const firstNameText = '王、李、张、刘、陈、杨、黄、赵、周、吴、徐、孙、马、胡、朱、郭、何、罗、高、林'.replace(/、/g, '')
const lastNameText = '本义既为女子所生子嗣则同一女子所生子嗣组成的亲族也可以称为姓以表示其同出于一个女性始祖的这种特殊的亲属关系这是姓的另一引申义此种亲族组织强调女性始祖则当如许多学者所推拟的其最初必形成于母系氏族社会中即夫从妻居子女属于母族世系以母方计对于这种具有血缘关系的亲属组织的名称杨希枚先生主张称为姓族典籍所记姬姓姜姓嬴姓最初应皆属母系姓族姬姜则是此种母系姓族之名号进入父系氏族社会后妻从夫居子女不再属母族而归于父族世系以父方计所以母系姓族遂转为父系姓族此后父系姓族仍然使用着母系姓族的名号其四姓在东周文献中有时是指姓族之名号如国语周语下言赐姓曰姜之姓即应理解为所赐姓族之名号即姜又如左传哀公五月昭夫人孟子卒昭公娶于吴故不书姓很明显姓在这里是指吴女所属姓族之名号即姬所谓姓族之姓与作姓族名号讲的姓是一实一名属于两种概念范畴所以会发生此种混同当如杨希枚先生所言是由于名代表实积久而以实为名于是产生姬姜之类姓之名号就是姓的概念司马迁在史记中常言姓某氏没能区别古代姓与氏之不同但他所说的姓意思即是指姓族之名号妘黄帝住姬水之滨以姬为姓司马迁在史记五帝本纪中说黄帝二十五子其得姓者十四人三语中胥臣解释说黄帝之子二十五宗其得姓者十四人为十二姓姬酉祁己滕箴任荀僖姞儇衣是也惟青阳与夷鼓同己姓后来的五帝少昊颛顼喾尧舜以及夏禹商族的祖先契周族的祖先农神后稷秦族的祖先伯益等都是黄帝的后代后稷承继姬姓他的后代建立了周朝周初周天子姬发大封诸侯时其中姬姓国个姬姓位于百家姓第位由姬姓演支出个姓占百家姓总姓姓的再演化出来的姓氏更是数不胜数了炎帝居姜水之旁以姜为姓姜姓还是今天中国的许多姓氏如吕姓谢姓齐姓高姓卢姓崔姓等的重要起源之一姜姓在当今以人口排名的中国百家姓氏中居于第位妘起源于帝喾高辛氏嬴起源于少昊金天氏；姚妫同源都是起源于帝舜；姒起源于大禹此外部落首领之子亦可得姓黄帝有二十五子得姓者十四人为姬酉祁己滕任荀葴僖姞儇依十二姓其中有四人分属二姓祝融之后为己董彭秃妘曹斟芈等八姓史称祝融八姓'

function createUserName() {
  const firstName = firstNameText.substr(Math.floor(Math.random() * firstNameText.length), 1)
  const lastName = lastNameText.substr(Math.floor(Math.random() * lastNameText.length), 1 + Math.floor(Math.random() * 2))

  return firstName + lastName
}

function sleep(delay: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

function createColor() {
  const fn = function () {
    const s = Math.floor(Math.random() * 255).toString(16)
    if (s.length === 2) {
      return s
    }
    return '0' + s
  }

  return `#${fn()}${fn()}${fn()}`
}

class Http extends Organization {
  async getMembers(name: string): Promise<Member[]> {
    await sleep(100)
    const len = Math.floor(20 / name.length + 1)

    const arr = Array.from<Member>({ length: len }).map(() => {
      return {
        id: 'xxx',
        name: name + createUserName(),
        groupName: '部门-' + createUserName(),
        groupId: 'xxx',
        avatar: '',
        color: createColor()
      }
    })

    if (name.length) {
      arr.unshift({
        id: 'xxx',
        name: name,
        groupName: '部门-' + createUserName(),
        groupId: 'xxx',
        avatar: '',
        color: createColor()
      })
    }

    return Promise.resolve(arr)
  }

  atMember() {
    //
  }
}

export function Home() {
  const editorRef = createRef<HTMLElement>()
  const toolbarRef = createRef<HTMLElement>()

  onMounted(() => {
    const editor = new Editor({
      providers: [
        {
          provide: Organization,
          useValue: new Http()
        }
      ],
      content: '<div dir="auto" data-component="RootComponent" style="padding-bottom:40px" class="xnote-root"><div data-placeholder="" class="xnote-content"><div data-component="ParagraphComponent" class="xnote-paragraph"><div><span style="font-size:18px">Hi，小伙伴们，欢迎你使用&nbsp;<strong>Textbus</strong>&nbsp;富文本框架！</span></div></div><blockquote data-component="BlockquoteComponent" class="xnote-blockquote"><div><div data-component="ParagraphComponent" class="xnote-paragraph"><div>你正在查看的是&nbsp;<a href="https://github.com/textbus/xnote" target="_blanK">XNote</a>&nbsp;的演示效果，如果你需要一个开箱即用的富文本编辑器，你可以直接使用它。如果你需要完全自定义一个全新的富文本编辑器，你可以直接查看 Textbus 的开发者文档。</div></div></div></blockquote><div data-component="ParagraphComponent" class="xnote-paragraph"><div>XNote 是 Textbus 官方开发的富文本编辑器，提供了大多数常见的功能。如：</div></div><ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list"><li><div class="xnote-list-type"><span class="xnote-order-btn">•</span></div><div class="xnote-list-content">常见格式：<strong>加粗</strong>、<em>斜体</em>、<u>下划线</u>、<del>中划线</del>、<span style="font-family:SimSun, STSong">字体</span>、<span style="color:#617fff">文字颜色</span>、<sup>上标</sup>、<sub>下标</sub>等。</div></li></ul><ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list"><li><div class="xnote-list-type"><span class="xnote-order-btn">•</span></div><div class="xnote-list-content">代码块、表格、视频、图片、高亮块、对齐方式等。</div></li></ul><ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list"><li><div class="xnote-list-type"><span class="xnote-order-btn">•</span></div><div class="xnote-list-content">有序列表、无序列表、待办事项、引用块、数学公式等。</div></li></ul><div data-component="ParagraphComponent" class="xnote-paragraph"><div>XNote 还支持 Markdown 语法的实时转换，如：当你输入 “#” 并接着键入“空格” 时，XNote 将转换为一级标题。当你提供了组织信息（Organization）时，XNote 还支持通过 “@” 组织<div data-info="%7B%22id%22%3A%22xxx%22%2C%22name%22%3A%22Textbus%22%2C%22groupName%22%3A%22%E9%83%A8%E9%97%A8-%E6%9D%8E%E8%83%9C%22%2C%22groupId%22%3A%22xxx%22%2C%22avatar%22%3A%22%22%2C%22color%22%3A%22%2391205a%22%7D" data-component="AtComponent" class="xnote-at xnote-at-complete"><span>@</span>Textbus</div>成员。</div></div><div data-component="ParagraphComponent" class="xnote-paragraph"><div>我们会不定时的增加新的功能，欢迎你持续关注！</div></div></div></div>',
      plugins: [
        new StaticToolbarPlugin({
          host: toolbarRef.current!,
          theme: 'dark'
        })
      ]
    })
    editor.mount(editorRef.current!)
    return () => {
      editor.destroy()
    }
  })
  const image = new Image()
  const bgLoaded = createSignal(false)
  image.onload = function () {
    bgLoaded.set(true)
  }
  image.src = bg
  return withScopedCSS(css, () => {
    return (
      <>
        <div class={['static-editor', {
          'bg-loaded': bgLoaded()
        }]}>
          <Banner/>
          <div class="editor">
            <div class="editor-toolbar" ref={toolbarRef}></div>
            <div class="editor-content" ref={editorRef}>
            </div>
          </div>
        </div>
        <div class="desc">
          <div class="ui-container">
            <div class="ui-row group">
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-lightning-charge-fill"></i>
                  <h3>超强性能</h3>
                </div>
                <p>支持 <strong>1000 万字</strong>、<strong>25 万 DOM 节点</strong>、<strong>5 万段落</strong>无卡顿编辑
                </p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-shield-fill-check"></i>
                  <h3>类型安全</h3>
                </div>
                <p>完整的 TypeScript 支持，帮助你更快完成复杂的富文本开发</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-brightness-high-fill"></i>
                  <h3>支持协作</h3>
                </div>
                <p>支持在线协作，无成本开发多人在线编辑器</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div class="icon">
                  <i class="bi bi-cursor-fill"></i>
                  <h3>易扩展</h3>
                </div>
                <p>全面拥抱前端框架，无缝接入 Viewfly、Vue 和 React</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })
}
