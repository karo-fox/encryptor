<script setup lang="ts">
import { capitalize, computed, ref, watch } from 'vue';

const props = defineProps<{
  inputName: string,
  type: string,
  modelValue: any,
  validate?: Function,
}>()

const emit = defineEmits(['update:modelValue'])

const errorMsg = ref('');
const label = computed(() => capitalize(props.inputName) + ':');

const value = computed({
  get() {
    return props.modelValue
  },
  set(inputValue) {
    emit('update:modelValue', inputValue)
  },
})

watch(value, (newValue) => {
  errorMsg.value = props.validate ? props.validate(newValue) : '';
})
</script>

<template>
  <label :for="`${inputName}-id`" class="p-1 mr-4">{{ label }}</label>
  <input
    :type="type"
    :id="`${inputName}-id`"
    :name="inputName"
    v-model="value"
    class="p-1 border-solid border-2 border-emerald-600 rounded-md"
  />
  <div class="text-red-700 p-1">{{ errorMsg }}</div>
</template>
