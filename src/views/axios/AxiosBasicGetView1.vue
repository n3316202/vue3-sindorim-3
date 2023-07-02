<template>
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
//Axios 를 사용 하기 위해서는 Axios를 다운 받는다. npm install axios 그리고 package.json에서 확인
//https://www.koderhq.com/tutorial/vue/http-axios/ 예제 참고
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      console.log(response)
      console.log(response.data)
      this.posts = response.data
    })
  }
}
</script>

<style></style>
