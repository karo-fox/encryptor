import type { Flatten, ValidationError } from "@/core/models";

export function useValidate(
  value: undefined,
  validators: ((value: undefined) => ValidationError | undefined)[]
): ValidationError[] {
  const errors: ValidationError[] = [];
  validators.forEach((validationFn: Flatten<typeof validators>) => {
    const errorOrUndefined = validationFn(value);
    if (errorOrUndefined) errors.push(errorOrUndefined);
  });

  return errors;
}
