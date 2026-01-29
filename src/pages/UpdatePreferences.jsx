import React, { useState } from "react";
import { updateUserPreferences } from "../utils/api";

const ALL_PREFERENCES = [
  "Artificial Intelligence",
  "Web Development",
  "Mobile Apps",
  "Cloud Computing",
  "Blockchain",
  "Cybersecurity",
  "DevOps",
  "Gaming",
  "Startups",
  "Tech Policy",
  "AR/VR",
  "Programming Languages",
  "Open Source",
  "Data Science",
  "Machine Learning",
  "UI/UX Design",
  "FinTech",
  "E-commerce",
  "Robotics",
  "IoT",
  "Quantum Computing",
];

const UpdatePreferences = () => {
  const [preferences, setPreferences] = useState(
    ALL_PREFERENCES.map((p) => ({
      preference: p,
      priority: 1,
      selected: false,
    })),
  );
  const [otherValue, setOtherValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const togglePreference = (index) => {
    setPreferences((prev) =>
      prev.map((p, i) => (i === index ? { ...p, selected: !p.selected } : p)),
    );
  };

  const changePriority = (index, value) => {
    setPreferences((prev) =>
      prev.map((p, i) => (i === index ? { ...p, priority: Number(value) } : p)),
    );
  };

  const addOther = (e) => {
    e.preventDefault();
    if (!otherValue.trim()) return;
    setPreferences([
      ...preferences,
      { preference: otherValue, priority: 1, selected: true },
    ]);
    setOtherValue("");
  };

  const handleSubmit = async () => {
    const selectedPrefs = preferences
      .filter((p) => p.selected)
      .map((p) => ({ preference: p.preference, priority: p.priority }));

    if (selectedPrefs.length === 0) {
      setMessage("Select at least one preference!");
      return;
    }

    setLoading(true);
    try {
      await updateUserPreferences(selectedPrefs);
      setMessage("Preferences updated successfully! ✨");
    } catch (err) {
      setMessage("Failed to update preferences.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-2">
            Feed Settings <span className="text-purple-600">🛠️</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Tell us what you're interested in and we'll prioritize your feed.
          </p>
        </header>

        {message && (
          <div className="mb-6 p-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {preferences.map((p, idx) => (
            <div
              key={idx}
              className={`relative group border-2 rounded-2xl p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between h-28
                ${
                  p.selected
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 ring-1 ring-purple-500"
                    : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-purple-300 dark:hover:border-purple-700"
                }`}
              onClick={() => togglePreference(idx)}
            >
              <div className="flex justify-between items-start">
                <span
                  className={`font-bold transition-colors ${p.selected ? "text-purple-700 dark:text-purple-300" : "text-zinc-700 dark:text-zinc-300"}`}
                >
                  {p.preference}
                </span>
                {p.selected && (
                  <div className="h-5 w-5 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {p.selected && (
                <div
                  className="flex items-center gap-2 mt-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <label className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    Priority
                  </label>
                  <select
                    value={p.priority}
                    onChange={(e) => changePriority(idx, e.target.value)}
                    className="bg-white dark:bg-zinc-700 border border-purple-200 dark:border-purple-600 rounded-lg px-2 py-0.5 text-xs focus:ring-2 ring-purple-500 outline-none dark:text-white"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          ))}

          {/* Add Other Option */}
          <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-600 rounded-2xl p-4 flex flex-col justify-center bg-transparent">
            <form onSubmit={addOther} className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Other topic..."
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                className="bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-xl px-3 py-2 text-sm focus:ring-2 ring-purple-500 outline-none dark:text-white"
              />
              <button
                type="submit"
                className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700"
              >
                + Add Custom Topic
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 sticky bottom-8 flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="group relative px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all shadow-xl shadow-purple-500/40 disabled:opacity-50 active:scale-95"
          >
            {loading ? "Syncing Preferences..." : "Save Preferences"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePreferences;
