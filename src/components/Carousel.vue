<script>

export default {
    name: "Carousel",
    data() {
        return {
            activeItem: 0
        }
    },
    mounted() {
        this.autoScroll()
    },
    methods: {
        prev() {
            if (this.activeItem == 0) {
                this.activeItem = 2
            } else {
                this.activeItem -= 1
            }

        },
        next() {
            if (this.activeItem == 2) {
                this.activeItem = 0
            } else {
                this.activeItem += 1
            }

        },
        autoScroll() {
            setInterval(() => {
                if (this.activeItem === 2) {
                    this.activeItem = 0
                } else {
                    this.activeItem += 1
                }
            }, 3000)
        }
    }
}
</script>

<template>
    <section class="container-fluid">
        <div id="carousel-cont" class="row">
            <div class="col-1 d-flex justify-content-center align-items-center">
                <span @click="prev()" class="carousel-btn"><i class="fa-solid fa-arrow-left"></i></span>
            </div>
            <div class="col-10">
                <div id="carousel-content" :class="activeItem == 0 ? '' : 'd-none'" class="row justify-content-center">
                    <div class="col-5 pt-2 ps-5">
                        <span class="display-2">devotion that never</span>
                        <span class="display-2 ms-3"><strong><em>ends</em></strong></span>
                        <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis pariatur
                            vel in
                            accusantium dignissimos
                        </p>
                        <span id="read-btn" class="mt-4 d-inline-block">
                            <strong>READ MORE</strong>
                        </span>
                    </div>
                    <div class="col-6 pt-5">
                        <img class="w-50p" src="../assets/img/h-2-slider-img-15.png" alt="">
                        <img class="w-50p" src="../assets/img/h-2-slider-img-16.png" alt="">
                    </div>
                </div>
                <div id="carousel-content" :class="activeItem == 1 ? '' : 'd-none'" class="row justify-content-center">
                    <div class="col-5 pt-2 ps-5">
                        <span class="display-2">devotion that never</span>
                        <span class="display-2 ms-3"><strong><em>1</em></strong></span>
                        <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis pariatur
                            vel in
                            accusantium dignissimos
                        </p>
                        <span id="read-btn" class="mt-4 d-inline-block">
                            <strong>READ MORE</strong>
                        </span>
                    </div>
                    <div class="col-6 pt-5">
                        <img class="w-50p" src="../assets/img/h-2-slider-img-15.png" alt="">
                        <img class="w-50p" src="../assets/img/h-2-slider-img-16.png" alt="">
                    </div>
                </div>
                <div id="carousel-content" :class="activeItem == 2 ? '' : 'd-none'" class="row justify-content-center">
                    <div class="col-5 pt-2 ps-5">
                        <span class="display-2">devotion that never</span>
                        <span class="display-2 ms-3"><strong><em>3</em></strong></span>
                        <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis pariatur
                            vel in
                            accusantium dignissimos
                        </p>
                        <span id="read-btn" class="mt-4 d-inline-block">
                            <strong>READ MORE</strong>
                        </span>
                    </div>
                    <div class="col-6 pt-5">
                        <img class="w-50p" src="../assets/img/h-2-slider-img-15.png" alt="">
                        <img class="w-50p" src="../assets/img/h-2-slider-img-16.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-1 d-flex justify-content-center align-items-center">
                <span @click="next()" class="carousel-btn"><i class="fa-solid fa-arrow-right"></i></span>
            </div>

        </div>
        <div class="row justify-content-center">
            <div class="col-1 d-flex justify-content-center align-items-center">
                <span @click="activeItem = 0" :class="activeItem == 0 ? 'dot-active' : ''" class="dot"></span>
                <span @click="activeItem = 1" :class="activeItem == 1 ? 'dot-active' : ''" class="dot"></span>
                <span @click="activeItem = 2" :class="activeItem == 2 ? 'dot-active' : ''" class="dot"></span>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: orange;
    margin: 5px;
}

.dot-active {
    width: 15px;
    height: 15px;
}

#carousel-cont {
    height: 500px;

    .w-50p {
        width: 45%;
        height: 85%;
    }

    #read-btn {
        padding: 10px 25px;
        border: 2px solid orange;
    }

    #carousel-content {
        height: 100%;
    }

    .carousel-btn {
        background-color: orange;
        border-radius: 50%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
}
</style>