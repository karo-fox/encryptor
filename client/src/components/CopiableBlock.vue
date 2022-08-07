<script setup lang="ts">
import { useResultStore } from "@/stores/result";
import { storeToRefs } from "pinia";
import CopyToClipboardButton from "./CopyToClipboardButton.vue";

const resultStore = useResultStore();
const { result } = storeToRefs(resultStore);

async function copyToClipboard() {
  await navigator.clipboard.writeText(result.value);
}
</script>

<template>
  <div class="bg-gray-700 relative text-gray-200 rounded-md">
    <CopyToClipboardButton
      @copy="copyToClipboard"
      class="absolute top-1 right-1"
    />
    <p class="p-8">
      {{ result }}
    </p>
  </div>
</template>
