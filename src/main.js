import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollmagic from "vue-scrollmagic";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import Scrollbar from "smooth-scrollbar";
// import $ from "jquery";

Vue.use(VueScrollmagic, {
  refreshInterval: 10
});
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// intialize scrollbar

// $(function() {
//   Scrollbar.init(document.querySelector("#app"), {
//     damping: 0.05,
//     alwaysShowTracks: true
//   });
// });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
