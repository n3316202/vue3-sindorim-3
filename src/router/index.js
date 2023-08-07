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
  },
  {
    path: '/method1',
    name: 'ComputedVSMethod1',
    component: () => import(/* webpackChunkName: "method1" */ '../views/funtions/ComputedVSMethod1.vue')
  },
  {
    path: '/method2',
    name: 'ComputedVSMethod2',
    component: () => import(/* webpackChunkName: "method2" */ '../views/funtions/ComputedVSMethod2.vue')
  },
  {
    path: '/method3',
    name: 'WatchMethod3',
    component: () => import(/* webpackChunkName: "method3" */ '../views/funtions/WatchMethod3.vue')
  },
  {
    //src\views\lifecycle\LifeCyleEvent1.vue
    path: '/lifecycle',
    name: 'LifeCyleEvent1',
    component: () => import(/* webpackChunkName: "lifecycle" */ '../views/lifecycle/LifeCyleEvent1.vue')
  },
  {
    //src\views\axios\AxiosBasicGetView1.vue
    path: '/axios1',
    name: 'AxiosBasicGetView1',
    component: () => import(/* webpackChunkName: "axios1" */ '../views/axios/AxiosBasicGetView1.vue')
  },
  {
    path: '/axios2',
    name: 'AxiosBasicPostView2',
    component: () => import(/* webpackChunkName: "axios2" */ '../views/axios/AxiosBasicPostView2.vue')
  },
  {
    path: '/axios3',
    name: 'AxiosBasicPostView3',
    component: () => import(/* webpackChunkName: "axios3" */ '../views/axios/AxiosBasicPostView3.vue')
  },
  {
    path: '/axios4',
    name: 'AxiosGlobalExample4',
    component: () => import(/* webpackChunkName: "axios4" */ '../views/axios/AxiosGlobalExample4.vue')
  },
  {
    path: '/axios5',
    name: 'AxiosSyncView5',
    component: () => import(/* webpackChunkName: "axios5" */ '../views/axios/AxiosSyncView5.vue')
  },
  {
    //src\views\event\EventChangeView1.vue
    path: '/event1',
    name: 'EventChangeView1',
    component: () => import(/* webpackChunkName: "event1" */ '../views/event/EventChangeView1.vue')
  },
  {
    path: '/event2',
    name: 'EventKeyView2',
    component: () => import(/* webpackChunkName: "event2" */ '../views/event/EventKeyView2.vue')
  },
  {
    //src\views\compo\NestedComponent.vue
    path: '/compo1',
    name: 'NestedComponent',
    component: () => import(/* webpackChunkName: "compo1" */ '../views/compo/NestedComponent.vue')
  },
  {
    path: '/props1',
    name: 'ParentComponent1',
    component: () => import(/* webpackChunkName: "props1" */ '../views/props/ParentComponent1.vue')
  },
  {
    path: '/props2',
    name: 'ParentComponent2',
    component: () => import(/* webpackChunkName: "props2" */ '../views/props/ParentComponent2.vue')
  },
  {
    path: '/props3',
    name: 'ParentComponent3',
    component: () => import(/* webpackChunkName: "props3" */ '../views/props/ParentComponent3.vue')
  },
  {
    //D:\sindorim-vue3\vue3-sindorim-3\src\views\props\ParentComponentEmit4.vue
    path: '/props4',
    name: 'ParentComponentEmit4',
    component: () => import(/* webpackChunkName: "props4" */ '../views/props/ParentComponentEmit4.vue')
  },
  {
    //src\views\slot\SlotUseModalLayout.vue
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "slot" */ '../views/slot/SlotUseModalLayout.vue')
  },
  {
    //src\views\slot\SlotUseModalLayout.vue
    path: '/slot2',
    name: 'SlotParent',
    component: () => import(/* webpackChunkName: "slot" */ '../views/slot/SlotParent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
