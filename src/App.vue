<script>
import { store } from './store.js';
import Header from './components/Header.vue';
import Portfolio from './components/Portfolio.vue';
import WorkingProcess from './components/WorkingProcess.vue';
import WorkWhitUs from './components/WorkWhitUs.vue';
import BlogArticles from './components/BlogArticles.vue';
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Header,
    Portfolio,
    WorkingProcess,
    WorkWhitUs,
    BlogArticles,
    Footer
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
  <section>
    <Header />
    <Portfolio />
    <WorkingProcess />
    <WorkWhitUs />
    <BlogArticles />
    <Footer />
    <a id="up" href="/home"><i class="fa-solid fa-arrow-up"></i></a>
  </section>
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

section {
  overflow: hidden;
  width: 100vw;
}

#up {
  position: fixed;
  bottom: 50px;
  right: 30px;
  background: lightgreen;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
