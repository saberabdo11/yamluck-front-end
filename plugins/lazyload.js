import Vue from "vue";
import VueLazyload from "vue-lazyload";

const loadimage = require("../static/icons/loading.svg");

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1,
});
