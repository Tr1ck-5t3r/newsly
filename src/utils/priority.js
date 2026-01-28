export const getPriority = (article, preferences) => {
  let priority = 0;
  if (article.tags) {
    for (const tag of article.tags) {
      if (preferences[tag]) {
        priority += preferences[tag];
      }
    }
  }
  return priority;
};
