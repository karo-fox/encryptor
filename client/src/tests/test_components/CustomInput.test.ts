import { test } from "vitest";
import { render } from "@testing-library/vue";

import CustomInput from "@/components/CustomInput.vue";
import { i18n } from "@/plugins/i18n";

i18n.global.locale.value = "en";

test("reners properly", () => {
  const { getByText } = render(CustomInput, {
    global: {
      plugins: [i18n],
    },
    props: {
      cipher: "ceasar",
      valueName: "shift",
      type: "text",
      modelValue: "",
    },
  });
  getByText("Shift:");
});
