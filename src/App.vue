<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/databinding1">Data Binding</router-link> |
    <router-link to="/databindinghtml2">Data Binding Html</router-link> |
    <router-link to="/databindingInputText3">Data Binding InputText</router-link> |
    <router-link to="/databindinginputnumber4">Data Binding number input</router-link> |
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
