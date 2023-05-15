<script>
import { store } from '../store.js'
import BlogPost from './BlogPost.vue';

export default {
  name: "BlogArticles",
  components: {
    BlogPost
  },
  data() {
    return {
      store
    }
  },
  methods: {

  }
}
</script>

<template>
  <section>
    <BlogPost v-for="(element, index) in store.BlogPosts" :key="index" :postDetails="element" />
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 600px;
  padding: 10% 15%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>