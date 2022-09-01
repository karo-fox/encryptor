<script setup lang="ts">
import { useFormStore } from "@/stores/form";
import { ref, watch } from "vue";

const formStore = useFormStore();
const message = ref(formStore.message);

watch(message, (newMessage, oldMessage) => {
  if (newMessage != oldMessage) {
    formStore.message = message.value;
  }
});
</script>

<template>
  <textarea
    v-model="message"
    spellcheck="false"
    placeholder="..."
    name="message"
    id="message"
    class="w-full min-h-[16rem] p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 border-solid border-2 rounded-md border-cyan-500"
  >
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum aliquam temporibus corrupti eos provident dignissimos consequuntur repellat, necessitatibus facere error natus cum molestiae molestias ad odio totam quae vitae.
  </textarea>
</template>
