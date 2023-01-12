export default function sum(value?: number): any {
  if (value === undefined) {
    return 0;
  }

  let currentSum = value;

  return function f(value?: number): any {
    if (value === undefined) {
      return currentSum;
    }

    currentSum += value;

    return f;
  };
}
