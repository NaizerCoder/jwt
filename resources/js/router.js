import * as VueRouter from "vue-router";

const route = VueRouter.createRouter ({

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

        {
            path:'/users/personal',
            component: () => import('./components/User/Personal.vue'),
            name:'user.personal'
        },

        {
            path:'/:catchAll(.*)', component: () => import('./components/User/Personal.vue'),
            name:'404'
        },
    ],

})

route.beforeEach( (to, from,next) => {
    // console.log(to.name);

    const access_token = localStorage.getItem('access_token')
    if( to.name!=='user.login'){
        if(!access_token){
            return next({
                name:'user.login'
            })
        }
    }
    if (to.name === 'user.login' && access_token){

        return next({
            name:'user.personal'
        })

    }

    next()
})

export default route
