type AllowedTypes = string | number;

export default function frequencyCount(lists: AllowedTypes[][]): {
  [Key: AllowedTypes]: number;
} {
  const counter = {} as { [P: AllowedTypes]: number };
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
