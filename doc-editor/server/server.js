const Koa = require('koa')
const Router = require('koa-router')
const glob = require('glob')
const fs = require('fs')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const pretty = require('pretty')

const app = new Koa()

app.use(bodyParser())

const router = new Router()

router.get('/', (context) => {
  context.response.body = 'xxxx'
})
router.get('/tree', context => {
  const files = glob.sync('./pages/**/*.html')
  context.response.body = JSON.stringify(files)
})

router.get('/doc/get', context => {
  const url = context.originalUrl
  const fileName = decodeURIComponent(url.match(/(?<=path=).+.html$/)[0])
  const fileContent = fs.readFileSync(fileName).toString()
  context.response.body = JSON.stringify({
    doc: fileContent
  })
})

router.post('/doc/save', context => {
  const body = context.request.body

  const fileName = body.path
  const html = body.html

  const url = path.resolve(__dirname, '../', fileName)
  const vuePath = path.resolve(__dirname, '../../src/pages/', fileName.replace(/pages\//, '/').replace(/\.html$/, '.tsx'))

  const doc = pretty(html)
  fs.writeFileSync(url, doc)
  fs.writeFileSync(vuePath, `import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}>${doc.replaceAll('<br>', '<br/>').replace(/(<img[^>]+)/g, '$1 alt=""/').replace(/([{}])/g, '{\'$1\'}')}</div>
    )
  }
}`)
  context.response.body = JSON.stringify({
    message: '保存成功！'
  })
})

app
    .use(router.routes())
    .use(router.allowedMethods())

const port = 6666

app.listen(port, () => {
  console.log('http://localhost:' + port)
})
