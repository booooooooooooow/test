import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App); // 1. 创建Vue实例
const pinia = createPinia();
app.use(router); // 2. 安装插件
app.use(pinia);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.mount("#app");
