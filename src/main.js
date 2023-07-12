import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import mixin from '@/mixins/mixins'
// import store from './store'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//createApp(App).use(router).mount('#app')

// [앱 생성 실시]
const app = createApp(App)

// [axios / http 통신]
app.config.globalProperties.$axios = axios

// [라우터 사용 설정]
app.use(router)

// [믹스인 추가]
app.mixin(mixin)

//[Vuex 사용법]
// app.use(store)

//[Pinia 사용법]
app.use(createPinia())

// [main 아이디 : 렌더링 시작점]
app.mount('#app')
