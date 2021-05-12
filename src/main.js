import { createApp } from 'vue'
import App from './App.vue'

import appStore from './stores/appStore.js'

createApp(App).use(appStore).mount('#app')
