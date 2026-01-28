import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getPriority } from "../utils/priority";

export default function ArticleGrid({ preferences }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const ranked = articles
    .map((a) => ({
      ...a,
      priority: getPriority(a, preferences),
    }))
    .sort((a, b) => b.priority - a.priority);

  return (
    <div className="flex flex-wrap gap-4">
      {ranked.map((a, i) => (
        <ArticleCard key={i} article={a} />
      ))}
    </div>
  );
}
