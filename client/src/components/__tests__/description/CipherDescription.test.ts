import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { i18n } from "@/i18n/i18n";

import CipherDescription from "@/components/description/CipherDescription.vue";
import TestSlot from "./TestSlot.vue";
import { Cipher } from "@/core/models";

i18n.global.locale.value = "en";

describe.todo("Cipher Description renders properly", () => {
  it("renders properly without params slots", () => {
    const wrapper = mount(CipherDescription, {
      global: {
        plugins: [i18n],
      },
      slots: {
        cipherDesc: TestSlot, // it doesn't work like that
      },
      props: {
        cipher: Cipher.Ceasar,
        cipherName: "ceasar",
      },
    });

    expect(wrapper.find("h2").text()).toBe("How does the Ceasar work?");
    // expect(wrapper.findAll(".test-slot")).toHaveLength(1);
    expect(wrapper.text()).toEqual("");
  });
});
