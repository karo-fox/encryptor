<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineProps<{
  cipherName: string;
}>();

const { t } = useI18n({});
</script>

<template>
  <p class="text-2xl">{{ t(`ciphers.${cipherName}.name`) }}</p>
  <div class="py-4 pb-16">
    <slot></slot>
  </div>
  <p class="text-2xl">{{ t("ciphersView.parameters") }}</p>
  <div class="py-4">
    <slot name="paramsDescription"></slot>
  </div>
</template>
