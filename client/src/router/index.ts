import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ciphers",
      name: "ciphers",
      component: () => import("../views/CiphersView.vue"),
    },
    {
      path: "/ciphers/ceasar",
      name: "ceasar",
      component: () =>
        import("../views/cipher_descriptions/CeasarDescriptionView.vue"),
    },
    {
      path: "/ciphers/switch",
      name: "switch",
      component: () =>
        import("../views/cipher_descriptions/SwitchCipherDescription.vue"),
    },
  ],
});

export default router;
