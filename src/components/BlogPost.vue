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
        <div id="date-cont">
            <span id="date" class="h5"><strong><em>{{ postDetails.giorno }}</em></strong></span>
            <span id="date2">{{ postDetails.mese }}{{ postDetails.anno }}</span>
        </div>
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

    #date-cont {
        display: flex;
        position: relative;
        left: 15px;
        z-index: 9999;
        top: 45px;
        flex-direction: column;
        justify-content: center;
        width: 15%;

    }

    #date {
        background-color: #c0e1cf;
        padding: 20% 10%;
        text-align: center;
        margin: 0;
        font-size: 1.5vw;
    }

    #date2 {
        background-color: pink;
        padding: 40% 1%;
        font-size: 0.8vw;
        text-align: center;
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