import { useState, useEffect } from "react";
import ArticleGrid from "./components/ArticleGrid";
import PreferencesPanel from "./components/PreferencesPanel";

const DEFAULT_PREFS = {
  ai: 3,
  security: 2,
  startups: 1,
};

function App() {
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem("newsly_prefs");
    return saved ? JSON.parse(saved) : DEFAULT_PREFS;
  });

  useEffect(() => {
    localStorage.setItem("newsly_prefs", JSON.stringify(preferences));
  }, [preferences]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Newsly 📰</h1>

      <PreferencesPanel preferences={preferences} onChange={setPreferences} />

      <ArticleGrid preferences={preferences} />
    </div>
  );
}

export default App;
