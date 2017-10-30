import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./theme/pages/HomePage.vue";
import AboutPage from "./theme/pages/AboutPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage }
  ]
});

export default router;
