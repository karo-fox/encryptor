<script setup lang="ts">
import { useFormStore } from "@/stores/form";

const formStore = useFormStore();
</script>

<template>
  <textarea
    v-model="formStore.message"
    spellcheck="false"
    placeholder="..."
    name="message"
    id="msg-input"
    class="w-full min-h-[16rem] p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 border-solid border-2 rounded-md border-cyan-500"
  />
</template>
