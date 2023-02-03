import { createApp } from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import routerBeforeEach from "./router/router";
import "./style.css";

routerBeforeEach(router, store);

createApp(App).use(router).use(store).mount("#app");
