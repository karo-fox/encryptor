export enum InputType {
  Text = "text",
  Number = "number",
}

export type FieldValue = string | number | boolean;

export type DynamicFieldOptions = {
  style?: string;
  link?: boolean;
};

export type DynamicFieldOptionsSet = {
  [key: string]: DynamicFieldOptions;
};

export type Flatten<T> = T extends any[] ? T[number] : T;

export interface Translation {
  en: { [key: string]: string };
  pl: { [key: string]: string };
}
