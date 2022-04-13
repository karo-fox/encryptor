<script setup lang="ts">
import { useI18n } from "vue-i18n";

let { locale } = useI18n();
const languages = [
  { language: "en", title: "English" },
  { language: "pl", title: "Polski" },
];
</script>
<template>
  <select
    v-model="locale"
    name="cipher"
    class="bg-inherit border-2 rounded-md p-2"
  >
    <option
      v-for="option in languages"
      :value="option.language"
      :key="`${option.language}-key`"
    >
      {{ option.title }}
    </option>
  </select>
</template>
