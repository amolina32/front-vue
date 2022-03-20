import Login from "@/components/Login/Login.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("TOKEN") == null) {
      store.commit("changeSession", false);
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      store.commit("changeSession", true);
      next();
    }
  } else {
    next();
  }
});

export default router;
