import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { usePropsStore } from "./props";

enum Cipher {
  Ceasar = "ceasar",
  Switch = "switch",
}

enum Action {
  Encrypt = "encrypt",
  Decrypt = "decrypt",
}

export const useFormStore = defineStore("form", () => {
  const action = ref(Action.Encrypt);
  const cipher = ref(Cipher.Ceasar);
  const message = ref("");
  const props = usePropsStore();

  const asJson = computed(() => {
    return JSON.stringify({
      action: action.value,
      text: message.value,
      cipher: cipher.value,
      props: props.props,
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

  return { action, cipher, message, props, asJson, sendForm };
});
