<template>

    <div class="w-25">
        <input v-model="email" type="email" class="form-control mb-1 mt-3" placeholder="E-mail">
        <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">
        <div v-if="error" class="text-danger">{{error}}</div>
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
            error: null,
        }
    },

    methods:{
        login(){
            axios.post('/api/auth/login',{'email':this.email, 'password':this.password})
                .then( result => {

                    // const data = {
                    //     name:'test',
                    //     token: result.data.access_token,
                    // }

                    localStorage.setItem('access_token',result.data.access_token);
                    this.$router.push({name: 'user.personal'})
                    // localStorage.setItem('someData',JSON.stringify(data))
                    // console.log(JSON.parse(localStorage.getItem('someData')));
                })
                .catch( error => {
                    this.error = error.response.data.error
                    // console.log(error.response);
                })
        }
    }
}
</script>

<style scoped>

</style>
