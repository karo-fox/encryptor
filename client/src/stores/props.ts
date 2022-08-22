import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePropsStore = defineStore("props", () => {
  const props = ref("");

  return { props };
});
