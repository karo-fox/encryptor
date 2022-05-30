import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";
/**
 * @type {import('vitest').UserConfig}
 */
const config = {
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: "/tests/setup.ts",
  },
};

export default config;
