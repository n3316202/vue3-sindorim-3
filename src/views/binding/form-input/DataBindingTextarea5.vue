<template>
  <div>
    <textarea v-model="message"></textarea>
  </div>
</template>
<script>
export default {
  // 주의    <textarea>{{ message }}</textarea> 이렇게는 안됨
  data() {
    return {
      message: '여러줄을 입력할 수 있는 textarea 입니다.'
    }
  }
}
</script>
<style scoped>
textarea {
  columns: 100px;
}
</style>
