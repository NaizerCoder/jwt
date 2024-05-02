import {createApp} from 'vue/dist/vue.esm-bundler'
import Index from './components/Index.vue'

import router from "./router.js";

// import "bootstrap/dist/css/bootstrap.min.css";
// import './bootstrap';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp({
    el: '#app',
    components:{
        'index': Index,
    }
});

app.use(router)
// Make BootstrapVue available throughout your project
app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//app.use(IconsPlugin)
app.mount('#app');



