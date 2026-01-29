import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const getLinkStyles = (path, isPrimary = false) => {
    const isActive = location.pathname === path;

    // Primary Action (Register) style
    if (isPrimary) {
      return `px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 bg-purple-600 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-700 hover:shadow-purple-500/50 active:scale-95`;
    }

    // Standard Link style
    return `px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200 ${
      isActive
        ? "bg-zinc-100 dark:bg-zinc-800 text-purple-600 dark:text-purple-400"
        : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <h1 className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">
            Newsly<span className="text-purple-600">.</span>
          </h1>
        </Link>

        {/* Center: Main Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/" className={getLinkStyles("/")}>
            Home
          </Link>
          <Link
            to="/update-preferences"
            className={getLinkStyles("/update-preferences")}
          >
            Preferences
          </Link>
        </nav>

        {/* Right: Auth Actions */}
        <div className="flex items-center gap-3">
          <Link to="/login" className={getLinkStyles("/login")}>
            Sign In
          </Link>
          <Link to="/register" className={getLinkStyles("/register", true)}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
