: any[]: (0 | "")[]: { [x: string]: any; }: string | number: string | number, type Ref<script setup lang="ts">
import { reactive, ref, type Ref } from "vue";
import CustomInput from "./CustomInput.vue";

const props = defineProps<{
  params: {
    name: string;
    type: string;
    validate?: Function;
  }[]
}>()

const emit = defineEmits<{
  (e: 'updateParams', param: { name: string, value: any }) : void
}>()

const keys = props.params.map(p => p.name)
const values = props.params.map(p => p.type == 'number' ? 0 : '')
const combineArrays = (first: any[], second: (0 | "")[]) => {
  return first.reduce((acc: { [x: string]: any; }, val: string | number, ind: number) => {
    acc[val] = second[ind];
    return acc;
  }, {});
}

const paramValues = reactive(combineArrays(keys, values));

</script>

<template>
  <div class="pt-4" v-for="param in params">
    <CustomInput
      :input-name="param.name"
      :type="param.type"
      v-model="paramValues[param.name]"
      :key="`${param.name}-key`"
      @update:model-value="$emit('updateParams', { name: param.name, value: $event })"
      :validate="param.validate"
    />
  </div>
</template>