export function getPriority(article, preferences) {
  let score = 0;

  const rules = [
    { key: "ai", regex: /ai|openai|llm/i },
    { key: "security", regex: /security|breach|vulnerability/i },
    { key: "startups", regex: /startup|funding|launch/i },
  ];

  for (const rule of rules) {
    if (rule.regex.test(article.title)) {
      score += preferences[rule.key] || 0;
    }
  }

  return score;
}
