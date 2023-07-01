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
    component: () => import(/* webpackChunkName: "databing1" */ '../views/directives/basic/DataBinding1.vue')
  },
  {
    path: '/databindinghtml2',
    name: 'Databindinghtml2',
    component: () => import(/* webpackChunkName: "databindinghtml2" */ '../views/directives/basic/DataBindingHtml2.vue')
  },
  {
    path: '/databindinginputtext3',
    name: 'DataBindingInputText3',
    component: () =>
      import(/* webpackChunkName: "databindinginputtext3" */ '../views/directives/form-input/DataBindingInputText3.vue')
  },
  {
    path: '/databindinginputnumber4',
    name: 'DataBindingInputNumber4',
    component: () =>
      import(
        /* webpackChunkName: "databindinginputnumber4" */ '../views/directives/form-input/DataBindingInputNumber4.vue'
      )
  },
  {
    path: '/databindingtextarea5',
    name: 'DataBindingTextarea5',
    component: () =>
      import(/* webpackChunkName: "databindingtextarea5" */ '../views/directives/form-input/DataBindingTextarea5.vue')
  },
  {
    path: '/databindingselect6',
    name: 'databindingselect6',
    component: () =>
      import(/* webpackChunkName: "databindingselect6" */ '../views/directives/form-input/DataBindingSelect6.vue')
  },
  {
    path: '/databindingcheckbox7',
    name: 'DataBindingCheckbox7',
    component: () =>
      import(/* webpackChunkName: "databindingcheckbox7" */ '../views/directives/form-input/DataBindingCheckbox7.vue')
  },
  {
    path: '/databindingcheckbox8',
    name: 'DataBindingCheckbox8',
    component: () =>
      import(/* webpackChunkName: "databindingcheckbox8" */ '../views/directives/form-input/DataBindingCheckbox8.vue')
  },
  {
    path: '/databindingradio9',
    name: 'DataBindingRadio9',
    component: () =>
      import(/* webpackChunkName: "databindingradio9" */ '../views/directives/form-input/DataBindingRadio9.vue')
  },
  {
    path: '/databindingattribute10',
    name: 'DataBindingAttribute10',
    component: () =>
      import(/* webpackChunkName: "databindingattribute10" */ '../views/directives/vbind/DataBindingAttribute10.vue')
  },
  {
    path: '/databindingbutton11',
    name: 'DataBindingButton11',
    component: () =>
      import(/* webpackChunkName: "databindingbutton11" */ '../views/directives/vbind/DataBindingButton11.vue')
  },
  {
    path: '/databindingclass12',
    name: 'DataBindingClass12',
    component: () =>
      import(/* webpackChunkName: "databindingclass12" */ '../views/directives/vbind/DataBindingClass12.vue')
  },
  {
    path: '/databindingclass13',
    name: 'DataBindingClass13',
    component: () =>
      import(/* webpackChunkName: "databindingclass13" */ '../views/directives/vbind/DataBindingClass13.vue')
  },
  {
    path: '/databindinglist14',
    name: 'DataBindingList14',
    component: () =>
      import(/* webpackChunkName: "databindinglist14" */ '../views/directives/vfor/DataBindingList14.vue')
  },
  {
    path: '/databindinglist15',
    name: 'DataBindingList15',
    component: () =>
      import(/* webpackChunkName: "databindinglist15" */ '../views/directives/vfor/DataBindingList15.vue')
  },
  {
    path: '/eventclick17',
    name: 'EventClick17',
    component: () => import(/* webpackChunkName: "renderingvif16" */ '../views/directives/von/EventClick17.vue')
  },
  {
    path: '/eventchange18',
    name: 'EventChange18',
    component: () => import(/* webpackChunkName: "renderingvif16" */ '../views/directives/von/EventChange18.vue')
  },
  {
    path: '/eventkey19',
    name: 'EventKey19',
    component: () => import(/* webpackChunkName: "renderingvif16" */ '../views/directives/von/EventKey19.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
