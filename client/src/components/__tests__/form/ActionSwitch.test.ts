import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { createTestingPinia } from "@pinia/testing";
import { i18n } from "@/i18n/i18n";

import { useFormStore } from "@/stores/form";
import { Action } from "@/core/models";

import ActionSwitch from "@/components/form/ActionSwitch.vue";

i18n.global.locale.value = "en";

describe("Action Switch", () => {
  it("renders properly", () => {
    const wrapper = mount(ActionSwitch, {
      global: {
        plugins: [createTestingPinia(), i18n],
      },
    });

    expect(wrapper.findAll("button")[0].text()).toBe("Encrypt");
    expect(wrapper.findAll("button")[1].text()).toBe("Decrypt");
  });

  it("switches button classes", async () => {
    const chosenClass =
      "bg-cyan-500 text-slate-50 dark:bg-cyan-500 dark:text-slate-900";
    const disabledClass =
      "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50";

    const wrapper = mount(ActionSwitch, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              action: Action.Encrypt,
            },
          }),
          i18n,
        ],
      },
    });

    const formStore = useFormStore();

    expect(wrapper.find("#encrypt-action").classes()).toEqual(
      expect.arrayContaining(chosenClass.split(" "))
    );
    expect(wrapper.find("#decrypt-action").classes()).toEqual(
      expect.arrayContaining(disabledClass.split(" "))
    );

    // await formStore.$patch({ action: Action.Decrypt });
    formStore.action = Action.Decrypt;
    
    expect(formStore.action).toBe(Action.Decrypt);
    expect(wrapper.find("#encrypt-action").classes()).toEqual(
      expect.arrayContaining(disabledClass.split(" "))
    );
    expect(wrapper.find("#decrypt-action").classes()).toEqual(
      expect.arrayContaining(chosenClass.split(" "))
    );
  });
});
