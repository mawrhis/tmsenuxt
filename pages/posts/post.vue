<script>
export default {

}
</script>
<template>
  <section class="container">
  <div>
      <h1 class="header">
        <logo />
      </h1>
      <div class="menu">
        <btn :click="previousPost" :disabled="isOldestPost" :text="'Previous'"/>
        <btn :click="randomPost" :text="'Random'"/>
        <btn :click="nextPost" :disabled="isNewestPost" :text="'Next'"/>
      </div>
     <transition>
        <postContent
          :title="currentPost.title"
          :tags="currentPost.tags"
          :content="currentPost.content"/>
      </transition>
  </div>
  </section>
</template>

<script>
import PostContent from '../../pages/posts/post/_id.vue'
import Btn from '../../components/btn/btn.vue'
import Logo from '../../components/logo/logo.vue'

import jsonData from '../../static/data.json'

const OLDEST_POST_ID = 1

export default {
  transition: 'test',
  computed: {
    isNewestPost () {
      return this.currentPostId === this.newestPostId
    },
    isOldestPost () {
      return this.currentPostId === OLDEST_POST_ID
    },
    newestPostId () {
     return this.posts.length
    },
    hasPath () {
      console.log(this.$route.params.id)
      return this.$route.params.id
    },
  },
  data: function () {
    return {
      currentPostId: {},
      lastPostId: [],
      posts: {},
      currentPost: {}
    }
  },
  watch: {
    hasPath () {
      if (this.hasPath === undefined) {
        this.currentPostId = this.lastPostId
        this.currentPost = this.posts.find( ({ id }) => id === this.lastPostId )
      }
    }
  },
  created () {
    this.posts = jsonData.data
    this.lastPostId = this.newestPostId
  },
  mounted () {
    this.currentPostId = this.lastPostId
    this.currentPost = this.posts.find( ({ id }) => id === this.lastPostId )
  },
  methods: {
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
      this.currentPostId = randId
      this.updatePost(randId)
    },
    updatePost (id) {
      let newId = id
      this.$router.push({ name: 'posts-post-id', params: { id: `${newId}` }})
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

<style lang="scss">
.container {
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: 100%;
  // grid-template-columns: 900px;
  grid-template-rows: 140px 30px auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  // @media screen and (min-width: 400px) {
  // width: 350px;
  // grid-template-columns: 350px;
  // }

  @media screen and (min-width: 1000px) {
  width: 900px;
  grid-template-columns: 900px;
  }
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

img {
  width: 100%;
}

/* transitions */
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
