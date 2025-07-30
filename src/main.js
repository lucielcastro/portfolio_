import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import scrollFade from './directives/scrollFade.js'

const app = createApp(App)
app.directive('scroll-fade', scrollFade)
app.mount('#app')
