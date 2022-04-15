<script setup lang="ts">
import { capitalize, computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { useToNameTag } from "@/composables/naming";

const { t } = useI18n({});

const props = defineProps<{
  cipher: string;
  valueName: string;
  type: string;
  modelValue: unknown;
  validate?: (val: string | number) => string;
}>();

const emit = defineEmits(["update:modelValue"]);

const errorMsg = ref("");

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

watch(value, (newValue) => {
  errorMsg.value = props.validate
    ? props.validate(newValue as number | string)
    : "";
});
</script>

<template>
  <div class="grid grid-cols-3">
    <label :for="`${valueName}-id`" class="p-1 mr-4"
      >{{
        capitalize(
          t(`ciphers.${cipher}.params.${useToNameTag(valueName)}.name`)
        )
      }}:</label
    >
    <input
      :type="type"
      :id="`${valueName}-id`"
      :name="valueName"
      v-model="value"
      class="p-1 border-solid border-2 border-emerald-600 rounded-md"
    />
  </div>
  <div class="text-red-700 p-1">{{ errorMsg }}</div>
</template>
