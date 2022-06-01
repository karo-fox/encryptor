import { test } from "vitest";
import { render } from "@testing-library/vue";

import App from "@/App.vue";
import { i18n } from "@/plugins/i18n";
import router from "@/router";

const { getByRole } = render(App, {
  global: { plugins: [i18n, router] },
});

test.todo("full app navigation", () => {
  getByRole("router-view");
});
// TODO: Ypu have to find a way to test this properly
