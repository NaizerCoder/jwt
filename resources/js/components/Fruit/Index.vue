<template>
    <div v-if="spinner" class="z-2 p-5">
        <b-spinner small variant="primary" label="Spinning"></b-spinner>
    </div>
    <div v-if="!spinner">
        <table class="table table-bordered z-1">
            <thead>
            <tr>
                <th scope="col">Наименование</th>
                <th scope="col">Стоимость</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="fruit in fruits">
                <td>{{ fruit.name }}</td>
                <td>{{ fruit.price }}</td>

            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>

import API from "@/api";
export default {
    name: "Fruits",
    data() {
        return {
            fruits: {},
            spinner: true
        }
    },

    mounted() {
        this.getFruit();
    },

    methods: {
        getFruit() {
            //this.spinner = true
            API.get('/api/auth/fruits')
                // axios.get('/api/auth/fruits'
                //     ,{
                //
                //         headers: {
                //             'authorization': `Bearer ${localStorage.getItem('access_token')}`
                //         }
                //
                //     }
                //     )
                .then(res => {
                    //console.log(res);
                    this.spinner = false
                    this.fruits = res.data.data
                })

        },

        initApi() {

        }

    }
}
</script>

<style scoped>

</style>
