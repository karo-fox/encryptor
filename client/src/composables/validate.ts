import type { Flatten } from "@/core/models";

export function useValidate(
  value: undefined,
  validators: ((value: undefined) => string)[]
): string[] {
  const errors: string[] = [];
  validators.forEach((validationFn: Flatten<typeof validators>) => {
    errors.push(validationFn(value));
  });

  return errors;
}
