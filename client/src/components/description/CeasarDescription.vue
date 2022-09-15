<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Cipher } from "@/core/models";
import CipherDescription from "./CipherDescription.vue";

const { t } = useI18n();
</script>

<template>
  <CipherDescription
    :cipher="Cipher.Ceasar"
    :cipher-name="t('ceasar')"
    :params="[
      { param: 'shift', name: t('shift') },
      { param: 'alphabet', name: t('alphabet') },
    ]"
  >
    <template #cipher-desc>
      <p>{{ t("ceasar-desc") }}</p>
    </template>
    <template #shift-desc>
      <p>{{ t("shift-desc") }}</p>
    </template>
    <template #alphabet-desc>
      <p>{{ t("alphabet-desc") }}</p>
    </template>
  </CipherDescription>
</template>

<i18n>
  {
    "pl": {
      "ceasar": "Szyfr Cezara",
      "shift": "przesunięcie",
      "alphabet": "alfabet",
    },
    "en": {
      "ceasar": "Ceasar Cipher",
      "shift": "shift",
      "alphabet": "alphabet"
    }
  }
</i18n>
