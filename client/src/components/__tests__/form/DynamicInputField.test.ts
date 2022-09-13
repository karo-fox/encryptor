import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import DynamicInputField from "@/components/form/DynamicInputField.vue";
import { ref } from "vue";
import { InputType } from "@/core/models";
import { maxValue } from "@/core/validators";

describe("Dynamic Input Field", () => {
  it("renders text field", () => {
    const wrapper = mount(DynamicInputField, {
      props: {
        modelValue: ref(""),
        type: InputType.Text,
        name: "test name",
      },
    });

    expect(wrapper.find("input").attributes()).toHaveProperty("type", "text");
    expect(wrapper.find("label").text()).toBe("Test name");
  });

  it("renders number input", () => {
    const wrapper = mount(DynamicInputField, {
      props: {
        modelValue: ref(0),
        type: InputType.Number,
        name: "test name",
      },
    });

    expect(wrapper.find("input").attributes()).toHaveProperty("type", "number");
    expect(wrapper.find("label").text()).toBe("Test name");
  });

  it("renders with link", () => {
    const wrapper = mount(DynamicInputField, {
      props: {
        modelValue: ref(""),
        type: InputType.Text,
        name: "Test name",
        options: {
          link: true,
        },
      },
    });

    expect(wrapper.find("a").attributes()).toHaveProperty(
      "href",
      "#info-Test name" // TODO: We have to work on this
    );
  });

  it("renders with style", () => {
    const style = "p-4 rounded-md border-4";

    const wrapper = mount(DynamicInputField, {
      props: {
        modelValue: ref(""),
        type: InputType.Text,
        name: "test",
        options: {
          style,
        },
      },
    });

    expect(wrapper.find("input").attributes()).toHaveProperty("class", style);
  });

  it.todo("shows validation errors", async () => {
    const wrapper = mount(DynamicInputField, {
      props: {
        modelValue: ref(0),
        type: InputType.Number,
        name: "test",
        validators: [maxValue(20)],
      },
    });
    await wrapper.get("input").setValue(30);

    expect(wrapper.get("p"));
    expect(wrapper.get("p").text()).toBe("error message");
  });
});
