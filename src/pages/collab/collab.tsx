import { withScopedCSS } from '@viewfly/scoped-css'
import { createRef, onMounted } from '@viewfly/core'
import { Editor } from '@textbus/xnote'
import { UserInfo } from '@textbus/collaborate'
import '@textbus/xnote/bundles/index.css'

import css from './collab.scoped.scss'

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

const user: UserInfo = {
  username: username,
  color: colors[Math.floor(Math.random() * colors.length)],
  id: Math.random().toString()
}

export function Collab() {
  const ref = createRef<HTMLElement>()
  let textbus: Editor
  onMounted(() => {
    textbus = new Editor({
      collaborateConfig: {
        url: 'wss://textbus.io/api',
        roomName: 'xnote',
        userinfo: user
      }
    })
    textbus.mount(ref.current!)
    return () => {
      textbus?.destroy()
    }
  })
  return withScopedCSS(css, () => {
    return (
      <div class="ui-container">
        <div class="notice">当前版本为 xnote 开发预览版</div>
        <div ref={ref} class="doc"></div>
      </div>
    )
  })
}
