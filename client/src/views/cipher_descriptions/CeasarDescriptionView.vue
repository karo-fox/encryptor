<script setup lang="ts">
import { capitalize } from "vue";
import { useI18n } from "vue-i18n";
import CipherDescription from "@/components/CipherDescription.vue";
import { useMarkText } from "@/composables/markText";

const { t } = useI18n({});
const parameters = ["shift", "alphabet"];
</script>

<template>
  <CipherDescription cipher-name="ceasar">
    <div v-html="useMarkText(t('ciphers.ceasar.description'))"></div>
    <template #params>
      <div v-for="param in parameters" :key="param">
        <p>
          <span class="inline text-emerald-700 text-lg">{{
            capitalize(t(`ciphers.ceasar.params.${param}.name`))
          }}</span
          >:
          {{ t(`ciphers.ceasar.params.${param}.description`) }}
        </p>
      </div>
    </template>
  </CipherDescription>
</template>
