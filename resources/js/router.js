import * as VueRouter from "vue-router";

export default VueRouter.createRouter ({

    history: VueRouter.createWebHistory(),
    routes: [
        {
            path:'/fruit',
            component: () => import('./components/Fruit/Index.vue'),
            name:'fruit.index'
        },

        {
            path:'/users/login',
            component: () => import('./components/User/Login.vue'),
            name:'user.login'
        },

        {
            path:'/users/registration',
            component: () => import('./components/User/Registration.vue'),
            name:'user.registration'
        },
    ],

})
