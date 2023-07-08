<template>
  <h1>msg = {{ msg }}</h1>
  <input v-model="msg" />
</template>
<script>
/*
https://velog.io/@chosh/Vue%EC%9D%98-reactive-ref-toRef-toRefs

원시타입의 식별자 부재는 object의 프로퍼티를 복사할 때도 문제가 됩니다. 
만약에 복사하려는 값이 원시타입이면, 자바스크립트는 바로 value 값만 복사하기 때문에 Proxy의 반응성을 잊어버립니다.
words의 a가 string이기 때문에 복사를 하면 value값만 복사해 반응성을 잃어버려서 반영되지 않는 모습입니다.


이를 해결하기 위해 toRef를 사용할 수 있습니다. 
toRef는 하나의 property에 대해 부모 object와의 연결성을 유지한채로 reactive를 반환합니다. 
이 복사본의 변화는 부모에게도 반영이 되어 추적됩니다.

toRefs
마지막으로 toRefs는 reactive의 모든 프로퍼티 대해 toRef를 적용해 반환합니다.
그래서 destructing을 쓸 수가 있습니다.

*/
import { reactive, toRef } from 'vue'

export default {
  setup() {
    const words = reactive({ a: 'a', b: 'b' })

    //const msg = words.a // proxy 객체에서 값만 복사됨
    const msg = toRef(words, 'a')
    //const {a,b} = toRefs(words)

    return {
      words,
      msg
    }
  }
}
</script>
