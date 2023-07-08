<template>
  <div class="home">
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>
<script>
/*

*/
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  setup() {
    const search = ref('')
    const names = ref(['qq', 'aa', 'zz', 'dd'])

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    watch(search, () => {
      'search 값이 바뀔 때 마다 실행되는 함수'
      console.log('watch 함수 실행')
    })

    //react 에서의 useEffect와 같은역할
    //watch함수로 추적 하고자 하는 데이터를 등록
    //watchEffect는 해당 Component 가 실행될때 초기 한번은 무조건 실행
    //watch 함수와 마찬가지로, 등록된 값이 변경되면 계속 실행.
    watchEffect(() => {
      console.log('search value가 정의됬기에 search가 바뀔때마다 실행된다', search.value)
    })

    return { names, search, matchingNames }
  }
}
</script>
