<script setup lang="ts">
import type { EncryptionData } from '@/composables/encrypt';
import { useEncrypt } from '@/composables/encrypt';
import { ref } from 'vue';
import Input from './Input.vue';
import Output from './Output.vue';

let encryptedText = ref('anonymous');
function encrypt(data: EncryptionData) {
  encryptedText.value = useEncrypt(data);
}
</script>

<template>
  <Input @encrypt-clicked="(data: EncryptionData) => encrypt(data)" />
  <Output :display-text="encryptedText"/>
</template>