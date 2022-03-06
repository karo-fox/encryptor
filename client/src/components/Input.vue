<script setup lang='ts'>
import type { EncryptionData } from '@/composables/encrypt';
import { reactive, ref } from 'vue';

const state: EncryptionData = reactive({
  text: '',
  cipher: '',
  parameters: {}
})

const ciphers = ref([
  { text: 'Ceasar Cipher', value: 'ceasar' },
  { text: 'Switch Cipher', value: 'switch' }
])

const emit = defineEmits(['encrypt'])

</script>

<template>
  <div>
    <label for="input-area">Your message:</label>
    <textarea
      v-model="state.text"
      name="input-area"
      id="input-area"
      cols="30"
      rows="10"
      class="border-solid border-emerald-600 focus:outline-none focus:border-emerald-500 border-2 rounded-md w-full"
      placeholder="Type here"
    ></textarea>
    <div class="grid grid-cols-4">
      <select v-model="state.cipher" name="cipher" class="col-span-2">
        <option value disabled selected>Choose the cipher</option>
        <option v-for="option in ciphers" :value="option.value">{{ option.text }}</option>
      </select>
      <button
        @click="$emit('encrypt', state)"
        class="rounded-full text-white bg-emerald-700 px-5 py-2 col-start-4"
      >Encrypt</button>
    </div>
  </div>
</template>