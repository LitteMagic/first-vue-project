import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
// 导入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 当导入包时，只导入目录，那么会自动导入这个目录中名为`index.js`的文件
import router from '@/router'

// 创建Vue实例
const app = createApp(App);
// 将Element Plus插件注册到当前Vue应用中
app.use(ElementPlus);
app.use(router);

app.mount('#app');
