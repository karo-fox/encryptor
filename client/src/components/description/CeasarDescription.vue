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
      "ceasar-desc": "Zaszyfrowanie informacji polega na zamianie litery na inną, oddaloną o stałą liczbę pozycji w alfabecie",
      "shift-desc": "Przesunięcie określa liczbę pozycji, o jaką oddalona jest podstawiana litera. Na przykład: litera 'a' po przesunięciu o 2 pozycje zmnieni się na 'c' (przy wyborze alfabetu angielskiego)",
      "alphabet-desc": "Określa alfabet, który będzie podstawą do zamiany liter. Na przykład, przy przesunięciu równym 1 i wyborze alfabetu angielskiego, litera 'a' zamieni się na 'b'. W przypadku alfabetu polskiego, litera 'a' zamieni się na 'ą'",
    },
    "en": {
      "ceasar": "Ceasar Cipher",
      "shift": "shift",
      "alphabet": "alphabet",
      "ceasar-desc": "Encryption of information involves the replacement of a letter by another, a fixed number of positions away in the alphabet",
      "shift-desc": "The shift specifies the number of positions by which the letter being substituted is offset. For example: the letter 'a' will change to 'c' after a shift of 2 positions (when the English alphabet is selected).",
      "alphabet-desc": "Specifies the alphabet that will be the basis for the letter swap. For example, with a shift equal to 1 and selecting the English alphabet, the letter 'a' will swap to 'b'. In the case of the Polish alphabet, the letter 'a' will change to 'ą'."
    }
  }
</i18n>
