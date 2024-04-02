import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: constantRoutes,
  // 每次切换路由的时候滚动到页面顶部
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

// const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  window.$loadingBar?.start()
  next()
})

router.afterEach(() => {
  window.$loadingBar?.finish()
})

export async function setupRouter(app) {
  app.use(router)
  await router.isReady()
}
