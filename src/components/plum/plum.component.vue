<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { defaultPlumConfig, PlumService } from './plum.service';

let plumService: PlumService
const canvasEl = ref<HTMLCanvasElement>()

onMounted(() => {
  init()
})

function init() {
  const initLen = defaultPlumConfig.firstLeafLen
  const width = defaultPlumConfig.uiWidth
  const height = defaultPlumConfig.uiHeight
  
  plumService = new PlumService(canvasEl.value!)

  plumService.beginPlumGrow([
    // 从上往下
    {
      begin: {
        x: Math.floor(width / 3),
        y: 0
      },
      length: initLen,
      angle: Math.PI / 2
    },

    // // 从下往上
    // {
    //   begin: {
    //     x: Math.floor(width / 3),
    //     y: height
    //   },
    //   length: initLen,
    //   angle: -Math.PI / 2
    // },

    // 从左往右
    {
      begin: {
        x: 0,
        y: Math.floor(height / 3)
      },
      length: initLen,
      angle: 0
    },

    // 从右往左
    {
      begin: {
        x: width,
        y: Math.floor(height / 3)
      },
      length: initLen,
      angle: -Math.PI
    }
  ])
}
</script>

<template>
  <div class="container">
    <canvas ref="canvasEl" id="ui"></canvas>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  top: 0px;
}

#ui {
  display: block;
}

.copywriter {
  writing-mode: vertical-lr;
  font-size: 50px;
}
</style>
