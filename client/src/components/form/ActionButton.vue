<script setup lang="ts">
import { useFormStore } from "@/stores/form";
import { useI18n } from "vue-i18n";
import { capitalize } from "vue";

const formStore = useFormStore();
const { t } = useI18n();
</script>

<template>
  <button
    class="rounded-md bg-cyan-500 text-slate-50 dark:bg-cyan-500 dark:text-slate-900 py-4 px-8 lg:px-16"
    @click="formStore.sendForm()"
  >
    {{ capitalize(t(formStore.action)) }}
  </button>
</template>

<i18n>
  {
    "pl": {
      "encrypt": "zaszyfruj",
      "decrypt": "rozszyfruj",
    },
    "en": {
      "encrypt": "encrypt",
      "decrypt": "decrypt",
    }
  }
</i18n>
