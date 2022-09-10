<script setup lang="ts">
import type { DynamicFieldOptionsSet } from "@/core/models";
import { useFormStore } from "@/stores/form";
import { ref, watchEffect } from "vue";
import DynamicSelectField from "../DynamicSelectField.vue";

const form = useFormStore();

const switchKey = ref("");

watchEffect(() => {
  form.$patch({
    params: { switchKey: switchKey.value },
  });
});

const switchKeySelectOptions = [
  { text: "ga-de-ry-po-lu-ki", value: "ga-de-ry-po-lu-ki" },
  { text: "po-li-ty-ka-re-nu", value: "po-li-ty-ka-re-nu" },
];

const options: DynamicFieldOptionsSet = {
  switchKey: {
    style: "py-4 ml-8 rounded-md bg-slate-300 text-slate-900 p-2",
    link: true,
  },
};
</script>

<template>
  <DynamicSelectField
    v-model="switchKey"
    name="switch key"
    :select-options="switchKeySelectOptions"
    :options="options.switchKey"
  />
</template>
