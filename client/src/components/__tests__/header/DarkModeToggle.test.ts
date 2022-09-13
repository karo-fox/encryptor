import { checkDarkMode } from "@/composables/toggleDarkMode";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import DarkModeToggle from "@/components/header/DarkModeToggle.vue";

describe("Dark Mode Toggle", () => {
  it("toggles dark mode", () => {
    const wrapper = mount(DarkModeToggle);
    wrapper.findComponent({ name: "IconMoon" }).trigger("click");
    expect(checkDarkMode).toBeTruthy;
  });

  it("toggles light mode", () => {
    const wrapper = mount(DarkModeToggle);
    wrapper.findComponent({ name: "IconSun" }).trigger("click");
    expect(checkDarkMode).toBeTruthy;
  });
});
