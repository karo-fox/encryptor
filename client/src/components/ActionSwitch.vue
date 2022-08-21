<script setup lang="ts">
import { ref, watch } from "vue";

const action = ref("encrypt");
const chosen =
  "bg-slate-900 text-slate-50 dark:bg-slate-300 dark:text-slate-900";
const disabled =
  "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50";
const encryptClass = ref(chosen);
const decryptClass = ref(disabled);

watch(action, async (newAction, oldAction) => {
  if (newAction != oldAction) {
    if (newAction === "encrypt") {
      encryptClass.value = chosen;
      decryptClass.value = disabled;
      // change state to action: encrypt
    } else if (newAction === "decrypt") {
      encryptClass.value = disabled;
      decryptClass.value = chosen;
      // change state to action: decrpyt
    }
  }
});
</script>

<template>
  <button
    name="action"
    type="button"
    :class="`py-4 px-4 sm:px-16 text-lg lg:px-32 rounded-md ${encryptClass}`"
    @click="action = 'encrypt'"
  >
    Encrpyt
  </button>
  <button
    name="action"
    type="button"
    :class="`ml-4 sm:ml-16 lg:ml-32 py-4 px-4 sm:px-16 text-lg lg:px-32 rounded-md ${decryptClass}`"
    @click="action = 'decrypt'"
  >
    Decrypt
  </button>
</template>
