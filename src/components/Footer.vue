<script>

export default {
    name: "Footer",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <section class="container-fluid p-5">
        <div class="row ps-5 pe-5 justify-content-around">
            <div class="col-2">
                <img class="d-block mb-2" src="../assets/img/logo-sidearea-1.png" alt="">
                <span>let's get creative</span>
            </div>
            <div class="col-2 pt-2">
                <span class="d-block mb-2">maree.qode@gmail.com</span>
                <span>+44645 321 789</span>
            </div>
            <div class="col-2 pt-2">
                <span class="d-block mb-2">Avenue d'Auderghem 10</span>
                <span>1040 Brussels, Belgium</span>
            </div>
            <div class="col-2 pt-2 text-center">
                <span class="d-block mb-2 ">Stay in touch with us</span>
                <span class="d-flex justify-content-around"><i class="fa-brands fa-twitter"></i><i
                        class="fa-brands fa-pinterest-p"></i><i class="fa-brands fa-facebook-f"></i><i
                        class="fa-brands fa-linkedin-in"></i></span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: #c0e1cf;
}
</style>