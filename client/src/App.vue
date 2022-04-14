<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/ui/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="px-8 mt-8 sm:mb-16 lg:mt-16">
      <div class="lg:grid grid-cols-5">
        <div class="lg:col-start-2 lg:col-span-3">
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>
