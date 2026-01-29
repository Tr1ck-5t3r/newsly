import React, { useState } from "react";
import { loginUser } from "../utils/api";
import { useAuth } from "../AuthContext";

const Login = () => {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await loginUser(username, password);
      login(data.token); // ✅ context handles everything
    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-zinc-800">Welcome back</h1>
        <p className="text-zinc-500 mb-6">Sign in to continue</p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>
          <p className="mt-6 text-sm text-center text-zinc-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-indigo-700 hover:underline"
            >
              Register
            </a>
          </p>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-700 py-2.5 text-white font-semibold
                       transition hover:bg-indigo-800
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
