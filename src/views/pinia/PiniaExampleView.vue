<template>
  <main>
    <h2>Hello Pinia!</h2>
    <div>
      <h4>{{ counter.count }}</h4>
      <h4>Doubled {{ counter.doubleCount }}</h4>
      <button type="button" @click="counter.increment">increment</button>
    </div>
  </main>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>
