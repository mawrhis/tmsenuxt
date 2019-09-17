<template>
<div>
  <div>cleanup</div>
  <button v-on:click="cleanup">
    click to cleanup
  </button>
</div>
</template>
<script>
import jsonData from './data.json'

export default {
  mounted() {
  },
  methods: {
    cleanup () {
      let data = jsonData
      let dataLength = data.feed.entry.length
      let posts = []
      console.log(data.feed.entry)

      // loop through posts and separate data to new array
      var x
      for (x in data.feed.entry) {
        let comix = data.feed.entry[x]
        let post = {}

        post.id = dataLength
        dataLength--
        post.published = comix.published
        post.title = comix.title.text
        post.content = comix.content.text

        let tags = []
        var y
        for (y in comix.category) {
          let tag = comix.category[y].term
          tags.push(tag)
        }

        post.tags = tags
        posts.push(post)
      }

      JSON.stringify(posts)
      console.log (posts)
    }
  }
}
</script>
