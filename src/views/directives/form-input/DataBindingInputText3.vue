<template>
  <div>
    <div>인풋 글자: {{ valueModel }}</div>
    <input type="text" v-model="valueModel" />
  </div>
</template>
<script>
//https://velog.io/@kungsboy/Vue-3.0-v-model-%EC%9D%98-%EC%9D%B4%ED%95%B4
//v-model 의 이해?
// v-model 은 data + event 를 동시에 담고 있다고 생각 하면된다.

//https://v2.ko.vuejs.org/v2/guide/components.html#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EC%9D%98-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%ED%8F%BC-%EC%9E%85%EB%A0%A5-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0

export default {
  data() {
    return {
      valueModel: 'South Korea'
    }
  }
}
</script>

<style scoped>
input,
div {
  font-size: 20px;
}
</style>

<!-- <button onclick="alert(textContent)">클릭</button>
<input name="test" onchange="console.log(value)"/> -->
