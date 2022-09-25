export enum InputType {
  Text = "text",
  Number = "number",
}

export type FieldValue = string | number | boolean;

export type DynamicFieldOptions = {
  style?: string;
  link?: string;
};

export type DynamicFieldOptionsSet = {
  [key: string]: DynamicFieldOptions;
};

export type Flatten<T> = T extends any[] ? T[number] : T;

export interface Translation {
  en: { [key: string]: string };
  pl: { [key: string]: string };
}
export interface ValidationError {
  code: string;
  value: FieldValue;
  msgAttr?: any;
}

export enum Cipher {
  Ceasar = "ceasar",
  Switch = "switch",
  Morse = "morse",
}

export enum Action {
  Encrypt = "encrypt",
  Decrypt = "decrypt",
}

export interface Params {
  alphabet?: string;
  shift?: number;
  switchKey?: string;
}
