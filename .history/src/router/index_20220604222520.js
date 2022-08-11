//import { createRouter, createWebHistory } from "vue-router";
import Vue from 'vue'
//import HomeView from "../views/HomeView.vue";
import VueRouter from 'vue-router'
import HelloList from "../components/board/HelloList.vue";
import HelloDetail from "../components/board/HelloDetail.vue";
import HelloEdit from "../components/board/HelloEdit.vue";
import HelloRegister from "../components/board/HelloRegister.vue";
import HelloLogin from "../components/board/HelloLogin.vue";
import HelloNotFound from "../components/board/HelloNotFound.vue";
import HelloAdmin from "../components/board/HelloAdmin.vue";
import HelloMainPage from "../components/board/HelloMainPage.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: HelloLogin,
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
    path: "/main",
    name: "main", //메인페이지
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloMainPage
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
    path: "/board/adminlist",
    name: "adminList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloAdmin
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
  {
    path: "*" ,
    name: "notfound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloNotFound
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router;
