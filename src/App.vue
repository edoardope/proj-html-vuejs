<script>
import { store } from './store.js';
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      store,
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
  <Header />
</template>

<style lang="scss">
@use 'style/main.scss' as *;
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  border: 0;
}
</style>
