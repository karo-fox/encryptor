<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n({});

const ciphers = [{ name: "ceasar" }, { name: "switch" }];
</script>

<template>
  <p class="text-2xl">{{ t("ciphersView.availableCiphers") }}:</p>
  <ul class="p-4 list-disc">
    <li v-for="cipher in ciphers" :key="`${cipher.name}-key`" class="py-2">
      <RouterLink
        :to="`/ciphers/${cipher.name}`"
        class="underline text-emerald-700 hover:text-emerald-900"
        >{{ t(`ciphers.${cipher.name}.name`) }}</RouterLink
      >
    </li>
  </ul>
</template>
