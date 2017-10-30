import Vue from "vue";
import Layout from "./theme/Layout.vue";
import router from "./router";

const app = new Vue({
  router,
  ...Layout
});

export {
  app,
  router
};
