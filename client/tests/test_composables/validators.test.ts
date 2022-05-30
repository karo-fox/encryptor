import { describe, expect, test } from "vitest";

import { validateNotEmpty } from "@/composables/validators";

describe("validating input not empty", () => {
  test("should pass validation with string", () => {
    expect(validateNotEmpty("test")).toBe("");
  });

  test("should pass valiudation with number", () => {
    expect(validateNotEmpty(42)).toBe("");
  }); //TODO: I don't think it should accept numbers as input

  test("should not pass validation with string", () => {
    expect(validateNotEmpty("")).toBe("cannot be empty");
  });
});

//TODO: I think you should write the rest as you work on validation
