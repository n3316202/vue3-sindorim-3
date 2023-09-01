import { createRouter, createWebHistory } from "vue-router";
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
  {
    path: "/example",
    name: "example",
    component: AboutView,
  },
  {
    path: "/example/:username",  //파라미터 전달
    name: "example2",
    component: AboutView,
  },
];

//component: () => import(/* webpackChunkName: "about"*/ /*webpackPrefetch: true*/ '../views/AboutView.vue')

//lazy loading 사용시

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: () =>
//       import(
//         /* webpackChunkName: "home" */ /*webpackPrefetch: true*/ "../views/HomeView.vue"
//       ),
//   },
//   {
//     path: "/about",
//     name: "about",
//     component: () =>
//       import(
//         /* webpackChunkName: "about" */ /*webpackPrefetch: true*/ "../views/AboutView.vue"
//       ),
//   },
// ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
