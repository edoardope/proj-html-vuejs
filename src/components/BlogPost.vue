<script>

export default {
    name: "BlogPost",
    props: ['postDetails'],
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
    <div id="cont">
        <span id="date" class="h5"><strong><em>{{ postDetails.giorno }}</em></strong></span>
        <span id="date2">{{ postDetails.mese }}{{ postDetails.anno }}</span>
        <img :src="getImagePath(`../assets/${postDetails.img}`)" alt="">
        <div id="text-box">
            <span class="h6 mt-4">{{ postDetails.text }}</span>
            <span class="d-block"><em>by {{ postDetails.autore }}</em></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#cont {
    height: 100% !important;
    flex-basis: calc(90% / 3);
    padding: 0;

    #date {
        position: relative;
        background-color: green;
        padding: 5px 10px;
        left: 15px;
        z-index: 9999;
        bottom: 6px;
    }

    #date2 {
        display: inline-block;
        position: relative;
        background-color: pink;
        width: 43px;
        height: 35px;
        left: -28px;
        z-index: 1;
        bottom: -25px;
        padding: 10px 5px 0px 5px;
        font-size: 60%;
    }

    img {
        width: 100%;
        position: relative;
        bottom: 35px;
    }

    #text-box {
        position: relative;
        bottom: 20px;
        width: 100%;
        height: 38.4%;
    }

}
</style>