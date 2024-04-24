<template>
    <div>

        <table class="table table-bordered w-25 mt-3">
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
        }
    },

    mounted() {
        this.getFruit();
    },

    methods: {
        getFruit() {
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
                    //console.log(res.data);
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
