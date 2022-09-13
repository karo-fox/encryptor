import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import DynamicSelectField from "@/components/form/DynamicSelectField.vue";
import { ref } from "vue";
import { i18n } from "@/i18n/i18n";

i18n.global.locale.value = "en";

describe("Dynamic Select Field", () => {
  it("renders properly", () => {
    const wrapper = mount(DynamicSelectField, {
      props: {
        modelValue: ref(""),
        name: "test",
        selectValues: ["a", "b", "c"],
      },
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.find("select")).exist;
    expect(wrapper.find("select").text()).toBe("abc");
    expect(wrapper.find("label")).exist;
    expect(wrapper.find("label").text()).toBe("Test");
  });

  it("renders with link", () => {
    const wrapper = mount(DynamicSelectField, {
      global: {
        plugins: [i18n],
      },
      props: {
        modelValue: ref(""),
        selectValues: ["a", "b", "c"],
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

    const wrapper = mount(DynamicSelectField, {
      global: {
        plugins: [i18n],
      },
      props: {
        modelValue: ref(""),
        selectValues: ["a", "b", "c"],
        name: "test",
        options: {
          style,
        },
      },
    });

    expect(wrapper.find("select").attributes()).toHaveProperty("class", style);
  });

  it("translates values", async () => {
    const wrapper = mount(DynamicSelectField, {
      global: {
        plugins: [i18n],
      },
      props: {
        modelValue: ref(""),
        name: "test",
        selectValues: ["cat", "dog"],
        translation: {
          en: { cat: "cat", dog: "dog" },
          pl: { cat: "kot", dog: "pies" },
        },
      },
    });

    expect(wrapper.find("select").text()).toBe("catdog");

    i18n.global.locale.value = "pl";
    await i18n.global.locale.value;

    expect(wrapper.find("select").text()).toBe("kotpies");
  });
});
