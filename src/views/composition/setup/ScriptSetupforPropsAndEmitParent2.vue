<template>
  <ScriptSetupforPropsAndEmitChild2 msg="안녕하세요" @increment="handleEmit"></ScriptSetupforPropsAndEmitChild2>
</template>

<script setup>
import ScriptSetupforPropsAndEmitChild2 from './ScriptSetupforPropsAndEmitChild2.vue'

const handleEmit = (count) => {
  console.log('에밋 실행' + count)
}
</script>
