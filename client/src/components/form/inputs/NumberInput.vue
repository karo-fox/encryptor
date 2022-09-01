<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: number;
}>();
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(inputValue) {
    emit("update:modelValue", inputValue);
  },
});
</script>

<template>
  <input
    type="number"
    class="py-4 w-16 ml-8 rounded-md bg-slate-300 text-slate-900 p-2"
    v-model="value"
  />
</template>
