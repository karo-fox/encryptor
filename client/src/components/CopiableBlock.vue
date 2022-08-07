<script setup lang="ts">
import CopyToClipboardButton from "./CopyToClipboardButton.vue";

const props = defineProps(["result"]);

async function copyToClipboard() {
  await navigator.clipboard.writeText(props.result);
}
</script>

<template>
  <div class="bg-slate-700 relative text-slate-200 rounded-md">
    <CopyToClipboardButton
      @copy="copyToClipboard"
      class="absolute top-1 right-1"
    />
    <p class="p-8">
      {{ result }}
    </p>
  </div>
</template>
