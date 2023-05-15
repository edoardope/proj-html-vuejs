<script>

export default {
    name: "WorkingProcess",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <section class="container-fluid">
        <div class="row">
            <div id="main-c-t" class="col-12 text-center">
                <h1>Working <strong><em>process</em></strong></h1>
            </div>
        </div>
        <div id="main-c" class="row">
            <div class="col-3 d-flex justify-content-center"><span
                    class="icon-cont d-flex justify-content-center align-items-center"><i class="fa-solid fa-lightbulb"
                        style="color: green;"></i></span></div>
            <div class="col-3 d-flex justify-content-center"><span
                    class="icon-cont d-flex justify-content-center align-items-center"><i class="fa-regular fa-comment"
                        style="color: yellow;"></i></span></div>
            <div class="col-3 d-flex justify-content-center"><span
                    class="icon-cont d-flex justify-content-center align-items-center"><i class="fa-solid fa-cloud"
                        style="color: brown;"></i></span></div>
            <div class="col-3 d-flex justify-content-center"><span
                    class="icon-cont d-flex justify-content-center align-items-center"><i class="fa-solid fa-pencil"
                        style="color: orange;"></i></span></div>
        </div>
        <div id="main-c2" class="row">
            <div class="col-3 d-flex justify-content-center flex-column mt-4 text-center">
                <span><strong>First theres an idea</strong></span>
                <span class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="col-3 d-flex justify-content-center flex-column mt-4 text-center">
                <span><strong>Then we talk about</strong></span>
                <span class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="col-3 d-flex justify-content-center flex-column mt-4 text-center">
                <span><strong>And we think about</strong></span>
                <span class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="col-3 d-flex justify-content-center flex-column mt-4 text-center">
                <span><strong>So we draw along</strong></span>
                <span class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
section {
    height: 500px;
    padding: 5% 15%;
    position: relative;
    z-index: 99999;
    background-color: white;

    #main-c-t {
        height: 10%;
    }

    #main-c2 {
        height: 40%;
    }

    #main-c {
        height: 40%;
        margin-top: 5%;
        background-image: url(../assets/svg/svg-3.svg);
        background-repeat: no-repeat;

        i {
            font-size: 200%;
        }

        .icon-cont {
            display: flex;
            background-color: lightgray;
            width: 65%;
            height: 100%;
            border-radius: 50%;
        }
    }
}
</style>