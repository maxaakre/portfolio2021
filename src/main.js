import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/main.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import titleMixin from "./mixins/titleMixin";
import VueScrollTo from "vue-scrollto";

AOS.init({
  once: true,
  offset: 500,
});

createApp(App)
  .use(store)
  .use(router)
  .use(VueScrollTo)
  .mixin(titleMixin)
  .mount("#app");
