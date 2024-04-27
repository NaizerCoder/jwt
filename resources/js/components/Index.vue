<template>
    <div>
        <router-link :to="{name:'fruit.index'}">Fruits | </router-link>
        <router-link v-if="!access_token" :to="{name:'user.login'}">Login | </router-link>
        <router-link v-if="!access_token" :to="{name:'user.registration'}">Registration | </router-link>
        <router-link :to="{name:'user.personal'}">Personal</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
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
        }
    }
}
</script>

<style scoped>

</style>
