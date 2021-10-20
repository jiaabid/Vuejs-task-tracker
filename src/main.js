import { createApp } from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './route'
import store from './store'
// console.log(Vue)\
createApp(App)
.use(store)
.use(router)
.use(Vuex)
.mount('#app')
