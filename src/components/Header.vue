<script>
import NavBar from './NavBar.vue';
import Carousel from './Carousel.vue';

export default {
  name: "Header",
  components: {
    NavBar,
    Carousel
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
</template>

<style lang="scss" scoped></style>
