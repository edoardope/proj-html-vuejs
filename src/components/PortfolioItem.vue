<script>

export default {
    name: "PortfolioItem",
    props: ['imgUrl'],
    data() {
        return {
            hover: false
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
    <div @mouseenter="hover = true" @mouseleave="hover = false">
        <div id="tag" :class="hover == true ? '' : 'd-none'">
            <span class="d-block"><strong>Illustration of a novels</strong></span>
            <span><em>Illustration</em></span>
        </div>
        <img :src="getImagePath(`../assets/${imgUrl.image}`)" alt="">
    </div>
</template>

<style lang="scss" scoped>
div {
    flex-basis: calc(100% / 3);
    position: relative;

    #tag {
        display: inline-block;
        background-color: white;
        position: absolute;
        top: 200px;
        padding: 20px 30px;
    }

    img {
        width: 100%;
    }
}
</style>