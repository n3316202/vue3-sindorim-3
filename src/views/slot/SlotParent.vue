<template>
  <SlotChild>
    <p>이것은 슬롯차일드 입니다.</p>
    <p>이것은 슬롯차일드 입니다.</p></SlotChild
  >
</template>

<script>
import SlotChild from '@/views/slot/SlotChild.vue'

export default {
  components: { SlotChild }
}
</script>

<style scoped></style>

<!-- slot이란 부모가 되는 컴포넌트쪽에서 자식 컴포넌트의 템플렛의 일부를 삽입하는 기능이다. 

Slots are a powerful feature in Vue that allow for more flexible and reusable components.
We use slots in Vue to send content from the parent into the <template> of a child component. -->
