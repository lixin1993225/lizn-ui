import { createApp } from 'vue'
import App from './App.vue'
import VUI from '../packages/index'
const app = createApp(App)
app.use(VUI)
app.mount('#app')