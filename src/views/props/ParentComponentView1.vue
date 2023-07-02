<template>
  <div>
    <child-component :childValue="value"></child-component>
  </div>
</template>

<script>
import ChildComponent from '@/views/props/ChildComponentView1.vue'

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      value: '자식에게 넘겨줄 값'
    }
  }
}
</script>

<style scoped></style>
