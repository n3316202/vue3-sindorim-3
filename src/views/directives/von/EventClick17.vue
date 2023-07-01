<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The counter is : {{ counter }}</p>
  </div>
  <hr />
  <div>
    <!-- 파라미터 전달 하고 싶을때 -->
    <button type="button" @click="setCount(7)">Set 7</button>
    <p>The count is : {{ count }}</p>
  </div>
  <hr />
  <div>
    <!-- 여거개의 함수를 호출하고 싶을때 -->
    <button type="button" @click="one(), two()">여러개 함수 호출하고</button>
  </div>
</template>
<script>
//클릭 이벤트
//v-on:click 또는 @click="메소드명"
export default {
  data() {
    return {
      counter: 0,
      count: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1
    },
    setCount(count) {
      this.count = count
    },
    one() {
      alert('원 입니다.')
    },
    two() {
      alert('투입니다.')
    }
  }
}
</script>
