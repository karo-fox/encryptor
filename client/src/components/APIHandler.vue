<script setup lang="ts">
import type { EncryptionData } from '@/composables/encrypt';
import { useEncrypt } from '@/composables/encrypt';
import { ref } from 'vue';
import InputPanel from './InputPanel.vue';
import OutputPanel from './OutputPanel.vue';

let encryptedText = ref('');
async function encrypt(data: EncryptionData) {
  encryptedText.value = await useEncrypt(data);
}
</script>

<template>
  <InputPanel @encrypt-clicked="(data: EncryptionData) => encrypt(data)" />
  <OutputPanel :display-text="encryptedText"/>
</template>