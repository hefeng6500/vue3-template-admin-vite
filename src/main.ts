import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import "normalize.css/normalize.css"
import ElementPlus from '../plugins/element'
import App from './App.vue'

const app = createApp(App)

// plugins
app.use(ElementPlus)

app.mount('#app')
