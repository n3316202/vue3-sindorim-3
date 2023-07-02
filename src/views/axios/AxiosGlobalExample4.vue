<template>
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  //main.js 에서 셋팅 한다.
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      console.log(response)
      console.log(response.data)
      this.posts = response.data
    })
  }
}
</script>

<style></style>
