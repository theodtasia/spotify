import Vue from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
Vue.config.productionTip = false;
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faSearch, faMusic } from "@fortawesome/free-solid-svg-icons";
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faSearch, faHome, faMusic);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
