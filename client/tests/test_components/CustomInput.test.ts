import { expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/vue";

import CustomInput from "@/components/CustomInput.vue";
import { i18n } from "@/plugins/i18n";
import { config } from "@vue/test-utils";

config.global.mocks = {
  $t: (text) => text,
};
const testValidate = (val: string | number) => val;
const { getByText, getByLabelText, emitted } = render(CustomInput, {
  global: { plugins: [i18n] },
  props: {
    cipher: "test",
    valueName: "test",
    type: "text",
    modelValue: "",
    validate: testValidate,
  },
});

test("renders properly with provided props", () => {
  getByText("Ciphers.test.params.test.name:");
  const inputNode = getByLabelText("Ciphers.test.params.test.name:");
  expect(inputNode.nodeValue).toBe(null);
});

test("emits update event on input", async () => {
  const inputNode = getByLabelText("Ciphers.test.params.test.name:");
  await fireEvent.update(inputNode, "new value");
  expect(emitted()).toHaveProperty("update:modelValue");
  expect(emitted()["update:modelValue"][0][0]).toBe("new value");
});

test.todo("shows validation errors", async () => {
  const inputNode = getByLabelText("Ciphers.test.params.test.name:");

  await fireEvent.update(inputNode, "test invalid value");
  getByText("test invalid value");
});
// TODO: Should pass, I believe, but i don't know if its tests
