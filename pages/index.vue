<template>
  <section class="container">
    <div class="ctverec">asdasdasd</div>
      <post></post>
  </section>
</template>

<script>
import Post from '~/pages/posts/post.vue'

const LAST_POST = 0

export default {
  components: {
    Post
  }
}
</script>

<style>
.ctverec {
  display: block;
  width: 100px;
  height: 100px;
  color: red;
}
</style>
