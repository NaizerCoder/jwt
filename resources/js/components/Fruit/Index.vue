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
export default {
    name: "Fruits",
    data(){
        return {
            fruits:{},
        }
    },

    mounted() {
        this.getFruit();
    },

    methods:{
        getFruit(){
            axios.get('/api/fruits')
                .then( res => {
                    //console.log(res.data);
                    this.fruits = res.data.data
                })
        }

    }
}
</script>

<style scoped>

</style>
