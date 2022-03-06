<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
let showMenu = ref(false);
</script>

<template>
  <nav class="bg-emerald-700 text-gray-100">
    <div class="sm:hidden">
      <div class="grid grid-cols-5">
        <button @click="showMenu = !showMenu" class="col-span-1">menu</button>
        <div class="text-lg col-span-4">Encryptor</div>
      </div>
      <div v-if="showMenu" class="grid auto-rows-max pl-2">
        <RouterLink class="row-auto" to="/">Home</RouterLink>
        <RouterLink class="row-auto" to="/about">About</RouterLink>
      </div>
    </div>
  </nav>
</template>