<!-- https://sungjaecloud.tistory.com/314 -->
<!-- https://velog.io/@kungsboy/Vue-3.0-Compute-vs-Watch-%EC%B0%A8%EC%9D%B4 -->

<template>
  <h1>full name : {{ fullName }}</h1>
  <h1>Full Name : {{ getFullName() }}</h1>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'SungJae',
      lastName: 'Park'
    }
  },
  computed: {
    fullName() {
      console.log('컴퓨 함수 호출')
      return this.firstName + '' + this.lastName
    }
  },
  methods: {
    getFullName() {
      console.log('메써드 호출')
      return this.firstName + '' + this.lastName
    }
  }
}
</script>
