import { expect, test } from "vitest";
import { render } from "@testing-library/vue";

import SelectLanguage from "@/components/ui/SelectLanguage.vue";
import { i18n } from "@/plugins/i18n";
import { fireEvent } from "@testing-library/vue";

const { getByDisplayValue, getByRole } = render(SelectLanguage, {
  global: { plugins: [i18n] },
});

test("set to English", () => {
  getByRole("combobox");
  getByDisplayValue("English");
  expect(i18n.global.locale.value).toBe("en");
});

test("changes locale language to Polish", async () => {
  const selectNode = getByRole("combobox");
  await fireEvent.update(selectNode, "pl");
  expect(i18n.global.locale.value).toBe("pl");
});

test("changes locale language to English", async () => {
  const selectNode = getByRole("combobox");
  await fireEvent.update(selectNode, "en");
  expect(i18n.global.locale.value).toBe("en");
});
