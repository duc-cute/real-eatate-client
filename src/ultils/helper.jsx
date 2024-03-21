/** @format */

export const formatMoney = (number) =>
  Number(number?.toFixed(1)).toLocaleString();

export const generateRange = (start, end) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, index) => start + index);
};
