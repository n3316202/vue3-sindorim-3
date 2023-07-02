<template>
  <child-component ref="child_component" />
</template>
<script>
import ChildComponent from '@/views/props//ChildComponent2'
export default {
  //부모컴포넌트에서 자식 컴포넌트의 함수 직접 호출하기

  components: { ChildComponent },
  mounted() {
    this.$refs.child_component.callFromParent()
  }
}
</script>
