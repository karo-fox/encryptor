export enum InputType {
  Text = "text",
  Number = "number",
}

export type FieldValue = string | number | boolean;

export type DynamicInputOptions = {
  inputStyle?: string;
  link?: boolean;
  mask?: string;
};

export type DynamicInputOptionsSet = {
  [key: string]: DynamicInputOptions;
};

export type Flatten<T> = T extends any[] ? T[number] : T;
