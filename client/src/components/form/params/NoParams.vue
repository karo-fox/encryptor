<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <p class="mt-4">{{ t("no-params-prompt") }}</p>
</template>

<i18n>
  {
    "pl": {
      "no-params-prompt": "Ten szyfr nie wymaga żadnych dodatkowych ustawień",
    },
    "en": {
      "no-params-prompt": "This cipher does'n require any additional settings",
    }
  }
</i18n>
