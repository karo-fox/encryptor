import { expect, test, describe, beforeEach, afterEach } from "vitest";
import { render, fireEvent, cleanup } from "@testing-library/vue";

import App from "@/App.vue";
import { i18n } from "@/plugins/i18n";
import router from "@/router";

afterEach(() => cleanup());

describe("full app navigation", () => {
  test("routes to home view on '/'", async () => {
    const { getByText } = render(App, {
      global: { plugins: [i18n, router] },
    });
    router.push("/");
    await router.isReady();
    getByText("Your message:");
  });

  test("routes to ciphers view on '/ciphers'", async () => {
    const { getByText } = render(App, {
      global: { plugins: [i18n, router] },
    });
    router.push("/ciphers");
    await router.isReady();
    getByText("Available ciphers:");
  });

  describe("routes to cipher's descriptions on '/ciphers/...'", () => {
    test("routes to ceasar's description on '/ciphers/ceasar", async () => {
      const { getByText } = render(App, {
        global: { plugins: [i18n, router] },
      });
      router.push("/ciphers/ceasar");
      await router.isReady();
      getByText("Ceasar Cipher");
    });
  });

  test("routes to switch's description on '/ciphers/switch", async () => {
    const { getByText } = render(App, {
      global: { plugins: [i18n, router] },
    });
    router.push("/ciphers/switch");
    await router.isReady();
    getByText("Switch Cipher");
  });
});
