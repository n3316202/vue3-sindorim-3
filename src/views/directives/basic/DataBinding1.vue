<template>
  <h1>Hello, {{ title }}!</h1>
  <h1 v-text="fruit"></h1>
</template>

<script>
//문자열 바인딩 예제
//html에 텍스트 바인딩시 {{ }} 이중 중괄호를 이용함
export default {
  data() {
    return {
      title: 'World',
      fruit: 'orange'
    }
  }
}
</script>
