<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/ui/Navbar.vue";

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="px-2 mt-3">
      <RouterView />
    </div>
  </main>
</template>
