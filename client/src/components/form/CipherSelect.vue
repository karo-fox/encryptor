<script setup lang="ts">
import { Cipher, useFormStore } from "@/stores/form";
import { capitalize, ref, watch } from "vue";

const formStore = useFormStore();
const cipher = ref(formStore.cipher);

watch(cipher, (newCipher, oldCipher) => {
  if (newCipher != oldCipher) {
    formStore.cipher = newCipher;
  }
});
</script>

<template>
  <select
    v-model="cipher"
    name="cipher"
    class="text-lg p-4 bg-slate-300 rounded-md dark:text-slate-900 px-4 lg:px-16"
  >
    <option v-for="option in Cipher" :value="option" :key="`id-${option}`">
      {{ capitalize(option) }}
    </option>
  </select>
</template>
