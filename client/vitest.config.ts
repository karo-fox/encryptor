import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vitest/config";

import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

export default defineConfig({
  plugins: [vue(), vueI18n()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
  },
});
