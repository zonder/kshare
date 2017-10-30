import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./theme/pages/HomePage.vue";
import CategoryPage from "./theme/pages/CategoryPage.vue";
import NotFoundPage from "./theme/pages/NotFoundPage.vue";

const AboutPage = () => System.import("./theme/pages/AboutPage.vue"); // Lazy component

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "is-active",
  scrollBehavior: (to, from, savedPosition) => {
    return {y: 0};
  },
  routes: [
    { path: "/", component: HomePage },
    { path: "/category/:id", component: CategoryPage },
    { path: "/about", component: AboutPage },
    { path: "/test", redirect: "/redirect-url" },
    { path: "*", component: NotFoundPage }
  ]
});

export default router;
