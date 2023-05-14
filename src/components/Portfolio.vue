<script>
import { store } from '../store';
import PortfolioItem from './PortfolioItem.vue';

export default {
    name: "Portfolio",
    components: {
        PortfolioItem
    },
    data() {
        return {
            store,
            Pitems: [
                {
                    image: "img/h-2-port-img-1.jpg",
                },
                {
                    image: "img/h-2-port-img-2.jpg",
                },
                {
                    image: "img/h-2-port-img-3.jpg",
                },
                {
                    image: "img/h-2-port-img-4.jpg",
                },
                {
                    image: "img/h-2-port-img-5.jpg",
                },
                {
                    image: "img/h-2-port-img-6.jpg",
                },
            ]
        }
    },
    methods: {

    }
}
</script>

<template>
    <section class="align-items-start mt-5">
        <PortfolioItem v-for="(element, index) in Pitems" :key="index" :imgUrl="element" />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    flex-wrap: wrap;
}
</style>