import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from '@/store';
createApp(App)
.use(router)
.use(store)
.mount('#app')

const token = localStorage.getItem('accessToken');
if(token)
    store.commit('authStore/setAccessToken',token);