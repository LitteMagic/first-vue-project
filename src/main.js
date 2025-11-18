import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 导入ElementPlus
import ElementPlus from './ElementPlus.vue'
import 'element-plus/dist/index.css'

// 创建Vue实例
const app = createApp(App);
// 将Element Plus插件注册到当前Vue应用中
app.use(ElementPlus)


app.mount('#app')
