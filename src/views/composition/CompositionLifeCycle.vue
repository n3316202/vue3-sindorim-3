<template>
  <div>
    {{ post.title }}
    {{ post.body }}
  </div>
</template>
<script>
//https://kyounghwan01.github.io/Vue/vue3/composition-api/#life-cycle

// mounted -> onMounted
// unmounted -> onUnmounted
// updated -> onUpdated
export default {
  // 사용할 props를 배열내에 정의합니다.
  props: ['posts'],
  setup(props) {
    console.log('Set up 함수 호출')
    onMounted(() => console.log('component mounted'))
    onUnmounted(() => console.log('component onUnmounted'))
    onUpdated(() => console.log('component onUpdated'))
    console.log(props.posts) // 받은 prop 사용가능
  }
}
</script>
