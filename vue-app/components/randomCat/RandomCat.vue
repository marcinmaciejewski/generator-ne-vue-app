<template>
    <section>
        <h1>Random cat</h1>
        <h2>{{this.id}}</h2>
        <img :src="this.url" :alt="this.id">
    </section>
</template>
<script>
const axios = require('axios');

export default {
    name: 'RandomCat',
    data: () => {
        return {
            id: '',
            url: '',
        };
    },
    mounted() {
        axios
            .get('https://api.thecatapi.com/v1/images/search')
            .then((response) => {
                this.id = response.data[0].id;
                this.url = response.data[0].url;
            });
    },
};
</script>
