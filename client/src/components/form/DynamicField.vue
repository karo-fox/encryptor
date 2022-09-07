<script setup lang="ts">
import { useValidate } from "@/composables/validate";
import type { DynamicInputOptions, FieldValue, InputType } from "@/core/models";
import { capitalize, computed } from "vue";
import InfoLink from "../InfoLink.vue";

const props = defineProps<{
  modelValue: any;
  name: string;
  type: InputType;
  validators?: ((value: any) => string)[];
  options?: DynamicInputOptions;
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

const errors = computed(() => {
  return props.validators ? useValidate(value.value, props.validators) : [];
});
</script>

<template>
  <div class="py-4 flex items-center ml-16 md:ml-0 justify-start">
    <label class="text-lg" :for="name">{{ capitalize(name) }}</label>
    <InfoLink v-if="options?.link" :link-to="`info-${name}`" />
  </div>
  <input
    :type="type"
    :id="name"
    v-model="value"
    :class="options?.inputStyle || ''"
  />
  <div class="mt-2 text-red-700">
    <p v-for="error in errors" :key="error">
      {{ error }}
    </p>
  </div>
</template>
