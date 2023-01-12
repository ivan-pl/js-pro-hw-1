export default function frequencyCount(lists: string[][]): {
  [Key: string]: number;
} {
  const counter = {} as { [P: string]: number };
  for (const list of lists) {
    for (const item of list) {
      if (item in counter) {
        counter[item] += 1;
      } else {
        counter[item] = 1;
      }
    }
  }
  return counter;
}
