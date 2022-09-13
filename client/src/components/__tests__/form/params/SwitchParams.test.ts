import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { i18n } from "@/i18n/i18n";
import { createTestingPinia } from "@pinia/testing";

import { Cipher } from "@/stores/form";
import SwitchParams from "@/components/form/params/SwitchParams.vue";

i18n.global.locale.value = "en";

describe("Switch Params Panel", () => {
  it("renders properly", () => {
    const wrapper = mount(SwitchParams, {
      global: {
        plugins: [
          i18n,
          createTestingPinia({
            initialState: {
              cipher: Cipher.Switch,
            },
          }),
        ],
      },
    });

    expect(wrapper.find("select")).exist;
    expect(wrapper.text()).toContain("Switch key");
  });
});
