import {createApp} from 'vue/dist/vue.esm-bundler'
import Index from './components/Index.vue'

import router from "./router.js";

import "bootstrap/dist/css/bootstrap.min.css";
import './bootstrap';

const app = createApp({
    el: '#app',
    components:{
        'index': Index,
    }
});

app.use(router)
app.mount('#app');



