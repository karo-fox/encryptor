import { test } from "vitest";
import { render } from "@testing-library/vue";

import App from "@/App.vue";
import HomeView from "@/views/HomeView.vue";
import CiphersView from "@/views/CiphersView.vue";
import CeasarDescriptionView from "@/views/cipher_descriptions/CeasarDescriptionView.vue";
import SwitchDescriptionView from "@/views/cipher_descriptions/SwitchDescriptionView.vue";
// import { VueI18n } from "vue-i18n";
// import { i18n } from "@/plugins/i18n";

// const routes = [
//   { path: "/", name: "home", component: HomeView },
//   { path: "/ciphers", name: "ciphers", component: CiphersView },
//   { path: "/ciphers/ceasar", name: "ceasar", component: CeasarDescriptionView },
//   { path: "/ciphers/switch", name: "switch", component: SwitchDescriptionView },
// ];

//TODO: you should really test routing
