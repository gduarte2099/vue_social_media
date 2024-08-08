import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'material-icons/iconfont/material-icons.css'
import '@/assets/custom_styles.scss'

// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(router).mount('#app')