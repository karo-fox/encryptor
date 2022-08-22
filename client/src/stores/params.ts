import { defineStore } from "pinia";
import { ref } from "vue";

export const useParamsStore = defineStore("params", () => {
  const params = ref({ shift: 1, alphabet: "en" });

  return { params };
});
