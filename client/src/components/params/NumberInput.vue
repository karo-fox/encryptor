<script setup lang="ts">
defineProps({
  label: String,
})
</script>

<template>
  <label for="{{label}}-input">{{label}}</label>
  <input type="number" id="{{label}}-input">
</template>
