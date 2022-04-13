<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import SelectLanguage from "./SelectLanguage.vue";
import { useI18n } from "vue-i18n";

let showMenu = ref(false);

const { t } = useI18n({});
</script>

<template>
  <nav class="bg-emerald-700 text-gray-100">
    <div class="sm:hidden p-4">
      <div class="grid grid-cols-5">
        <button @click="showMenu = !showMenu" class="col-span-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div class="text-lg col-span-4">Cipherator</div>
      </div>
      <div v-if="showMenu" class="grid auto-rows-max pl-2">
        <RouterLink class="row-auto" to="/">{{ t("home") }}</RouterLink>
        <RouterLink class="row-auto" to="/about">{{ t("ciphers") }}</RouterLink>
      </div>
    </div>
    <div class="hidden p-4 sm:grid grid-cols-5">
      <div class="col-span-4">
        <div class="inline text-lg p-1 px-4">Cipherator</div>
        <RouterLink class="p-1 px-4" to="/">{{ t("home") }}</RouterLink>
        <RouterLink class="p-1 px-4" to="/about">{{ t("ciphers") }}</RouterLink>
      </div>
      <div>
        <SelectLanguage />
      </div>
    </div>
  </nav>
</template>
