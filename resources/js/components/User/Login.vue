<template>

    <div class="input-group mb-3">
        <span class="input-group-text bg-primary"><i class="bi bi-person-plus-fill text-white"></i></span>
        <input v-model="email" @keyup.enter="login" type="email" class="form-control" placeholder="E-mail">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text bg-primary"><i class="bi bi-person-plus-fill text-white"></i></span>
        <input v-model="password" @keyup.enter="login" type="password" class="form-control" placeholder="Пароль">
    </div>
    <div v-if="error" class="text-danger" style="margin-top: -10px">{{ error }}</div>

    <button @click.prevent="login" class="btn btn-primary text-center" type="submit">
        Войти
    </button>


</template>

<script>
export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
            error: null,
        }
    },

    methods: {
        login() {
            axios.post('/api/auth/login', {'email': this.email, 'password': this.password})
                .then(result => {

                    // const data = {
                    //     name:'test',
                    //     token: result.data.access_token,
                    // }

                    localStorage.setItem('access_token', result.data.access_token);
                    this.$router.push({name: 'user.personal'})
                    // localStorage.setItem('someData',JSON.stringify(data))
                    // console.log(JSON.parse(localStorage.getItem('someData')));
                })
                .catch(error => {
                    this.error = error.response.data.error
                    // console.log(error.response);
                })
        }
    }
}
</script>

<style scoped>

</style>
