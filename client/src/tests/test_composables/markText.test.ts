import { expect, test } from "vitest";

import { useMarkText } from "@/composables/markText";

const textWithNoWordsToMark = "hello world";
const textWithOneWordToMark = "hello `world`";
const textWithTwoWordsToMark = "`hello` `world`";

test("should mark nothing", () => {
  expect(useMarkText(textWithNoWordsToMark)).toBe(textWithNoWordsToMark);
});

test("should mark one word", () => {
  const marked = 'hello <p class="text-emerald-700 inline">world</p>';
  expect(useMarkText(textWithOneWordToMark)).toBe(marked);
});

test("should mark two words", () => {
  const marked =
    '<p class="text-emerald-700 inline">hello</p> <p class="text-emerald-700 inline">world</p>';
  expect(useMarkText(textWithTwoWordsToMark)).toBe(marked);
});
