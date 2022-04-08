import Login from "@/components/Login/Login.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store";
import Template from "@/components/Template/Template.vue";
import Home from "@/components/Home/Home.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/template/:name",
        name: "Template",
        component: Template,
      },
      {
        path: "/template1/:name",
        name: "Template1",
        component: Template,
      },
      {
        path: "/template2/:name",
        name: "Template2",
        component: Template,
      },
      {
        path: "/template3/:name",
        name: "Template3",
        component: Template,
      },
      {
        path: "/template4/:name",
        name: "Template4",
        component: Template,
      },
      {
        path: "/template5/:name",
        name: "Template5",
        component: Template,
      },
    ],
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
