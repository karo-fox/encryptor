<script setup lang="ts">
import type { EncryptionData } from "@/composables/encrypt";
import { computed, reactive, watch } from "vue";
import ParametersPanel from "./ParametersPanel.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({});

const state: EncryptionData = reactive({
  text: "",
  cipher: "",
  params: {},
});

const cipherParams = computed(() => {
  return ciphers.find((cipher) => cipher.value == state.cipher)?.params;
});

watch(
  () => state.cipher,
  (newCipher, oldCipher) => {
    if (newCipher !== oldCipher) {
      state.params = {};
    }
  }
);

const ciphers = [
  {
    value: "ceasar",
    params: [
      {
        type: "number",
        valueName: "shift",
        validate: (val: number | string) => (val == 0 ? "cannot be 0" : ""),
      },
    ],
  },
  {
    value: "switch",
    params: [
      {
        type: "text",
        valueName: "switch-key",
      },
    ],
  },
];
defineEmits(["encryptClicked"]);

function updateParams(param: { valueName: string; value: unknown }) {
  state.params[param.valueName as keyof Record<string, unknown>] = param.value;
}
</script>

<template>
  <div class="p-4">
    <label for="input-area" class="text-xl"
      >{{ t("homeView.yourMessage") }}:</label
    >
    <div class="py-4">
      <textarea
        v-model="state.text"
        name="input-area"
        id="input-area"
        cols="30"
        rows="10"
        class="border-solid border-emerald-600 focus:outline-none focus:border-emerald-500 border-2 rounded-md w-full p-4"
        :placeholder="`${t('homeView.typeHere')}`"
      ></textarea>
    </div>
    <div class="grid grid-cols-4">
      <select
        v-model="state.cipher"
        name="cipher"
        class="col-span-2 md:col-span-1"
      >
        <option value disabled selected>
          {{ t("homeView.chooseCipher") }}:
        </option>
        <option
          v-for="option in ciphers"
          :value="option.value"
          :key="`${option.value}-key`"
        >
          {{ t(`ciphers.${option.value}.name`) }}
        </option>
      </select>
      <button
        @click="$emit('encryptClicked', state)"
        class="rounded-full text-white bg-emerald-700 px-4 py-1 col-start-4"
      >
        {{ t("homeView.encrypt") }}
      </button>
    </div>
    <div v-if="cipherParams">
      <ParametersPanel
        :cipher="state.cipher"
        :params="cipherParams"
        @update-params="updateParams"
      />
    </div>
  </div>
</template>
