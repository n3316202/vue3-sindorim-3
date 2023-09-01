<template>
  <nav>
    <!-- 네비게이션을 위해 router-link 컴포넌트를 사용합니다. -->
    <!-- 구체적인 속성은 `to` prop을 이용합니다. -->
    <!-- 기본적으로 `<router-link>`는 `<a>` 태그로 렌더링됩니다.-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- router-link에 to 속성에 path 대신 name을 지정 가능 -->
    <!-- <router-link :to="{name :'example'}">링크 예제</router-link> | 
    <router-link :to="'/example/' +  '홍길동'">링크 파라미터 전달 예제</router-link> |  -->
    <!-- <router-link :to="{name :'example', params:{username : '홍길동'}}">링크 파라미터 전달 예제</router-link> |  -->

  </nav>
  <!-- 라우트 아울렛 -->
  <!-- 현재 라우트에 맞는 컴포넌트가 렌더링됩니다. -->
  <router-view/>
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
