https://ryu-e.tistory.com/53

1. 라이팅의 의미
   특정 URL을 특정 컴포넌트로 연결(라이팅) 한다는 의미

2. 뷰라우터 설치및 기본 설명

## https://velog.io/@kungsboy/Vue-3.0-vue-router-%EC%84%A4%EB%AA%85

## https://velog.io/@yjyoo/vue.js-Vue-Router-%EC%A0%95%EB%A6%AC
- 기본설명

3. lazy loading

SPA의 특성상 모든 파일이 로드 되어야 서버의 호출 없이 다음 페이지로의 전환이 이루어 지는데
이를 Lazy Loading으로 처리하여 초기 로딩을 분산하는 방법입니다.

지연된 로딩 (Lazy Loading) 이란 해당 기능이 필요한 타이밍에 로딩 하여 사용 하는 방법 입니다.
불필요하게 index 페이지에서 당장 사용 하지 않는 리소스 다운 시간을 단축

4.prefetch
컴포넌트를 미리 받아 놓는다는 의미

5. 동적 컴포넌트 VS 정적 컴포넌트

정적 컴포넌트
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
{
path: "/",
name: "home",
component: HomeView,
},
{
path: "/about",
name: "about",
component: AboutView,
},
];

동적 컴포넌트
import(
/_ webpackChunkName: "home" _/ /_webpackPrefetch: true_/ "../views/HomeView.vue"
),

6. 동적 컴포넌트에서의 두가지 옵션
   /_ webpackChunkName: "home" _/ => chunk 이름을 정할수 있음
   /_webpackPrefetch: true_/ => 미리 받아 놓음
