import Vue from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import router from "./router";
import store from "./store";
import navbar from "./components/Navbar.vue";
Vue.component("navbar", navbar);
Vue.config.productionTip = false;
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faSearch,
  faMusic,
  faPlusCircle,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faSearch, faPlayCircle, faHome, faMusic, faPlusCircle);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
