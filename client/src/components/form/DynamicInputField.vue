<script setup lang="ts">
import { capitalize, computed } from "vue";
import { useI18n } from "vue-i18n";

import { useValidate } from "@/composables/validate";
import type {
  DynamicFieldOptions,
  InputType,
  ValidationError,
} from "@/core/models";
import InfoLink from "../InfoLink.vue";

const { t } = useI18n();

const props = defineProps<{
  modelValue: any;
  name: string;
  type: InputType;
  validators?: ((value: any) => ValidationError | undefined)[];
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
    :id="`${name}-input`"
    v-model="value"
    :class="options?.style || ''"
  />
  <div class="mt-2 text-red-700">
    <p v-for="error in errors" :key="`${error.code}-error-option`">
      {{ t(error.code, { attr: error.msgAttr }) }}
    </p>
  </div>
</template>

<i18n>
  {
    "pl": {
      "required": "To pole nie może być puste",
      "maxValue": "Liczba nie może być większa od {attr}",
      "minValue": "Liczba nie może być mniejsza od {attr}",
    }, 
    "en": {
      "required": "This field cannot be empty",
      "maxValue": "The number cannot be higher than {attr}",
      "minValue": "The number cannot be lower than {attr}",
    }
  }
</i18n>
