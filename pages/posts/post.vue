<script>
export default {

}
</script>
<template>
  <div>
      <h1 class="header">
        <logo />
      </h1>
      <div class="menu">
        <btn :click="previousPost" :disabled="isOldestPost" :text="'Previous'"/>
        <btn :click="randomPost" :text="'Random'"/>
        <btn :click="nextPost" :disabled="isNewestPost" :text="'Next'"/>
      </div>
      <postContent
        :title="currentPost.title"
        :tags="currentPost.tags"
        :content="currentPost.content"/>
  </div>
</template>

<script>
import PostContent from '~/pages/posts/post/_id.vue'
import Btn from '~/components/btn/btn.vue'
import Logo from '~/components/logo.vue'

import jsonData from '~/data.json'

const OLDEST_POST_ID = 1

export default {
  computed: {
    isNewestPost () {
      return this.currentPostId === this.newestPostId
    },
    isOldestPost () {
      return this.currentPostId === OLDEST_POST_ID
    },
    newestPostId () {
     return this.posts.length
    }
  },
  data: function () {
    return {
      currentPostId: {},
      lastPostId: [],
      posts: {},
      currentPost: {}
    }
  },
  watcher () {

  },
  created () {
    this.posts = jsonData.data
    this.currentPostId = this.newestPostId
    this.currentPost = this.posts.find( ({ id }) => id === parseInt(this.$route.params.id) )

  },
  methods: {
    isCurrentPathId () {

    },
    previousPost () {
      this.currentPostId--
      this.updatePost(this.currentPostId)
    },
    nextPost () {
      this.currentPostId++
      this.updatePost(this.currentPostId)
    },
    randomPost () {
      let randId = Math.floor(Math.random() * ( this.posts.length - 1) + 1)
      this.updatePost(randId)
    },
    updatePost (id) {
      let newId = id
      this.$router.push({ path:`${newId}`})
      this.currentPost = this.posts.find( ({ id }) => id === newId )
    },
  },
  components: {
    PostContent,
    Btn,
    Logo
  }
}
</script>

<style>
.container {
  display: grid;
  margin: 0 auto;
  width: 900px;
  grid-template-columns: 900px;
  grid-template-rows: 140px 30px auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}
.menu {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.header {
  grid-row: 1;
}
</style>
