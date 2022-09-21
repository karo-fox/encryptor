<script setup lang="ts">
import { useFormStore } from "@/stores/form";
import { useI18n } from "vue-i18n";
import { ref, watchEffect } from "vue";

import { InputType, type DynamicFieldOptionsSet } from "@/core/models";
import { required, maxValue, notNegative } from "@/core/validators";

import DynamicInputField from "../DynamicInputField.vue";
import DynamicSelectField from "../DynamicSelectField.vue";

const form = useFormStore();
const { t } = useI18n();

const shift = ref(1);
const alphabet = ref("en");

watchEffect(() => {
  form.$patch({
    params: { shift: shift.value, alphabet: alphabet.value },
  });
});

const options: DynamicFieldOptionsSet = {
  shift: {
    style: "py-4 w-16 ml-8 rounded-md bg-slate-300 text-slate-900 p-2",
    link: "shift-info",
  },
  alphabet: {
    style: "p-4 w-32 ml-8 bg-slate-300 rounded-md text-slate-900",
    link: "alphabet-info",
  },
};

const alphabetSelectValues = ["en", "pl"];
const alphabetTranslation = {
  en: {
    en: "English",
    pl: "Polish",
  },
  pl: {
    pl: "polski",
    en: "angielski",
  },
};
</script>

<template>
  <DynamicInputField
    v-model="shift"
    :name="t('shift')"
    :type="InputType.Number"
    :options="options.shift"
    :validators="[required, maxValue(26), notNegative]"
  />
  <DynamicSelectField
    v-model="alphabet"
    :name="t('alphabet')"
    :select-values="alphabetSelectValues"
    :options="options.alphabet"
    :translation="alphabetTranslation"
  />
</template>

<i18n>
  {
    "pl": {
      "shift": "przesunięcie",
      "alphabet": "alfabet",
    },
    "en": {
      "shift": "shift",
      "alphabet": "alphabet",
    },
  }
</i18n>
