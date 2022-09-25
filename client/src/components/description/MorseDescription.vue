<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Cipher } from "@/core/models";
import CipherDescription from "./CipherDescription.vue";

const { t } = useI18n();
</script>

<template>
  <CipherDescription :cipher="Cipher.Morse" :cipher-name="t('morse')">
    <template #cipher-desc>
      <p>{{ t("morse-desc") }}</p>
    </template>
  </CipherDescription>
</template>

<i18n>
{
  "pl": {
    "morse": "Alfabet Morse'a",
    "morse-desc": "Alfabet Morse'a jest zakodowaną formą alfabetu. Każda litera alfabetu ma przyporządkowany układ kropek i poziomych kresek. Znak '/' oznacza koniec litery, a znak '//' - koniec zdania",
  },
  "en": {
    "morse": "Morse Code",
    "morse-desc": "The Morse Code is a coded form of the alphabet. Each letter of the alphabet has an associated arrangement of dots and horizontal dashes. The '/' mark indicates the end of a letter and the '//' mark indicates the end of a sentence",
  }
}
</i18n>
