import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollmagic from "vue-scrollmagic";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollmagic, {
  refreshInterval: 10
});
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
