export const combineArrays = (first: string[], second: (0 | "")[]) => {
  return first.reduce(
    (acc: { [x: string]: unknown }, val: string | number, ind: number) => {
      acc[val] = second[ind];
      return acc;
    },
    {}
  );
};
