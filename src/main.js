import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
// App.use(router)
// App.use(createPinia())
// createApp(App).mount('#app')
const app = createApp(App) // 1. 创建Vue实例
app.use(router)            // 2. 安装插件
app.use(createPinia())
app.mount('#app')