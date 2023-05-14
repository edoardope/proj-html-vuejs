<script>

export default {
    name: "PortfolioItem",
    props: ['imgUrl'],
    data() {
        return {

        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div>
        <img :src="getImagePath(`../assets/${imgUrl.image}`)" alt="">
    </div>
</template>

<style lang="scss" scoped>
div {
    flex-basis: calc(100% / 3);

    img {
        width: 100%;
    }
}
</style>