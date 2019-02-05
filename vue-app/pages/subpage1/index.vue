<template>
    <section class="container">
        <div>
            <logo/>
            <h1 class="title">NEVueApp</h1>
            <h2 class="subtitle">Subpage 1</h2>
            <div class="links">
                <nuxt-link to="/">Strona glowna</nuxt-link>
            </div>
            <RandomCat/>
        </div>
    </section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import RandomCat from '~/components/randomCat/RandomCat.vue';

export default {
    components: {
        Logo,
        RandomCat,
    },
};
</script>

<style>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
