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
    doc: fileContent.replaceAll('"{{"}}', '')
  })
})

router.post('/doc/save', context => {
  const body = context.request.body

  const fileName = body.path
  const html = body.html

  const url = path.resolve(__dirname, '../', fileName)
  const vuePath = path.resolve(__dirname, '../../src/views/', fileName.replace(/pages\//, '/').replace(/\.html$/, '.vue'))

  const doc = pretty(html).replace(/\{\{/g, '{{"{{"}}')
  fs.writeFileSync(url, doc)
  fs.writeFileSync(vuePath, `<script setup lang="ts">
import { useDocUpdate } from '@/hooks/use-doc-update';
import { ref } from 'vue';

const doc = ref<HTMLElement>()
useDocUpdate(doc)
</script>
<template>
  <div ref="doc">
    ${doc}
  </div>
</template>`)
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
