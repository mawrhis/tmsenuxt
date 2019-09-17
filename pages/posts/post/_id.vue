<template>
  <div class="post">
    <h2 class="post-title">{{ title }}</h2>
    <div class="content" v-html="content"></div>
    <div class="tags" v-if="false">
      <div class="tag" v-for="item in tags" :key="tags[item]">{{ item }}</div>
    </div>
  </div>
</template>
<script>
export default {

data: function () {
  return {

  }
},
props: {
  title: String,
  tags: Array,
  content: String

},
methods: {

  }

}
</script>
<style scoped>
.post {
  margin: 1rem 0;
  grid-column-start: 1;
  grid-column-end: 2;
}

.content {
  text-align: center;
}

.tags {
  display: flex;
}

.tag {
  padding: .12rem .75rem;
  margin: .5rem;
  border-radius: 5px;
  background-color: rgb(240, 240, 240);
}

.post-title {
  text-align: center;
  margin: .5rem 0;
}

</style>
