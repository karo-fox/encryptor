<script setup lang="ts">
import { Cipher, useFormStore } from "@/stores/form";
import { useI18n } from "vue-i18n";

const formStore = useFormStore();
const { t } = useI18n();
</script>

<template>
  <select
    v-model="formStore.cipher"
    name="cipher"
    class="text-lg p-4 bg-slate-300 rounded-md dark:text-slate-900 px-4 lg:px-16"
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
    },
    "pl": {
      "ceasar": "Szyfr Cezara",
      "switch": "ga-de-ry-po-lu-ki",
    }
  }
</i18n>
