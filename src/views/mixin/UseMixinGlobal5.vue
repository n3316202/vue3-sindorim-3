<template>
  <div>
    <h2>믹스인을 사용한 에제</h2>
    <input type="text" />
    <div>시간1:{{ $callTime() }}</div>
    <div>시간2:{{ time }}</div>
  </div>
</template>
<script>
/*
  믹스인 전역 사용법
  main.js 에 아래의 내용을 추가

import mixin from '@/mixins/mixins'
// [믹스인추가]
app.mixin(mixin)

*/
export default {
  data() {
    return {
      time: ''
    }
  },
  mounted() {
    this.time = this.$callTime()
  }
}
</script>
