import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { i18n } from "@/i18n/i18n";

import { Cipher } from "@/core/models";
import CipherDescription from "@/components/description/CipherDescription.vue";

i18n.global.locale.value = "en";

describe("Cipher Description renders properly", () => {
  it("renders properly without params slots", () => {
    const wrapper = mount(CipherDescription, {
      global: {
        plugins: [i18n],
      },
      slots: {
        cipherDesc: "testSlot",
      },
      props: {
        cipher: Cipher.Ceasar,
        cipherName: "ceasar",
      },
    });

    expect(wrapper.find("h2").text()).toBe("How does the Ceasar work?");
    expect(wrapper.find("#cipher-desc").text()).toContain("testSlot");
  });

  it("renders properly with params slots", () => {
    const wrapper = mount(CipherDescription, {
      global: {
        plugins: [i18n],
      },
      slots: {
        cipherDesc: "testSlot",
        shiftDesc: "test shift desc slot",
        alphabetDesc: "test alphabet desc slot",
      },
      props: {
        cipher: Cipher.Ceasar,
        cipherName: "ceasar",
        params: [
          { param: "shift", name: "shift" },
          { param: "alphabet", name: "alphabet" },
        ]
      }
    });

    expect(wrapper.findAll("#params-desc")).toHaveLength(2);
    expect(wrapper.findAll("#params-desc")[0].text()).toContain("test shift desc slot");
    expect(wrapper.findAll("#params-desc")[1].text()).toContain("test alphabet desc slot");
  });
});
