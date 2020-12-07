import { createApp } from 'vue'
import App from './App.vue'
import { setupElement } from './setup/element-plus'
import './index.css'

const app = createApp(App)

setupElement(app);

app.mount('#app')
