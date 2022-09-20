<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Cipher } from "@/core/models";
import CipherDescription from "./CipherDescription.vue";

const { t } = useI18n();
</script>

<template>
  <CipherDescription
    :cipher="Cipher.Switch"
    :cipher-name="t('switch')"
    :params="[{ param: 'switch-key', name: t('switchKey') }]"
  >
    <template #cipher-desc>
      <p>{{ t("switch-desc") }}</p>
    </template>
    <template #switch-key-desc>
      <p>{{ t("switch-key-desc") }}</p>
    </template>
  </CipherDescription>
</template>

<i18n>
  {
    "pl": {
      "switch": "Zamiana",
      "switchKey": "Klucz zamiany",
    },
    "en": {
      "switch": "Switch",
      "switchKey": "switch key",
    }
  }
</i18n>
