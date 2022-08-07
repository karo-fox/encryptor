import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import CopiableBlock from "../CopiableBlock.vue";
import { createPinia, setActivePinia } from "pinia";

describe("Copiable Block", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  }),
    it("renders properly", () => {
      const wrapper = mount(CopiableBlock);
      expect(wrapper.text()).toContain("Your result ...");
    });
});
