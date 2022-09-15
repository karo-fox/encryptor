<script setup lang="ts">
import { useFormStore } from "@/stores/form";
import { useI18n } from "vue-i18n";
import { ref, watchEffect } from "vue";

import type { DynamicFieldOptionsSet } from "@/core/models";

import DynamicSelectField from "../DynamicSelectField.vue";

const form = useFormStore();
const { t } = useI18n();

const switchKey = ref("ga-de-ry-po-lu-ki");

watchEffect(() => {
  form.$patch({
    params: { switchKey: switchKey.value },
  });
});

const switchKeySelectOptions = ["ga-de-ry-po-lu-ki", "po-li-ty-ka-re-nu"];

const options: DynamicFieldOptionsSet = {
  switchKey: {
    style: "py-4 ml-8 rounded-md bg-slate-300 text-slate-900 p-2",
    link: "switch-key-info",
  },
};
</script>

<template>
  <DynamicSelectField
    v-model="switchKey"
    :name="t('switch-key')"
    :select-values="switchKeySelectOptions"
    :options="options.switchKey"
  />
</template>

<i18n>
  {
    "pl": {
      "switch-key": "klucz zamiany",
    },
    "en": {
      "switch-key": "switch key",
    }
  }
</i18n>
