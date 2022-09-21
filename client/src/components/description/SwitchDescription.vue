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
      "switch-desc": "Zaszyfrowanie informacji polega na zamianie litery na tę, która stoi z nią w parze, według podanego klucza. Litery, których nie ma w kluczu, są pozostawiane bez zmian",
      "switch-key-desc": "Określa klucz, według którego zamieniane są litery"
    },
    "en": {
      "switch": "Switch",
      "switchKey": "switch key",
      "switch-desc": "Encrypting the information involves replacing the letter with the one that stands with it in pair, according to a given key. Letters that are not in the key are left unchanged",
      "switch-key-desc": "Specifies the key by which letters are swapped"
    }
  }
</i18n>
