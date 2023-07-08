<template>
  <div class="hr-sect">{{ title }}</div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
.hr-sect {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0);
  font-size: 20px;
  margin: 8px 0px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.hr-sect::before,
.hr-sect::after {
  content: '';
  flex-grow: 1;
  background: rgba(0, 0, 0);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 16px;
}
</style>
