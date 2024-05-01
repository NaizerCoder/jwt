<template>
    <div>
        <router-link :to="{name:'fruit.index'}">Fruits | </router-link>
        <router-link v-if="!access_token" :to="{name:'user.login'}">Login | </router-link>
        <router-link v-if="!access_token" :to="{name:'user.registration'}">Registration | </router-link>
        <router-link :to="{name:'user.personal'}">Personal</router-link>
        <a v-if="access_token" href="#" @click.prevent="logout">| Logout</a>
        <router-view :key="$route.name"></router-view>
    </div>

</template>

<script>
import api from "@/api";
export default {
    name: "Index",

    data(){
        return{
            access_token: null,
        }
    },

    mounted() {
        this.getToken()
    },

    updated() {
        this.getToken()
    },

    methods:{
        getToken(){
            this.access_token = localStorage.getItem('access_token')
        },

        logout(){
            //используем API чтобы не прокидывать token - там уже прокинуто
            api.post('api/auth/logout') //logout на бэкенде, по факту обращение к методу logout() AuthController
                .then(
                    res => {
                        localStorage.removeItem('access_token')
                        this.$router.push({name: 'user.login'})
                    })

        }
    }
}
</script>

<style scoped>

</style>
