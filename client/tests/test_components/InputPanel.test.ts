import { describe, expect, test } from "vitest";

import InputPanel from "@/components/InputPanel.vue";
import { fireEvent, render } from "@testing-library/vue";
import { i18n } from "@/plugins/i18n";

const { getByText, getByRole, emitted } = render(InputPanel, {
  global: { plugins: [i18n] },
});

test("emits encryptClicked on click", async () => {
  const encryptButton = getByRole("button");
  await fireEvent.click(encryptButton);
  expect(emitted()).toHaveProperty("encryptClicked");
});

describe("parameters panel rendering", () => {
  const selectNode = getByRole("combobox");

  test("renders ceasar params", async () => {
    await fireEvent.update(selectNode, "ceasar");
    getByText("Shift:");
    getByText("Alphabet:");
  });

  test("renders switch params", async () => {
    await fireEvent.update(selectNode, "switch");
    getByText("Switch key:");
  });
});
