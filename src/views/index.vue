<template>
  <div>
    <van-button block type="primary" @click="toMiniprogram">跳转小程序</van-button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {})

function toMiniprogram() {
  showToast('测试')
  // const data = new URL(location.href).searchParams.get('data')
  // const cq = encodeURIComponent(`data=${data}`)
  // // const openLink = `weixin://dl/business/?t=ra6rRW3TWxl&cq=${cq}`
  // const openLink = `weixin://dl/business/?t=CV3aLUcOMso&cq=${cq}`

  // location.href = openLink
}
</script>
