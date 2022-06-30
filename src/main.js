import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import 'animate.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import _variables from'./assets/style/_variables.scss'
import router from './router'
router.afterEach((to, from, next) =>{
    window.scrollTo(0,0)
})

createApp(App).use(router).mount('#app')
