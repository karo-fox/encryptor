import { i18n } from "@/plugins/i18n";
import { config } from "@vue/test-utils";

i18n.global.locale.value = "en";

export const t = (msg: string) => msg;

config.global.mocks = {
  $t: (text: string) => text,
};
