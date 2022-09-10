<script setup lang="ts">
import type { DynamicFieldOptions } from "@/core/models";
import { computed, capitalize } from "vue";
import InfoLink from "../InfoLink.vue";

const props = defineProps<{
  modelValue: any;
  name: string;
  selectOptions: { value: any; text: string }[];
  options?: DynamicFieldOptions;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: typeof props.modelValue): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="py-4 flex items-center ml-16 md:ml-0 justify-start">
    <label class="text-lg" :for="name">{{ capitalize(name) }}</label>
    <InfoLink v-if="options?.link" :link-to="`info-${name}`" />
  </div>
  <select :name="name" :class="options?.style || ''" v-model="value">
    <option
      v-for="option in selectOptions"
      :key="option.value"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>
