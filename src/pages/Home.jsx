import { useState, useEffect } from "react";
import ArticleGrid from '../components/ArticleGrid';
import { fetchArticles } from '../utils/api';

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
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("newsly_prefs", JSON.stringify(preferences));
  }, [preferences]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch articles. Please try again later.");
        console.error(err);
      }
    };

    getArticles();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ArticleGrid preferences={preferences} articles={articles} />
    </div>
  );
};

export default Home;
