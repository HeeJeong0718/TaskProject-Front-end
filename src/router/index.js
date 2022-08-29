//import { createRouter, createWebHistory } from "vue-router";
import Vue from 'vue'
//import HomeView from "../views/HomeView.vue";
import VueRouter from 'vue-router'
import HelloList from "../components/board/HelloList.vue";
import HelloDetail from "../components/board/HelloDetail.vue";
import HelloDetail2 from "../components/board/HelloDetail2.vue";
import HelloEdit from "../components/board/HelloEdit.vue";
import HelloRegister from "../components/board/HelloRegister.vue";
import HelloLogin from "../components/board/HelloLogin.vue";
import HelloNotFound from "../components/board/HelloNotFound.vue";
import HelloAdmin from "../components/board/HelloAdmin.vue";
import HelloMainPage from "../components/board/HelloMainPage.vue";
import HelloMyPage from "../components/board/HelloMyPage.vue";
import HelloDashboard from "../components/board/HelloDashboard.vue";
import HelloDepartment from "../components/Admin/HelloDepartment.vue";
import AdminDashboard from "../components/Admin/AdminDashboard.vue";
import HelloDepartmentDetail from "../components/Admin/HelloDepartmentDetail.vue";

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
    path: "/admin/AdminDashboard",
    name: "adminDashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:AdminDashboard
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
    path: "/board/detail2/:contentId" ,
    name: "detail2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloDetail2
  },
  {
    path: "/board/dashboard" ,
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloDashboard
  },
  {
    path: "/admin/department" ,
    name: "department",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloDepartment
  },
  {
    path: "/admin/dep_detail/:contentId" ,
    name: "department_detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloDepartmentDetail
  },
  {
    path: "/board/MyPage/:contentId" ,
    name: "MyPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:HelloMyPage
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
