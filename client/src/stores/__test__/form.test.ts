import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useFormStore } from "../form";

describe("form store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("store in JSON format", () => {
    const formStore = useFormStore();
    const expected = JSON.stringify({
      action: "encrypt",
      text: "",
      cipher: "ceasar",
      params: {},
    });

    expect(formStore.asJson).toBe(expected);
  });
});
