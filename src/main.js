import { createApp } from "vue";
import App from "./App.vue";
import Router from "../src/router/router.js";

createApp(App)
  .use(Router)
  .mount("#app");
