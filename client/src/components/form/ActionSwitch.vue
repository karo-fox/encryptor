<script setup lang="ts">
import { Action, useFormStore } from "@/stores/form";
import { ref, watch } from "vue";

const formStore = useFormStore();

const action = ref(formStore.action);
const chosen = "bg-cyan-500 text-slate-50 dark:bg-cyan-500 dark:text-slate-900";
const disabled =
  "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50";
const encryptClass = ref(action.value == Action.Encrypt ? chosen : disabled);
const decryptClass = ref(action.value == Action.Decrypt ? chosen : disabled);

watch(action, (newAction, oldAction) => {
  if (newAction != oldAction) {
    formStore.action = newAction;
    if (newAction === Action.Encrypt) {
      encryptClass.value = chosen;
      decryptClass.value = disabled;
    } else if (newAction === Action.Decrypt) {
      encryptClass.value = disabled;
      decryptClass.value = chosen;
    }
  }
});
</script>

<template>
  <button
    name="action"
    type="button"
    :class="`py-4 px-4 sm:px-16 text-lg lg:px-32 rounded-md ${encryptClass}`"
    @click="action = Action.Encrypt"
  >
    Encrypt
  </button>
  <button
    name="action"
    type="button"
    :class="`ml-4 sm:ml-16 lg:ml-32 py-4 px-4 sm:px-16 text-lg lg:px-32 rounded-md ${decryptClass}`"
    @click="action = Action.Decrypt"
  >
    Decrypt
  </button>
</template>
