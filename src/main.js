import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
import router from './rounter'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
=======
//import router from './router'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
>>>>>>> origin/sim
