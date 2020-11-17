import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {layout: "main"},
    component: () => import("../views/Home")
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("../views/Login")
  },
  {
    path: "/tasks",
    name: "Tasks",
    meta: { layout: "main" },
    component: () => import("../views/Tasks")
  },
  {
    path: "/register",
    name: "Register",
    meta: { layout: "empty" },
    component: () => import("../views/Register")
  },
  {
    path: "/dictionary",
    name: "Dictionary",
    meta: { layout: "main" },
    component: () => import("../views/Dictionary")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
