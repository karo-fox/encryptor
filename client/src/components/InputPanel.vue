<script setup lang='ts'>
import type { EncryptionData } from '@/composables/encrypt';
import { computed, reactive, watch } from 'vue';
import ParametersPanel from './ParametersPanel.vue';

const state: EncryptionData = reactive({
  text: '',
  cipher: '',
  params: {}
})

const cipherParams = computed(() => {
  return ciphers.find((cipher) => cipher.value == state.cipher)?.params;
});

watch(
  () => state.cipher,
  (newCipher, oldCipher) => {
    if (newCipher !== oldCipher) {
      state.params = {}
    }
  }
)

const ciphers = [
  { text: 'Test Cipher', value: 'test', params: null },
  { text: 'Ceasar Cipher', value: 'ceasar', params: [{ name: 'transformation', type: 'number', validate: (val: number) => val == 0 ? 'cannot be 0' : '' }] },
  { text: 'Switch Cipher', value: 'switch', params: [{ name: 'switch-key', type: 'text' }] },
]

const emit = defineEmits(['encryptClicked'])

function updateParams(param: { name: string, value: any }) {
  state.params[param.name as keyof Object] = param.value;
}

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
    <div v-if="cipherParams">
      <ParametersPanel :params="cipherParams" @update-params="updateParams" />
    </div>
  </div>
</template>