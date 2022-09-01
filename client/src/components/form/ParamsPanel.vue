<script setup lang="ts">
import { computed } from "vue";
import { Cipher, useFormStore } from "@/stores/form";

import CeasarParams from "./params/CeasarParams.vue";
import SwitchParams from "./params/SwitchParams.vue";
import FallbackParams from "./params/FallbackParams.vue";

const form = useFormStore();

const activeComponent = computed(() => {
  switch (form.cipher) {
    case Cipher.Ceasar:
      return CeasarParams;
    case Cipher.Switch:
      return SwitchParams;
    default:
      return FallbackParams;
  }
});
</script>

<template>
  <KeepAlive>
    <component :is="activeComponent" />
  </KeepAlive>
</template>
