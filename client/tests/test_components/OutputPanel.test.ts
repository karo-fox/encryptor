import { render } from "@testing-library/vue";
import { test } from "vitest";

import OutputPanel from "@/components/OutputPanel.vue";
import { i18n } from "@/plugins/i18n";

const { getByText } = render(OutputPanel, {
  global: { plugins: [i18n] },
  props: { displayText: "test display text" },
});

test("shows display text from props", () => {
  getByText("test display text");
});
