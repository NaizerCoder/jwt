<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Логин</th>
                <th scope="col">E-mail</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td v-if="person.name">{{ person.name }}</td>
                <td v-if="person.email">{{ person.email }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from "@/api";

export default {
    name: "Personal",

    data() {
        return {
            person: {},
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson(){
            api.get('/api/auth/person')
                .then( result => {
                    //console.log(result.data.data);
                    this.person = result.data.data
                })
        }
    },

}
</script>

<style scoped>

</style>
