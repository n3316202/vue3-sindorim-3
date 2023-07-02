<template>
  <child-component @send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponent from '@/views/props/ChildComponent1.vue'
//부모컴포넌트에서 자식 컴포넌트 이벤트 직접 발생 시키기
//this.$refs 를 통해 ref="id"를 직접 접근
//ref 는 html 태그에서 id 와 비슷한 기능을 함

export default {
  components: { ChildComponent },
  mounted() {
    this.$refs.child_component.$refs.btn.click()
  }
}
</script>
