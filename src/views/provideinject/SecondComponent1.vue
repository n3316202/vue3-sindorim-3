<template>
  <div class="comp comp-scolor">
    <p class="comp-name">Second Component</p>
    <p>props : {{ name }}</p>

    <ThirdComponent :name="name" />
  </div>
</template>

<script>
import ThirdComponent from '@/views/provideinject/ThirdComponent1.vue'

export default {
  components: { ThirdComponent },
  props: {
    name: String
  }
}
</script>
