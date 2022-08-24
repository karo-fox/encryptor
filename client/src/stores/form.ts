import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useParamsStore } from "./params";

export enum Cipher {
  Ceasar = "ceasar",
  Switch = "switch",
}

export enum Action {
  Encrypt = "encrypt",
  Decrypt = "decrypt",
}

export const useFormStore = defineStore("form", () => {
  const action = ref(Action.Encrypt);
  const cipher = ref(Cipher.Ceasar);
  const message = ref("");
  const params = useParamsStore();

  const asJson = computed(() => {
    return JSON.stringify({
      action: action.value,
      text: message.value,
      cipher: cipher.value,
      params: params.params,
    });
  });

  async function sendForm() {
    await fetch("/api", {
      method: "POST",
      body: asJson.value,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return { action, cipher, message, params, asJson, sendForm };
});
