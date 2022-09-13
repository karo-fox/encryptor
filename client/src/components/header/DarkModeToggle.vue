<script setup lang="ts">
import { ref, watchEffect } from "vue";

import { checkDarkMode, useToggleDarkMode } from "@/composables/toggleDarkMode";
import IconSun from "../icons/IconSun.vue";
import IconMoon from "../icons/IconMoon.vue";

const isDarkMode = ref(checkDarkMode());
const chosen = "text-slate-900";
const disabled = "text-slate-400";
const light = ref(chosen);
const dark = ref(disabled);

watchEffect(async () => {
  if (isDarkMode.value) {
    localStorage.theme = "dark";
    light.value = disabled;
    dark.value = chosen;
    useToggleDarkMode();
  } else {
    localStorage.theme = "light";
    light.value = chosen;
    dark.value = disabled;
    useToggleDarkMode();
  }
});
</script>

<template>
  <button class="inline" id="light-toggle" @click="isDarkMode = false">
    <IconSun :class="light" />
  </button>
  <button class="inline ml-2" id="dark-toggle" @click="isDarkMode = true">
    <IconMoon :class="dark" />
  </button>
</template>
