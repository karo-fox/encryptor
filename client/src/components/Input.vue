<script setup lang='ts'>
import type { EncryptionData } from '@/composables/encrypt';
import { reactive, ref } from 'vue';

const state: EncryptionData = reactive({
  text: '',
  cipher: '',
  params: {}
})

const ciphers = ref([
  { text: 'Ceasar Cipher', value: 'ceasar' },
  { text: 'Switch Cipher', value: 'switch' }
])

const emit = defineEmits(['encryptClicked'])

</script>

<template>
  <div class="p-4">
    <label for="input-area">Your message:</label>
    <div class="py-4">
      <textarea
        v-model="state.text"
        name="input-area"
        id="input-area"
        cols="30"
        rows="10"
        class="border-solid border-emerald-600 focus:outline-none focus:border-emerald-500 border-2 rounded-md w-full p-4"
        placeholder="Type here"
      ></textarea>
    </div>
    <div class="grid grid-cols-4">
      <select v-model="state.cipher" name="cipher" class="col-span-2 md:col-span-1">
        <option value disabled selected>Choose the cipher</option>
        <option v-for="option in ciphers" :value="option.value">{{ option.text }}</option>
      </select>
      <button
        @click="$emit('encryptClicked', state)"
        class="rounded-full text-white bg-emerald-700 px-4 py-1 col-start-4"
      >Encrypt</button>
    </div>
  </div>
</template>