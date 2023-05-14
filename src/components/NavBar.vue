<script>
import { store } from '../store.js';
export default {
    name: "NavBar",
    data() {
        return {
            store,
            activeItem: 0
        }
    },
    methods: {
        indexLog(i) {
            this.activeItem = i
        }
    }
}
</script>

<template>
    <section class="container-fluid">
        <div class="row justify-content-between pt-3 ps-2 pe-2">
            <div class="col-1 d-flex">
                <img id="logoDetails" src="../assets/img/logo-sidearea-1.png" alt="">
            </div>
            <div class="col-6">
                <ul class="d-flex justify-content-between">
                    <li v-for="(element, index) in store.NavOptions" :key="index"><a @click.prevent="indexLog(index)"
                            :class="(index == activeItem ? 'active' : '')" :href="element.url"><strong>{{
                                element.name
                            }}</strong></a></li>
                    <li><button class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"><img src="../assets/svg/svg-1.svg" alt=""></button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                ...
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
section {
    height: 70px;

    #logoDetails {
        height: 25px;
    }

    ul {
        li {
            display: inline;

            .active {
                border-bottom: 7px solid orange;
            }


            a {
                text-decoration: none;
                color: black;
                display: inline-block;
                height: 70%;

                &:hover {
                    border-bottom: 7px solid orange;
                }
            }
        }
    }
}
</style>