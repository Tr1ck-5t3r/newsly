import { useState, useEffect } from "react";
import ArticleGrid from '../components/ArticleGrid';

const DEFAULT_PREFS = {
  ai: 3,
  security: 2,
  startups: 1,
};

const Home = () => {
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem("newsly_prefs");
    return saved ? JSON.parse(saved) : DEFAULT_PREFS;
  });

  useEffect(() => {
    localStorage.setItem("newsly_prefs", JSON.stringify(preferences));
  }, [preferences]);

  return (
    <div>
      <ArticleGrid preferences={preferences} />
    </div>
  );
};

export default Home;
