import { describe, it, expect } from "vitest";
import { useValidate } from "@/composables/validate.ts";
import { required, minValue, maxValue } from "@/core/validators.ts";


it("works with one validator", () => {
    let value = useValidate(12, [required]);
    expect(value).toStrictEqual([]);
});

it("works with multiple validators", () => {
    let value = useValidate(12, [required, minValue(10)]);
    expect(value).toStrictEqual([]);
});

it("return error on failure", () => {
    let value = useValidate(0, [required]);
    let expected = [ { code: "required", value: 0} ];

    expect(value).toStrictEqual(expected);
});

it("returns multiple errors", () => {
    let value = useValidate(0, [required, minValue(1)]);
    let expected = [
        {code: "required", value: 0}, 
        {code: "minValue", value: 0, msgAttr: 1}
    ];

    expect(value).toStrictEqual(expected);
})