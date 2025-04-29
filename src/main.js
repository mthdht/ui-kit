import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { uikit } from '@/library.js'


createApp(App).use(uikit).mount('#app')
