<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed, capitalize } from "vue";

import type { DynamicFieldOptions, Translation } from "@/core/models";

import InfoLink from "../InfoLink.vue";

const props = defineProps<{
  modelValue: any;
  name: string;
  selectValues: string[];
  translation?: Translation;
  options?: DynamicFieldOptions;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: typeof props.modelValue): void;
}>();

const { t } = useI18n({ messages: props.translation || {} });

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

function translateOrNot(value: string): string {
  if (props.translation) {
    return t(value);
  }
  return value;
}
</script>

<template>
  <div class="py-4 flex items-center ml-16 md:ml-0 justify-start">
    <label class="text-lg" :for="name">{{ capitalize(name) }}</label>
    <InfoLink v-if="options?.link" :link-to="options.link" />
  </div>
  <select
    :name="name"
    :class="options?.style || ''"
    :id="`${name}-select`"
    v-model="value"
  >
    <option v-for="value in selectValues" :key="value" :value="value">
      {{ translateOrNot(value) }}
    </option>
  </select>
</template>
