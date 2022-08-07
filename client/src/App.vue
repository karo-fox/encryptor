<script setup lang="ts">
import CopiableBlock from "./components/CopiableBlock.vue";
import AppHeader from "./components/AppHeader.vue";
import { useToggleDarkMode } from "./composables/toggleDarkMode";

useToggleDarkMode();
</script>

<template>
  <header class="sticky top-0 flex-none">
    <AppHeader />
  </header>
  <body class="bg-slate-300 dark:bg-slate-800 h-80">
    <CopiableBlock result="karolololpo" />
  </body>
</template>
