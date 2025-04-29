import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { uikit } from '@/library.js'
import { pharos } from '@/themes/pharos.js'


createApp(App).use(uikit, {
    theme: pharos
}).mount('#app')
