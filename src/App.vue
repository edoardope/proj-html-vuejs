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

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  border: 0;
}
</style>
