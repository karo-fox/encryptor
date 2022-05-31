import { expect, test } from "vitest";
import { render } from "@testing-library/vue";

import App from "@/App.vue";
import { i18n } from "@/plugins/i18n";
import router from "@/router";

test("full app navigation", () => {
  const { getByText } = render(App, {
    global: { plugins: [i18n, router] },
  });
  getByText("Your message:"); //FIXME: This doesn't seem to work
});
