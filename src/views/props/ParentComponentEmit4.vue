<template>
  <child-component @send-message="sendMessage" />
</template>
<script>
//
import ChildComponent from '@/views/props/ChildComponentEmit4.vue'
export default {
  components: { ChildComponent },
  methods: {
    sendMessage(data) {
      console.log(data)
    }
  }
}
</script>
