import { render } from "@testing-library/vue";
import { test } from "vitest";

import CipherDescription from "@/components/CipherDescription.vue";
import { i18n } from "@/plugins/i18n";

const { getByText } = render(CipherDescription, {
  global: { plugins: [i18n] },
  props: { cipherName: "test" },
  slots: {
    default: "test default",
    params: "test params-description",
  },
});

test("renders with slots", () => {
  getByText("ciphers.test.name");
  getByText("test default");
  getByText("test params-description");
});
