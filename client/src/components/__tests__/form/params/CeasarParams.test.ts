import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { i18n } from "@/i18n/i18n";
import { createTestingPinia } from "@pinia/testing";

import { Cipher } from "@/stores/form";
import CeasarParams from "@/components/form/params/CeasarParams.vue";

i18n.global.locale.value = "en";

describe("Ceasar Params Panel", () => {
  it("renders properly", () => {
    const wrapper = mount(CeasarParams, {
      global: {
        plugins: [
          i18n,
          createTestingPinia({
            initialState: { cipher: Cipher.Ceasar },
          }),
        ],
      },
    });

    expect(wrapper.find("input").attributes()).toHaveProperty("type", "number");
    expect(wrapper.text()).toContain("Shift");
    expect(wrapper.find("select")).exist;
    expect(wrapper.text()).toContain("Alphabet");
  });
});
