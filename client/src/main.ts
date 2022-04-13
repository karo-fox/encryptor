import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./plugins/i18n";
import "./index.css";

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
