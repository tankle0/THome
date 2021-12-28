import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // define: {
  //   'process.env': {}
  // },
  base:'/tank/',
  server:{
    host:'0.0.0.0',
    open:true,
    port:8080,
    proxy:{
      '/api':{
        target:'http://103.113.6.179:8086',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/,'')
      }
    }
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'src')  //若是找不到__dirname  使用命令  npm install --save-dev @types/node
    }
  },
  build:{
    rollupOptions:{
      output: {
        assetFileNames: (AssetInfo)=>{
          if(/\.(png|jpg|gif)$/.test(AssetInfo.name)){
            return 'img/[name].[hash].[ext]'
          }else if(/\.(ttf|woff)$/.test(AssetInfo.name)){
            return 'font/[name].[hash].[ext]'
          }else{
            return '[ext]/[name].[hash].[ext]'
          }
        },
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js'
      }
    }
  }
})
