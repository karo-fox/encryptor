<script setup lang="ts">

defineProps<{
  displayText: string,
}>()
</script>

<template>
  Your results:
  {{displayText}}
</template>