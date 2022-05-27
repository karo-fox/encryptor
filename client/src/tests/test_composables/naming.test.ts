import { test, expect } from "vitest";

import { useToNameTag } from "@/composables/naming";

const camelCaseName = "testName";
const snakeCaseName = "test-name";

test("should change snakeCase", () => {
  expect(useToNameTag(snakeCaseName)).toBe(camelCaseName);
});

test("should not change camelCase", () => {
  expect(useToNameTag(camelCaseName)).toBe(camelCaseName);
});
