import { render } from "@testing-library/vue";
import { test } from "vitest";

import CipherDescription from "@/components/CipherDescription.vue";
import { i18n } from "@/plugins/i18n";

test("renders with slots", () => {
  const { getByText } = render(CipherDescription, {
    global: { plugins: [i18n] },
    props: { cipherName: "test" },
    slots: {
      default: "test default",
      paramsDescription: "test params-description",
    },
  });
  getByText("ciphers.test.name");
  getByText("test default");
  getByText("test params-description");
});
