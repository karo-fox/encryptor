<script setup lang="ts">

defineProps<{
  displayText: string,
}>()
</script>

<template>
  <div class="p-4">
    Your results:
    <div class="py-4">
      <div class="border-solid border-emerald-600 border-2 rounded-md h-60 p-4">{{ displayText }}</div>
    </div>    
  </div>
</template>