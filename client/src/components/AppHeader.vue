<script setup lang="ts">
import DarkModeToggle from "./DarkModeToggle.vue";
import IconGithub from "./icons/IconGithub.vue";
</script>

<template>
  <span class="mr-2 text-2xl">Cipherator</span>
  <div class="ml-auto">
    <DarkModeToggle />
  </div>
  <div class="ml-8">
    <a href="#">
      <button>
        <IconGithub class="h-4" />
      </button>
    </a>
  </div>
</template>
