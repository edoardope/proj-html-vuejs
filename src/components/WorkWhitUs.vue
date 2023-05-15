<script>

export default {
    name: "WorkWhitUs",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <section>
        <img id="a" src="../assets/img/short-slider-rev-1-img-5.png" alt="">
        <img id="b" src="../assets/img/short-slider-rev-1-img-5.png" alt="">
        <img id="c" src="../assets/img/short-slider-rev-1-img-5.png" alt="">
        <img id="d" src="../assets/img/short-slider-rev-1-img-5.png" alt="">
        <img id="e" src="../assets/img/short-slider-rev-1-img-5.png" alt="">
        <img id="f" src="../assets/img/short-slider-rev-1-img-5.png" alt="">
        <div>
            <h1>Want to work whit us? Send us <strong><em>a message!</em></strong></h1>
            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quaerat eaque voluptates
                reiciendis
                similique fugiat quos molestias eos quidem voluptate, tempore beatae ducimus id ipsam aliquam alias ea
                expedita autem.
            </p>
            <span class="btn"><strong>CONTACT</strong></span>

        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    height: 400px;
    background-color: lightgrey;
    padding: 80px 200px;

    #a {
        position: relative;
        transform: rotate(160deg);
        width: 40%;
        bottom: 232px;
        right: 299px;
    }

    #b {
        position: relative;
        transform: rotate(160deg);
        width: 30%;
        right: 481px;
        bottom: 234px;
    }

    #c {
        position: relative;
        transform: rotate(160deg);
        width: 30%;
        bottom: 223px;
        left: 143px;
    }

    #d {
        position: relative;
        transform: rotate(160deg);
        width: 35%;
        bottom: 365px;
        left: 1012px;
    }

    #e {
        position: relative;
        top: 68px;
        right: 314px;
        width: 20%;
    }

    #f {
        position: relative;
        top: 54px;
        left: 402px;
        width: 30%;
    }

    div {
        position: relative;
        width: 100%;
        height: 100%;
        bottom: 345px;
        text-align: center;
    }

    .btn {
        background-color: rgb(170, 222, 92);
        padding: 10px 40px;
        margin-top: 10px;
    }
}
</style>