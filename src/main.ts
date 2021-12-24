import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import 'element-plus/dist/index.css'

//全局注册所有组件(不建议)
// import * as icons from '@element-plus/icons-vue'
// Object.keys(icons).forEach(key => {
//   app.component(key, icons[key])
// })

import {
  Edit,
  CameraFilled
}
from '@element-plus/icons-vue'

const app = createApp(App)

app.component('edit',Edit)
app.component('camera-filled',CameraFilled)

app.use(router)
.mount('#app')
