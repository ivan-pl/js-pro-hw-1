import frequencyCount from "./frequencyCount";

export default function sortLists(lists: string[][]): string[][] {
  const frequencyCounter = frequencyCount(lists);
  const resultLists: string[][] = [];

  for (const list of lists) {
    const listCopy = [...list];
    listCopy.sort(
      (item1, item2) =>
        frequencyCounter[item2] - frequencyCounter[item1] ||
        (item1 > item2 ? 1 : -1)
    );
    resultLists.push(listCopy);
  }

  return resultLists;
}
