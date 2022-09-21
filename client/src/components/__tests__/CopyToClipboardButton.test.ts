import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import CopyToClipboardButton from "../CopyToClipboardButton.vue";

describe("Copy to clipboard button", () => {
  it("emits 'copy' event", () => {
    const wrapper = mount(CopyToClipboardButton);
    wrapper.findComponent({ name: "IconCopy" }).trigger("click");
    expect(wrapper.emitted()).toHaveProperty("copy");
  });
});
