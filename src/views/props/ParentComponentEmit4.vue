<template>
  <child-component @send-message="sendMessage" />
</template>
<script>
//
import ChildComponent from './ChildComponentEmit4'
export default {
  components: { ChildComponent },
  methods: {
    sendMessage(data) {
      console.log(data)
    }
  }
}
</script>
