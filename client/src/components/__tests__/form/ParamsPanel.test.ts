import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { i18n } from "@/i18n/i18n";

import { useFormStore } from "@/stores/form";
import { Cipher } from "@/core/models";

import ParamsPanel from "@/components/form/ParamsPanel.vue";

i18n.global.locale.value = "en";

describe("Params Panel", () => {
  it("renders Ceasar params", async () => {
    const wrapper = mount(ParamsPanel, {
      global: {
        plugins: [createTestingPinia(), i18n],
      },
    });

    const formStore = useFormStore();
    await formStore.$patch({ cipher: Cipher.Ceasar });

    expect(wrapper.text()).toContain("Shift");
    expect(wrapper.text()).toContain("Alphabet");
  });

  it("renders Switch params", async () => {
    const wrapper = mount(ParamsPanel, {
      global: {
        plugins: [createTestingPinia(), i18n],
      },
    });

    const formStore = useFormStore();
    await formStore.$patch({ cipher: Cipher.Switch });

    expect(wrapper.text()).toContain("Switch key");
  });
});
