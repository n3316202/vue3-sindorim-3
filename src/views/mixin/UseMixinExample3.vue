<template>
  <div>
    <h2>믹스인을 사용한 에제</h2>
    <input type="text" />
    <div>시간:{{ $callTime() }}</div>
  </div>
</template>
<script>
//https://hdevstudy.tistory.com/191

import ApiMixin from '@/mixins/mixins.js'

export default {
  mixins: [ApiMixin]
}
</script>
