<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { useFormStore } from "@/stores/form";
import { Cipher } from "@/core/models";

const formStore = useFormStore();
const { t } = useI18n();
</script>

<template>
  <select
    v-model="formStore.cipher"
    name="cipher"
    class="text-lg p-4 bg-slate-300 rounded-md dark:text-slate-900 px-4 lg:px-16"
    id="cipher-select"
  >
    <option v-for="option in Cipher" :value="option" :key="`id-${option}`">
      {{ t(option) }}
    </option>
  </select>
</template>

<i18n>
  {
    "en": {
      "ceasar": "Ceasar cipher",
      "switch": "ga-de-ry-po-lu-ki",
      "morse": "Morse Code",
    },
    "pl": {
      "ceasar": "Szyfr Cezara",
      "switch": "ga-de-ry-po-lu-ki",
      "morse": "Alfabet Morse'a",
    }
  }
</i18n>
