<template>
  <div>
    <h1>{{ readersNumber }} {{ book.title }}</h1>
  </div>
  <br />
  <button @click="incresement">incresement</button>
</template>

<script setup>
//Vue 3 공식 가이드를 보면 <script setup> 문법을 더 선호한다는 것을 확인할 수 있습니다.

// 그 이유는

// 1. 더 적은 상용구로 더 간결한 코드 작성 가능
// 2. 순수 TypeScript 를 사용해 props 및 emit 이벤트를 선언하는 기능
// 3. 더 뛰어난 런타임 성능 ( 템플릿은 중간 프록시 없이 동일한 범위의 렌더 함수로 컴파일됨 )
// 4. 더 뛰어난 IDE 유형의 타입 추론 성능 ( 언어 서버가 코드에서 유형을 추출하는 작업 감소 )

// 등이 있었습니다.

import { ref, reactive } from 'vue'

const readersNumber = ref(0)
const book = reactive({ title: '스크립트 셋업' })

const incresement = () => {
  readersNumber.value += 1
}
</script>
