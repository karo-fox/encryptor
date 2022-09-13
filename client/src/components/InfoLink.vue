<script setup lang="ts">
import IconQuestion from "./icons/IconQuestion.vue";

defineProps<{
  linkTo: string;
}>();
</script>

<template>
  <a :href="`#${linkTo}`" class="ml-4" :id="`link-to-${linkTo}`">
    <IconQuestion />
  </a>
</template>
