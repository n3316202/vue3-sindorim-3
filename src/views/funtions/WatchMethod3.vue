<template>
  <div>
    <h1>FullName : {{ fullName }}</h1>
    <button type="button" @click="changeName">변경</button>
    <button type="button" @click="changeLastName">라스트 변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'SungJae',
      lastName: 'Park',
      fullName: ''
    }
  },
  watch: {
    firstName() {
      alert('변경감지 퍼스트네임')
      this.fullName = this.firstName + '' + this.lastName
    },
    lastName() {
      alert('변경감지 라스트 네임')
      this.fullName = this.firstName + '' + this.lastName
    }
  },
  methods: {
    changeName() {
      this.firstName = 'Soooooo'
    },
    changeLastName() {
      this.lastName = 'Son'
    }
  }
}
</script>
