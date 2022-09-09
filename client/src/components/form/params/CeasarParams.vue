<script setup lang="ts">
import { useFormStore } from "@/stores/form";
import { ref, watchEffect } from "vue";
import InfoLink from "@/components/InfoLink.vue";
import DynamicInputField from "../DynamicInputField.vue";
import { InputType, type DynamicFieldOptionsSet } from "@/core/models";
import { required, maxValue, notNegative } from "@/core/validators";

const form = useFormStore();

const shift = ref(1);
const alphabet = ref("en");

watchEffect(() => {
  form.$patch({
    params: { shift: shift.value, alphabet: alphabet.value },
  });
});

const options: DynamicFieldOptionsSet = {
  shift: {
    style: "py-4 w-16 ml-8 rounded-md bg-slate-300 text-slate-900 p-2",
    link: true,
  },
};
</script>

<template>
  <DynamicInputField
    v-model="shift"
    name="shift"
    :type="InputType.Number"
    :options="options.shift"
    :validators="[required, maxValue(26), notNegative]"
  />
  <div class="py-4 flex items-center ml-16 md:ml-0">
    <label for="alphabet" class="text-lg">Alphabet</label>
    <InfoLink link-to="info-alphabet" />
  </div>
  <select
    id="alphabet"
    name="alphabet"
    class="p-4 w-32 ml-8 bg-slate-300 rounded-md text-slate-900"
    v-model="alphabet"
  >
    <option value="en">English</option>
    <option value="pl">Polish</option>
  </select>
</template>
