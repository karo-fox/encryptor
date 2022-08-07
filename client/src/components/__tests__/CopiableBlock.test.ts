import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CopiableBlock from "../CopiableBlock.vue";

describe("Copiable Block", () => {
  it("renders properly", () => {
    const wrapper = mount(CopiableBlock, {
      props: { result: "Your result ..." },
    });
    expect(wrapper.text()).toContain("Your result ...");
  });
});
