<script setup lang="ts">
import { computed } from "vue";
import { useFormStore } from "@/stores/form";
import { Cipher } from "@/core/models";

import CeasarParams from "./params/CeasarParams.vue";
import SwitchParams from "./params/SwitchParams.vue";
import FallbackParams from "./params/FallbackParams.vue";
import NoParams from "./params/NoParams.vue";

const form = useFormStore();

const activeComponent = computed(() => {
  switch (form.cipher) {
    case Cipher.Ceasar:
      return CeasarParams;
    case Cipher.Switch:
      return SwitchParams;
    case Cipher.Morse:
      return NoParams;
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
