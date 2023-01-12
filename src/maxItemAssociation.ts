export default function maxItemAssociation(lists: string[][]): string[] {
  let maxRecommendation: Set<string> = new Set();

  for (const list of lists) {
    const recommendation = createRecommendationSet(list, lists);
    if (recommendation.size > maxRecommendation.size) {
      maxRecommendation = recommendation;
    }
  }

  return Array.from(maxRecommendation).sort();
}

function createRecommendationSet(
  list: string[],
  history: string[][]
): Set<string> {
  const recommendation = new Set(list);

  for (const item of list) {
    for (const historyList of history) {
      if (historyList.includes(item)) {
        historyList.forEach((_) => recommendation.add(_));
      }
    }
  }

  return recommendation;
}
