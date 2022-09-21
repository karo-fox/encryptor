import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { createTestingPinia } from "@pinia/testing";
import { i18n } from "@/i18n/i18n";

import { useFormStore } from "@/stores/form";
import { Cipher } from "@/core/models";

import DescriptionPanel from "@/components/description/DescriptionPanel.vue";

describe("Description Panel Component", () => {
  it("renders Ceasar description", async () => {
    const wrapper = mount(DescriptionPanel, {
      global: { plugins: [createTestingPinia(), i18n] },
    });
    const formStore = useFormStore();
    await formStore.$patch({ cipher: Cipher.Ceasar });

    expect(wrapper.find("#ceasar-desc")).exist;
    expect(wrapper.find("#shift-desc")).exist;
    expect(wrapper.find("#alphabet-desc")).exist;
  });

  it("renders Switch description", async () => {
    const wrapper = mount(DescriptionPanel, {
      global: { plugins: [createTestingPinia(), i18n] },
    });
    const formStore = useFormStore();
    await formStore.$patch({ cipher: Cipher.Switch });

    expect(wrapper.find("#switch-desc")).exist;
    expect(wrapper.find("#switch-key-desc")).exist;
  });
});
