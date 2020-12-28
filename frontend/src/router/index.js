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
    meta: {layout: "empty"},
    component: () => import("../views/Login")
  },
  {
    path: "/tasks",
    name: "Tasks",
    meta: {layout: "main"},
    component: () => import("../views/Tasks")
  },
  {
    path: "/register",
    name: "Register",
    meta: {layout: "empty"},
    component: () => import("../views/Register")
  },
  {
    path: "/dictionary",
    name: "Dictionary",
    meta: {layout: "main"},
    component: () => import("../views/Dictionary")
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {layout: "main"},
    component: () => import("../views/Profile")
  },
  {
    path: "/courses",
    name: "Courses",
    meta: {layout: "main"},
    component: () => import("../views/Courses")
  },
  {
    path: "/course_task/:tId",
    name: "CourseTask",
    meta: {layout: "main"},
    component: () => import("../views/CourseTask")
  },
  {
    path: "/text_task/:tId",
    name: "TextTask",
    meta: {layout: "main"},
    component: () => import("../views/TextTask")
  },
  {
    path: "/video_task/:tId",
    name: "VideoTask",
    meta: {layout: "main"},
    component: () => import("../views/VideoTask")
  },
  {
    path: "/translate_task/:tId",
    name: "TranslateTask",
    meta: {layout: "main"},
    component: () => import("../views/TranslateTask")
  },
  {
    path: "/all_words",
    name: "AllWords",
    meta: {layout: "main"},
    component: () => import("../views/AllWords")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
