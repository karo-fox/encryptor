<script setup lang="ts">
import { ref } from "vue";
import CustomInput from "./CustomInput.vue";

const props = defineProps<{
  params: {
    name: string;
    type: string;
  }[]
}>()

const emit = defineEmits<{
  (e: 'updateParams', param: { name: string, value: any }) : void
}>()

function getRef(type: string) {
  switch (type) {
    case 'text':
      return '';
    case 'number':
      return 0;
    default:
      return undefined;
  }
}


</script>

<template>
  <div class="pt-4" v-for="param in params">
    <CustomInput
      :input-name="param.name"
      :type="param.type"
      :model-value="getRef(param.type)"
      @update:model-value="$emit('updateParams', { name: param.name, value: $event })"
    />
  </div>
</template>