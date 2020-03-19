import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollmagic from "vue-scrollmagic";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import Scrollbar from "smooth-scrollbar";

Vue.use(VueScrollmagic, {
  refreshInterval: 100
});
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// intialize scrollbar
// Scrollbar.init(document.querySelector("#app"));

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
