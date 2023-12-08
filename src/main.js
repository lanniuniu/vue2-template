import Vue from "vue";
import App from "./App.vue";
import 'normalize.css';
import 'lib-flexible';
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
