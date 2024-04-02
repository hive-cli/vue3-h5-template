<template>
  <router-view></router-view>
</template>

<script setup>
// import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
// import { getUrlQuery } from '@/utils'
// import { getWechatToken } from '@/service'
// const appid = import.meta.env.VITE_APP_APPID
// const secret = import.meta.env.VITE_APP_APPSECRET
// const scope = 'snsapi_base'

onMounted(() => {
  // authorize()
})

// 公众号网页静默授权
// async function authorize() {
//   if (localStorage.getItem('openid')) return
//   const localUrl = encodeURIComponent(window.location.href)
//   // const localUrl = encodeURIComponent('lianchengw.ghtec.com')
//   // console.log('window.location.href', window.location.href)
//   let code = getUrlQuery(window.location.href).code
//   if (!code) {
//     window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${localUrl}&response_type=code&scope=${scope}&state=STATE#wechat_redirect`
//   } else {
//     await fetchOpenId(code)
//     window.location.href = '/physicalPrize'
//   }
// }

// 获取 openid
// async function fetchOpenId(code) {
//   const res = await getWechatToken({
//     appid,
//     secret,
//     code,
//     grant_type: 'authorization_code'
//   })
//   const { openid } = res
//   if (!openid) {
//     window.showDialog({
//       title: '提示',
//       content: '身份认证失败，请稍后重试',
//       okText: '重试',
//       onCancel: () => {},
//       onOk: async () => {
//         window.location.href = '/physicalPrize'
//       }
//     })
//   } else {
//     localStorage.setItem('openid', openid)
//     return openid
//   }
// }
</script>

<style>
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
