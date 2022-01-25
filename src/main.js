import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./router";
import "../src/assets/css/normalize.css";
import { workers } from "./workers";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");

workers();
