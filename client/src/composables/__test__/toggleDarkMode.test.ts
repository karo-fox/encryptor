import { describe, expect, it } from "vitest";
import { checkDarkMode, useToggleDarkMode } from "../toggleDarkMode";

describe("toggle dark mode", () => {
  it("toggles dark mode with localStorage", () => {
    localStorage.theme = "dark";
    useToggleDarkMode();
    expect(checkDarkMode()).toBeTruthy();
  });

  it("toggles light mode with localStorage", () => {
    localStorage.theme = "light";
    useToggleDarkMode();
    expect(checkDarkMode()).toBeFalsy();
  });
});
