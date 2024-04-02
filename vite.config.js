import { defineConfig, loadEnv } from 'vite' //引入defineConfig可以获得语法补全提示
import { getRootPath, getSrcPath, setupVitePlugins, createViteProxy } from './build'

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd())
  console.log('process.cwd()', process.cwd())
  const rootPath = getRootPath()
  const srcPath = getSrcPath()
  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    plugins: setupVitePlugins(viteEnv),
    server: {
      host: '0.0.0.0',
      open: true,
      proxy: createViteProxy(configEnv.mode)
    }
  }
})
