<template>
  <div>
    <img v-bind:src="imgSrc" />
    <img :src="imgSrc" />
  </div>
</template>
<script>
//v-bind는 제이쿼리의 attr과 비슷한 역할
//html 의 속성인 id,class,style 등에 model data 와 연결
export default {
  data() {
    return {
      imgSrc: 'https://kr.vuejs.org/images/logo.png'
    }
  }
}
</script>
