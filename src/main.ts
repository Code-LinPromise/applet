import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import 'vant/lib/index.css';
import "./assets/Iconfont/iconfont.js"

createApp(App).use(router).mount('#app')
