import { fireEvent, render } from "@testing-library/vue";
import { expect, test } from "vitest";

import ParametersPanel from "@/components/ParametersPanel.vue";
import { i18n } from "@/plugins/i18n";

test("emits updateParams event on update:modelValue", async () => {
  const params = [{ type: "text", valueName: "test" }];
  const { getByLabelText, emitted } = render(ParametersPanel, {
    global: { plugins: [i18n] },
    props: { cipher: "test", params },
  });
  const input = getByLabelText("Ciphers.test.params.test.name:");
  await fireEvent.update(input, "new value");

  expect(emitted().updateParams[0]).toEqual([
    { valueName: "test", value: "new value" },
  ]);
});
