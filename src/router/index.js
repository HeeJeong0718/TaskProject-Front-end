//import { createRouter, createWebHistory } from "vue-router";
import Vue from 'vue'
import HomeView from "../views/HomeView.vue";
import VueRouter from 'vue-router'
import HelloList from "../components/board/HelloList.vue";
import HelloDetail from "../components/board/HelloDetail.vue";
import HelloEdit from "../components/board/HelloEdit.vue";
import HelloRegister from "../components/board/HelloRegister.vue";
import HelloLogin from "../components/board/HelloLogin.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/board/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloList
  },
  {
    path: "/board/edit",
    name: "edit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloEdit
  },
  {
    path: "/board/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloRegister
  },
  {
    path: "/board/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloLogin
  },
  {
    path: "/board/detail/:contentId" ,
    name: "detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloDetail
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router;
