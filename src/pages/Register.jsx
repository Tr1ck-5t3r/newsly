import React, { useState } from "react";
import { registerUser } from "../utils/api";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await registerUser(username, password);
      setSuccess(true);
    } catch (err) {
      setError("Registration failed. This username might be taken.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-700 p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-2">
            Join Newsly<span className="text-purple-600">.</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">
            Start personalizing your tech news
          </p>
        </div>

        {/* Success Alert */}
        {success ? (
          <div className="text-center py-6 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-4">
              <svg
                className="w-8 h-8"
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
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Account Created!
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">
              You're all set to explore Newsly.
            </p>
            <Link
              to="/login"
              className="block w-full rounded-2xl bg-purple-600 py-4 text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:bg-purple-700 transition-all"
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Alert */}
            {error && (
              <div className="mb-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-3 text-sm text-red-600 dark:text-red-400 animate-shake">
                {error}
              </div>
            )}

            {/* Username Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2 ml-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                required
                className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required
                className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-purple-600 py-4 text-white font-bold text-lg
                         shadow-lg shadow-purple-500/30 transition-all hover:bg-purple-700 
                         disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] mt-4"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>

            {/* Footer */}
            <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400 font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-600 dark:text-purple-400 font-bold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
