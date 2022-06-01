import { expect, test, describe } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

import App from "@/App.vue";
import { i18n } from "@/plugins/i18n";
import router from "@/router";

const { getByText, getByRole } = render(App, {
  global: { plugins: [i18n, router] },
});

router.push("/");
await router.isReady();

describe("full app navigation", () => {
  test("defaults to home view", () => {
    getByText("Your message:");
  });

  test.todo("routes to ciphers view on '/ciphers'", async () => {
    null;
  });
});
