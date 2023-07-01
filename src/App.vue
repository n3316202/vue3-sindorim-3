<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/databinding1">Data Binding</router-link> |
    <router-link to="/databindinghtml2">Data Binding Html</router-link> |
    <router-link to="/databindingInputText3">Data Binding InputText</router-link> |
    <router-link to="/databindinginputnumber4">Data Binding number input</router-link> |
    <router-link to="/databindingtextarea5">Data Binding text area</router-link> |
    <router-link to="/databindingselect6">Data Binding Select</router-link> |
    <router-link to="/databindingcheckbox7">Data Binding Check Box</router-link> |
    <router-link to="/databindingcheckbox8">Data Binding Check Box2</router-link> |
    <router-link to="/databindingcheckbox8">Data Binding Radio</router-link> |
    <hr />
    <router-link to="/databindingattribute10">Data Binding v-bind 예제(img/src)</router-link> |
    <router-link to="/databindingbutton11">Data Binding v-bind 버튼예제(disabled)</router-link> |
    <router-link to="/databindingclass12">Data Binding v-bind 클래스예제-1</router-link> |
    <router-link to="/databindingclass13">Data Binding v-bind 클래스예제-2</router-link> |
    <hr />
    <router-link to="/databindinglist14">Data Binding v-for 예제-1</router-link> |
    <router-link to="/databindinglist15">Data Binding v-for 예제-2</router-link> |
    <router-link to="/renderingvif16">렌더링 if 예제</router-link> |
    <router-link to="/eventclick17">이벤트 클릭 예제</router-link> |
    <router-link to="/eventchange18">이벤트 change 예제</router-link> |
    <router-link to="/eventkey19">이벤트 Key 예제</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
