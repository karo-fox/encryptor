export enum InputType {
  Text = "text",
  Number = "number",
}

export type FieldValue = string | number | boolean;

type Validator<T> = (value: T) => string;

export type NumberValidator = Validator<number>;
export type TextValidator = Validator<string>;
export type FieldValidator = Validator<FieldValue>;

export type ValidatorArray = (
  | FieldValidator
  | NumberValidator
  | TextValidator
)[];

export type DynamicInputOptions = {
  inputStyle?: string;
  link?: boolean;
};

export type DynamicInputOptionsSet = {
  [key: string]: DynamicInputOptions;
};
