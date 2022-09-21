import type { FieldValue, ValidationError } from "./models";

export const required = (value: FieldValue): ValidationError | undefined => {
  return !value || value === null || value === undefined
    ? { code: "required", value: value }
    : undefined;
};

export const maxValue =
  (max: number) =>
  (value: number): ValidationError | undefined => {
    return value > max
      ? { code: "maxValue", value: value, msgAttr: max }
      : undefined;
  };

export const minValue =
  (min: number) =>
  (value: number): ValidationError | undefined => {
    return value < min
      ? { code: "minValue", value: value, msgAttr: min }
      : undefined;
  };

export const notNegative = minValue(0);
