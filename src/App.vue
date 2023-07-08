<template>
  <nav>
    <router-link to="/provide">Home</router-link> | <router-link to="/databinding1">Data Binding</router-link> |
    <router-link to="/databindinghtml2">Data Binding Html</router-link> |
    <router-link to="/databindingInputText3">Data Binding InputText</router-link> |
    <router-link to="/databindinginputnumber4">Data Binding number input</router-link> |
    <router-link to="/databindingtextarea5">Data Binding text area</router-link> |
    <router-link to="/databindingselect6">Data Binding Select</router-link> |
    <router-link to="/databindingcheckbox7">Data Binding Check Box</router-link> |
    <router-link to="/databindingcheckbox8">Data Binding Check Box2</router-link> |
    <router-link to="/databindingcheckbox8">Data Binding Radio</router-link> |
    <HRDelimeter title="바인딩 예제" />
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
    <hr />
    <router-link to="/method1">Method VS Computed 예제1</router-link> |
    <router-link to="/method2">Method VS Computed 예제2</router-link> |
    <router-link to="/method3">watch 예제</router-link> |
    <hr />
    <router-link to="/lifecycle">라이프 사이클 예제</router-link> |
    <hr />
    <router-link to="/axios1">Axios-예제 1 - Get 방식 </router-link> |
    <router-link to="/axios2">Axios-예제 2 - Post 방식</router-link> |
    <router-link to="/axios3">Axios-예제 3 - Post 방식 2</router-link> |
    <router-link to="/axios4">Axios-예제 4 - 글로벌 세팅</router-link> |
    <router-link to="/axios5">Axios-예제 5 - 동기화 예제</router-link> |
    <hr />
    <router-link to="/event1">이벤트-예제 1</router-link> | <router-link to="/event2">이벤트-예제 2</router-link> |
    <hr />
    <router-link to="/compo1">컴포넌트-예제 1</router-link> |
    <hr />
    <router-link to="/props1">프롭스-예제 1(이벤트 직접 발생 시키기)</router-link> |
    <router-link to="/props2">프롭스-예제 2(함수 직접 호출)</router-link> |
    <router-link to="/props3">프롭스-예제 3(데이터값 직접 변경)</router-link> |
    <router-link to="/props4">프롭스-예제 4(에밋)-(자식에서 부모로)</router-link> |
    <hr />
    <router-link to="/slot">slot 예제</router-link> |
    <hr />
    <router-link to="/provide">provide/inject 예제</router-link> |
    <HRDelimeter title="컴포지션 API 예제들" />
    <router-link to="/cal1">계산기(기존 계산기 예제)</router-link> |
    <router-link to="/cal2">계산기(컴포지션 API 예제)</router-link> |
    <router-link to="/cal3">계산기(Ref 예제)</router-link> | <router-link to="/cal3">계산기(Ref 예제)</router-link> |
    <router-link to="/cal4">ToRef 예제</router-link> |
    <router-link to="/cal5">컴포지션 API-함수들(computed,watch,watchEffect)</router-link> |
    <router-link to="/cal6">컴포지션 provide/injection</router-link> |
  </nav>
  <router-view />
</template>
<script>
import HRDelimeter from '@/views/utils/HRDelimeter.vue'
//src\views\utils\HRDelimeter.vue
export default {
  components: { HRDelimeter }
}
</script>

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
