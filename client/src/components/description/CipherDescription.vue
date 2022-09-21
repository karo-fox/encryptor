<script setup lang="ts">
import { capitalize } from "vue";
import { useI18n } from "vue-i18n";

import type { Cipher } from "@/core/models";

const { t } = useI18n();

defineProps<{
  cipher: Cipher;
  cipherName: string;
  params?: { param: string; name: string }[];
}>();
</script>

<template>
  <div class="py-4 border-b border-slate-300 dark:border-slate-700">
    <h2 :id="`info-${cipher}`" class="text-xl py-4">
      {{ t("title-prompt", { cipher: capitalize(cipherName) }) }}
    </h2>
    <slot name="cipher-desc"></slot>
  </div>
  <div v-if="params">
    <div
      v-for="param in params"
      :key="param.param"
      class="py-4 border-b border-slate-300 dark:border-slate-700"
    >
      <h3 :id="`info-${param.param}`" class="text-lg py-4">
        {{ capitalize(param.name) }}
      </h3>
      <slot :name="`${param.param}-desc`"></slot>
    </div>
  </div>
</template>

<i18n>
  {
    "pl": {
      "title-prompt": "Jak działa {cipher}?"
    },
    "en": {
      "title-prompt": "How does the {cipher} work?"
    }
  }
</i18n>
