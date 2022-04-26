export function validateNotZero(val: number | string): string {
  return val == 0 ? "cannot be 0" : "";
}

export function validateNotEmpty(val: number | string): string {
  return val == "" ? "cannot be empty" : "";
}

export function validateSwitchKey(val: number | string): string {
  const value = val as string; //TODO: fix it, it's wrong
  let message = validateNotEmpty(value);
  if (message == "") {
    const re = /^\w\w(-\w\w)*$/;
    message = re.test(value) ? "" : "Should consist of pairs separated by '-'";
  }
  return message;
}

export function validateShift(val: number | string): string {
  const value = val as number; //TODO: fix it, it's wrong
  let message = validateNotZero(value);
  if (message == "") {
    message = value < 0 ? "cannot be negative" : "";
  }
  return message;
}

export function validateAlphabet(val: number | string): string {
  const value = val as string; // TODO: fix it
  const languages = ["", "en", "pl"];
  return languages.find((item) => item == value) // should accept empty string
    ? ""
    : "we don't support this alphabet";
}
