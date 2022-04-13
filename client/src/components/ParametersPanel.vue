<script setup lang="ts">
import { reactive } from "vue";
import CustomInput from "./CustomInput.vue";

const props = defineProps<{
  params: {
    name: string;
    type: string;
    valueName: string;
    validate?: (val: string | number) => string;
  }[];
}>();

defineEmits<{
  (e: "updateParams", param: { valueName: string; value: unknown }): void;
}>();

const keys = props.params.map((p) => p.valueName);
const values = props.params.map((p) => (p.type == "number" ? 0 : ""));
const combineArrays = (first: string[], second: (0 | "")[]) => {
  return first.reduce(
    (acc: { [x: string]: unknown }, val: string | number, ind: number) => {
      acc[val] = second[ind];
      return acc;
    },
    {}
  );
};

const paramValues = reactive(combineArrays(keys, values));
</script>

<template>
  <div class="pt-4" v-for="param in params" :key="`${param.valueName}-key`">
    <CustomInput
      :input-name="param.name"
      :type="param.type"
      v-model="paramValues[param.valueName]"
      :key="`${param.valueName}-key`"
      @update:model-value="
        $emit('updateParams', { valueName: param.valueName, value: $event })
      "
      :validate="param.validate"
    />
  </div>
</template>
