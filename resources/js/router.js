import * as VueRouter from "vue-router";

export default VueRouter.createRouter ({

    history: VueRouter.createWebHistory('/'),
    routes: [
        {
            path:'/fruit',
            component: () => import('./components/Fruit/Index.vue'),
            name:'fruit.index'
        },
    ],

})
