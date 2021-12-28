import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './utils/permission'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 全局注册所有icon组件(不建议,若菜单全部从后端获取,需要动态生成菜单,则需要提前注册所有icon组件)
import * as icons from '@element-plus/icons-vue'
Object.keys(icons).forEach(key => {
  app.component(key, icons[key])
})

//按需注册icon组件
// import {
//   Sunny,
//   Avatar,
//   ArrowDown
// }
// from '@element-plus/icons-vue'

// app.component('sunny',Sunny)
// app.component('avatar',Avatar)
// app.component('arrow-down',ArrowDown)

app.use(router)
.mount('#app')
