import { expect, test } from "vitest";
import { render } from "@testing-library/vue";

import SelectLanguage from "@/components/ui/SelectLanguage.vue";
import { i18n } from "@/plugins/i18n";
import { fireEvent } from "@testing-library/vue";

test("changes locale language to English", async () => {
  const { getByDisplayValue, getByRole } = render(SelectLanguage, {
    global: { plugins: [i18n] },
  });

  const selectNode = getByRole("combobox");
  getByDisplayValue("English");
  expect(i18n.global.locale.value).toBe("en");

  await fireEvent.update(selectNode, "pl");
  expect(i18n.global.locale.value).toBe("pl");
});

// test("changes locale language to Polish", () => {
//   const { getByDisplayValue, getByRole } = render(SelectLanguage, {
//     global: { plugins: [i18n] },
//   });
//   getByRole("combobox");
//   getByDisplayValue("Polski");
//   expect(i18n.global.locale.value).toBe("pl");
// });
