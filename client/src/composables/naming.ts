import { capitalize } from "vue";

export function useToNameTag(name: string): string {
  if (name.match(/-+/)) {
    const splitted = name.split("-");
    const newName = [];
    splitted.forEach((namePart, i) => {
      if (i > 0) {
        namePart = capitalize(namePart);
      }
      newName.push(namePart);
    });
    name = newName.join("");
  }
  return name;
}
