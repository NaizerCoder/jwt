<template>

    <div v-if="!access_token" class="container-fluid">
        <div class="" style="margin-top:200px">
            <div class="rounded d-flex justify-content-center">
                <div class="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                    <div class="text-center">
                        <h3 class="text-primary">
                            <router-link :to="{name:'user.login'}" class="link-primary link-underline-light link-underline-opacity-0">ВХОД</router-link>
                            |
                            <router-link :to="{name:'user.registration'}" class="link-primary link-underline-light link-underline-opacity-0">РЕГИСТРАЦИЯ</router-link>

                        </h3>
                    </div>
                        <div class="p-4">
                            <router-view :key="$route.name"></router-view>
                        </div>
                </div>
            </div>
        </div>
    </div>


    <div v-if="access_token">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">МЕНЮ</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{name:'fruit.index'}" class="nav-link active" aria-current="page">Прайс</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link :to="{name:'user.personal'}" class="nav-link active" aria-current="page">Личная информация</router-link>
                        </li>

                        <li class="nav-item">
                            <a @click.prevent="logout" class="nav-link active" aria-current="page" href="#">Выход</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

        <div class="p-4">
            <router-view :key="$route.name"></router-view>
        </div>
    </div>

</template>

<script>
import api from "@/api";

export default {
    name: "Index",

    data() {
        return {
            access_token: null,
        }
    },

    mounted() {
        this.getToken()
    },

    updated() {
        this.getToken()
    },

    methods: {
        getToken() {
            this.access_token = localStorage.getItem('access_token')
        },

        logout() {
            //используем API чтобы не прокидывать token - там уже прокинуто
            api.post('api/auth/logout') //logout на бэкенде, по факту обращение к методу logout() AuthController
                .then(
                    res => {
                        localStorage.removeItem('access_token') //logout на фронтэнде, по факту удаление токена
                        this.$router.push({name: 'user.login'})
                    })

        }
    }
}
</script>

<style scoped>

</style>
