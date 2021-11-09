import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import Home from "../views/Home.vue";
import Library from "../views/Library.vue";
import Welcome from "../views/Welcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Search",
    name: "Search",
    component: Search,
    meta: {
      title: "Search",
    },
  },
  {
    path: "/Library",
    name: "Library",
    component: Library,
    meta: {
      title: "Library",
    },
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    meta: {
      title: "Welcome",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
