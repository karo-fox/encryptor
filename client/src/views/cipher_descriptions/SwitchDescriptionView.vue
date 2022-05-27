<script setup lang="ts">
import { capitalize } from "vue";
import { useI18n } from "vue-i18n";
import CipherDescription from "@/components/CipherDescription.vue";
import { useMarkText } from "@/composables/markText";

const { t } = useI18n({});
const parameters = ["switchKey"];
</script>

<template>
  <CipherDescription cipher-name="switch">
    <div v-html="useMarkText(t('ciphers.switch.description'))"></div>
    <template #params-description>
      <div v-for="param in parameters" :key="param">
        <p>
          <span class="inline text-emerald-700 text-lg">{{
            capitalize(t(`ciphers.switch.params.${param}.name`))
          }}</span
          >:
          {{ t(`ciphers.switch.params.${param}.description`) }}
        </p>
      </div>
    </template>
  </CipherDescription>
</template>
