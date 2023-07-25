import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import bootstrap from './bootstrap.js';
import VueAxios from 'vue-axios';


createApp(App).use(router,VueAxios, axios, bootstrap).mount('#app')
