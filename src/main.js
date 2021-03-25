import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Firebase auth service so that we can listen to changes
import { projectAuth } from '@/firebase/config'

let app 

// When the user is first logged in or not logged in at all
projectAuth.onAuthStateChanged(() => {
    if (!app) {
      app = createApp(App)
      .use(router)
      .mount('#app')
    }
})


