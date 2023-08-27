<template>
  <div>
    <h1>{{ props.msg }}</h1>
  </div>
  <br />
  <button @click="incresementClick">incresement : {{ count }}</button>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  msg: String
})

const count = ref(0)
const emit = defineEmits(['increment'])

const incresementClick = () => {
  count.value++
  emit('increment', count.value)
}
</script>
