<template>

    <div class="w-25">
        <input v-model="email" type="email" class="form-control mb-1 mt-3" placeholder="E-mail">
        <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">
        <input @click.prevent="login" type="submit" class="btn btn-success">
    </div>

</template>

<script>
export default {
    name: "Login",

    data(){
        return {
            email: null,
            password: null,
        }
    },

    methods:{
        login(){
            axios.post('/api/auth/login',{'email':this.email, 'password':this.password})
                .then( result => {

                    localStorage.setItem('access_token',result.data.access_token);
                    console.log(result.data);
                })

        }
    }
}
</script>

<style scoped>

</style>
