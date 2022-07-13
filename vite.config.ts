import { defineConfig,normalizePath} from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import {myVitePlugin} from "./src/plugin/index.js"
// vite.config.ts
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import path from 'path';
// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'));
// https://vitejs.dev/config/
export default defineConfig({
   // 手动指定项目根目录位置
  // root: path.join(__dirname, 'src'),
  plugins: [react(),myVitePlugin({
    id:'456',
    name:'vite+react'
  })],
  resolve: {
    // 别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      "@":path.join(__dirname,"src")
     
    }
  }
  
})
