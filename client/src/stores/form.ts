import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

export enum Cipher {
  Ceasar = "ceasar",
  Switch = "switch",
}

export enum Action {
  Encrypt = "encrypt",
  Decrypt = "decrypt",
}

export interface Params {
  alphabet?: string;
  shift?: number;
  switchKey?: string;
}

export const useFormStore = defineStore("form", () => {
  const action = ref(Action.Encrypt);
  const cipher = ref(Cipher.Ceasar);
  const message = ref("");

  const params: Ref<Params> = ref({});

  const result = ref("...");

  const asJsonString = computed(() => {
    return JSON.stringify({
      action: action.value,
      text: message.value,
      cipher: cipher.value,
      params: params.value,
    });
  });

  async function sendForm() {
    const response = await fetch("/api", {
      method: "POST",
      body: asJsonString.value,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (response.result) {
      result.value = response.result;
    } else if (response.exception) {
      //TODO: Handle excpetion
      console.log(response.exception);
    }
  }

  return {
    action,
    cipher,
    message,
    params,
    result,
    sendForm,
    asJson: asJsonString,
  };
});
