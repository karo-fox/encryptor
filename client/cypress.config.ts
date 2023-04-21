import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    }
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
});
