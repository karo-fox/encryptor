import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useResultStore = defineStore("result", () => {
  const result = ref("Your result ...");
  function updateResult(newResult: string) {
    result.value = newResult;
  }
  const getResult = computed(() => {
    return result.value;
  });

  return { result, updateResult, getResult };
});
