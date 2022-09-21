<script setup lang="ts">
import CopyToClipboardButton from "./CopyToClipboardButton.vue";

const props = defineProps<{ result: string }>();

async function copyToClipboard() {
  await navigator.clipboard.writeText(props.result);
}
</script>

<template>
  <div class="relative rounded-md">
    <CopyToClipboardButton
      @copy="copyToClipboard"
      class="absolute top-1 right-1"
      id="copiable-block"
    />
    <p class="p-8">
      {{ result }}
    </p>
  </div>
</template>
