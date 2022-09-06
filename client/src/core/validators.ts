import type { FieldValidator, FieldValue, NumberValidator } from "./models";

export const required: FieldValidator = (value: FieldValue): string => {
  return !value || value === null || value === undefined ? "error message" : "";
};

export const maxValue =
  (max: number): NumberValidator =>
  (value: number): string => {
    return value > max ? "error message" : "";
  };

export const minValue =
  (min: number): NumberValidator =>
  (value: number): string => {
    return value < min ? "error message" : "";
  };

export const notNegative = minValue(0);
