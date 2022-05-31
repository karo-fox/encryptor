import { describe, expect, test } from "vitest";

import InputPanel from "@/components/InputPanel.vue";
import { fireEvent, render } from "@testing-library/vue";
import { i18n } from "@/plugins/i18n";

test("emits encryptClicked on click", async () => {
  const { getByRole, emitted } = render(InputPanel, {
    global: { plugins: [i18n] },
  });

  const encryptButton = getByRole("button");
  await fireEvent.click(encryptButton);
  expect(emitted()).toHaveProperty("encryptClicked");
});

describe("parameters panel rendering", () => {
  test("renders ceasar params", async () => {
    const { getAllByRole } = render(InputPanel, {
      global: { plugins: [i18n] },
    });
    const selectCipher = getAllByRole("combobox"); //FIXME: Why does it render twice?
    const selectCeasar = getAllByRole("option", { name: "Ceasar Cipher" });
    // TODO: do this
  });
});
