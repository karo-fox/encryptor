<script setup lang="ts">
import DarkModeToggle from "./DarkModeToggle.vue";
import IconGithub from "../icons/IconGithub.vue";
import LanguageSelect from "./LanguageSelect.vue";
</script>

<template>
  <span class="mr-2 text-2xl">Cipherator</span>
  <div class="ml-auto">
    <LanguageSelect />
  </div>
  <div class="ml-1 sm:ml-8">
    <DarkModeToggle />
  </div>
  <div class="ml-1 sm:ml-8">
    <a href="https://github.com/karo-fox/encryptor">
      <button>
        <IconGithub class="h-4" />
      </button>
    </a>
  </div>
</template>
