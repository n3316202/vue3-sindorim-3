<!-- https://velog.io/@kungsboy/Vue-3.0-Compute-vs-Watch-%EC%B0%A8%EC%9D%B4 -->
<template>
  <h1>{{ reverseMessage() }}</h1>
  <h1>{{ reverseMessage() }}</h1>
  <h1>{{ reverseMessage() }}</h1>
  <h1>{{ reverseMessage() }}</h1>

  <h1>{{ computedMessage }}</h1>
  <h1>{{ computedMessage }}</h1>
  <h1>{{ computedMessage }}</h1>
  <h1>{{ computedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Computed!'
    }
  },
  methods: {
    reverseMessage() {
      console.log('이것이 메소드다.')
      //split() 메서드는 받은 문자열을 인수에 있는 문자열로 나눠서 배열 - split('') 는 문자 하나하나를 배열로 만들고
      //reverse() 메서드는 배열의 순서를 반대로 만들어 줍니다.
      //join() 메서드는 배열의 값 사이에 인자값을 넣은 문자열을 만들어 줍니다.
      //https://kpbro.tistory.com/3
      return this.msg.split('').reverse().join('')
    }
  },
  computed: {
    // computed는 연산된 data를 관리하는 공간이다.
    // 아래의 computedMessage()는 메소드처럼 선언되었지만
    // data처럼 명시 및 사용됨을 기억하자.
    computedMessage() {
      console.log('이것이 computed 이다.')
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style>
h1 {
  font-size: 50px;
}
</style>
