import Vue from "vue";
import Vuelidate from "vuelidate/src";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from 'axios'
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.prototype.$http = Axios.create({
  baseURL: 'http://localhost:8081'
})

// Vue.prototype.$http.defaults.headers.common['Authorization'] = "Basic dWk6bXJJVG1ndnpSWE9a"
// Vue.prototype.$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
