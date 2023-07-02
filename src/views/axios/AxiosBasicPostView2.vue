<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {}
  },
  mounted() {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: '1',
        title: 'Article title',
        body: 'Article body content'
      })
      .then((response) => {
        //document.write(response.data.body)
        //document.write(response.data.id)

        console.log(response)
      })
  }
}
</script>
