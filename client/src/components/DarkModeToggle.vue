<script setup lang="ts">
import { ref, watch } from "vue";
import IconSun from "./icons/IconSun.vue";
import IconMoon from "./icons/IconMoon.vue";
import { useToggleDarkMode } from "@/composables/toggleDarkMode";

const isDarkMode = ref(true);
const chosen = "text-slate-300";
const disabled = "text-slate-700";
const light = ref(chosen);
const dark = ref(disabled);

watch(isDarkMode, async () => {
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
  <button class="inline m-2" @click="isDarkMode = false">
    <IconSun :class="light" />
  </button>
  <button class="inline m-2" @click="isDarkMode = true">
    <IconMoon :class="dark" />
  </button>
</template>
