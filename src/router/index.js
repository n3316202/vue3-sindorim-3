import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/databinding1',
    name: 'DataBinding1',
    component: () => import(/* webpackChunkName: "databing1" */ '../views/binding/DataBinding1.vue')
  },
  {
    path: '/databindinghtml2',
    name: 'Databindinghtml2',
    component: () => import(/* webpackChunkName: "databindinghtml2" */ '../views/binding/DataBindingHtml2.vue')
  },
  {
    path: '/databindinginputtext3',
    name: 'DataBindingInputText3',
    component: () =>
      import(/* webpackChunkName: "databindinginputtext3" */ '../views/binding/DataBindingInputText3.vue')
  },
  {
    path: '/databindinginputnumber4',
    name: 'DataBindingInputNumber4',
    component: () =>
      import(/* webpackChunkName: "databindinginputnumber4" */ '../views/binding/DataBindingInputNumber4.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
