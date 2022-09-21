<script setup lang="ts">
import { i18n } from "@/i18n/i18n";
import { watchEffect } from "vue";

if (localStorage.lang) i18n.global.locale.value = localStorage.lang;

watchEffect(async () => {
  localStorage.lang = i18n.global.locale.value;
});
</script>

<template>
  <select
    class="p-2 w-24 ml-8 bg-slate-300 text-slate-900 border-b-2 border-slate-500"
    id="lang-select"
    v-model="i18n.global.locale.value"
  >
    <option value="pl">Polski</option>
    <option value="en">English</option>
  </select>
</template>
