<script setup lang="ts">
import { computed } from "vue";

import { useFormStore } from "@/stores/form";
import { Cipher } from "@/core/models";

import CeasarDescription from "./CeasarDescription.vue";
import SwitchDescription from "./SwitchDescription.vue";
import FallbackDescription from "./FallbackDescription.vue";
import MorseDescription from "./MorseDescription.vue";

const formStore = useFormStore();

const activeComponent = computed(() => {
  switch (formStore.cipher) {
    case Cipher.Ceasar:
      return CeasarDescription;
    case Cipher.Switch:
      return SwitchDescription;
    case Cipher.Morse:
      return MorseDescription;
    default:
      return FallbackDescription;
  }
});
</script>

<template>
  <KeepAlive>
    <component :is="activeComponent" />
  </KeepAlive>
</template>
