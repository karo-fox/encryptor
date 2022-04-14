<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({});
defineProps<{
  displayText: string;
}>();
</script>

<template>
  <div class="p-4">
    <p class="text-xl">{{ t("homeView.yourResults") }}:</p>
    <div class="py-4">
      <div class="border-solid border-emerald-600 border-2 rounded-md h-60 p-4">
        {{ displayText }}
      </div>
    </div>
  </div>
</template>
