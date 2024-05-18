import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue'
import router from './router'





// const app = createApp(App)

// app.use(createPinia())
// app.use(Toast)
// app.use(router)

// app.mount('#app')

createApp(App)

.use(createPinia())
.use(Toast)
.use(router)
.mount('#app')
