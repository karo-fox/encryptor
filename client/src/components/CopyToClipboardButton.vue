<script setup lang="ts">
import IconCopy from "./icons/IconCopy.vue";
</script>

<template>
  <button
    @click="$emit('copy')"
    type="button"
    class="bg-slate-200 p-2 hover:bg-gray-400 rounded-md text-slate-900"
  >
    <IconCopy class="" />
  </button>
</template>
