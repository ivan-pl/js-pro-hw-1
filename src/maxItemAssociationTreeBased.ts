import sortLists from "./utils/sortLists";

export default function maxItemAssociation(history: string[][]): string[] {
  const lists = sortLists(history);
  const recommends: { [P: string]: Set<string> } = {};

  for (const list of lists) {
    const nodeName = list[0];
    if (nodeName in recommends) {
      list.forEach((item) => recommends[nodeName].add(item));
    } else {
      recommends[nodeName] = new Set(list);
    }
  }

  const longestSet = Array.from(Object.values(recommends)).reduce(
    (prevSet, curSet) => (prevSet.size > curSet.size ? prevSet : curSet)
  );

  return Array.from(longestSet).sort();
}
