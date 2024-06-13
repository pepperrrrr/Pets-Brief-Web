import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/cats",
    name: "cats",
    component: () => import("../views/Cats.vue"),
  },
  {
    path: "/dogs",
    name: "dogs",
    component: () => import("../views/Dogs.vue"),
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/Mine.vue"),
  },
  {
    path: "/otherSpecies",
    name: "otherSpecies",
    component: () => import("../views/OtherSpecies.vue"),
  },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})


export default router;

