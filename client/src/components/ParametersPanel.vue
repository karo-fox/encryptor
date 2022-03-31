<script setup lang="ts">
import { reactive } from "vue";
import CustomInput from "./CustomInput.vue";

const props = defineProps<{
  params: {
    name: string;
    type: string;
    validate?: (val: string | number) => string;
  }[];
}>();

defineEmits<{
  (e: "updateParams", param: { name: string; value: unknown }): void;
}>();

const keys = props.params.map((p) => p.name);
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
  <div class="pt-4" v-for="param in params" :key="`${param.name}-key`">
    <CustomInput
      :input-name="param.name"
      :type="param.type"
      v-model="paramValues[param.name]"
      :key="`${param.name}-key`"
      @update:model-value="
        $emit('updateParams', { name: param.name, value: $event })
      "
      :validate="param.validate"
    />
  </div>
</template>
