<script>
import NavBar from './NavBar.vue';
import Carousel from './Carousel.vue';
import Portfolio from './Portfolio.vue';

export default {
  name: "Header",
  components: {
    NavBar,
    Carousel,
    Portfolio
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <NavBar />
  <Carousel />
  <Portfolio />
</template>

<style lang="scss" scoped></style>
