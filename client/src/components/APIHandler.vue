<script setup lang="ts">
import type { EncryptionData } from '@/composables/encrypt';
import { useEncrypt } from '@/composables/encrypt';
import { ref } from 'vue';
import Input from './Input.vue';
import Output from './Output.vue';

const encryptedText = ref('karolina');

</script>

<template>
  <Input @encrypt="(data: EncryptionData) => useEncrypt(data)" />
  <Output :display-text="encryptedText"/>
</template>