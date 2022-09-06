import type { FieldValue, Validator } from "@/core/models";

export function useValidate(
  value: FieldValue,
  validators?: Validator[]
): string[] {
  const errors: string[] = [];
  if (validators) {
    validators.forEach((validation: Validator) => {
      if (validation(value)) {
        errors.push(validation(value));
      }
    });
  }
  return errors;
}
