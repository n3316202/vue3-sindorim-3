<template>
  <div>
    <PageTitle />

    <!-- boolean 전달 -->
    <!-- <PageTitle :level="2" :isBool="true" /> -->

    <!-- 숫자형 전달 -->
    <!-- <PageTitle :level="2" /> -->

    <!-- 배열전달 전달 -->
    <PageTitle :level="2" :arrNum="[1, 2, 3, 4]" />

    <!-- 문자형 전달 -->
    <!-- <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달" /> -->
  </div>
</template>
<script>
import PageTitle from '@/views/compo/PageTitle.vue'
export default {
  components: { PageTitle }
}
</script>
