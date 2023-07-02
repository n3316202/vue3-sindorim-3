<template>
  <h1 v-if="level == 1">{{ title }}</h1>
  <h2 v-if="level == 2">{{ title }}</h2>

  <!-- <h3 v-if="level == 3">{{ title }}</h3>
  <h4 v-if="level == 4">{{ title }}</h4>
  <h5 v-if="level == 5">{{ title }}</h5> -->

  <h2>isBool : {{ isBool }}</h2>
  <h2>arrNum : {{ arrNum }}</h2>
  <h2>objTitle : {{ objTitle.id }} : {{ objTitle.title }}</h2>
</template>
<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      //문자형 전달
      type: String,
      default: '페이지 제목입니다.'
    },
    level: {
      type: Number,
      default: 1
    },
    isBool: {
      type: Boolean,
      default: false
    },
    arrNum: {
      type: Array,
      default: function () {
        return [1, 2]
      }
    },
    objTitle: {
      type: Object,
      default: function () {
        return { id: 1, title: '디폴트' }
      }
    }
  }
}
</script>
