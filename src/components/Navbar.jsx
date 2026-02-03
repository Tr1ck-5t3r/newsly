import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const getLinkStyles = (path, isPrimary = false) => {
    const isActive = location.pathname === path;
    if (isPrimary) {
      return `px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 bg-purple-600 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-700 active:scale-95 text-center`;
    }
    return `px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200 ${
      isActive
        ? "bg-zinc-100 dark:bg-zinc-800 text-purple-600 dark:text-purple-400"
        : "text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
    }`;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 group z-[60]">
            <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/40 group-hover:rotate-6 transition-transform">
              <span className="text-white font-black text-lg">N</span>
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">
              Newsly<span className="text-purple-600">.</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
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

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login" className={getLinkStyles("/login")}>
                Sign In
              </Link>
              <Link to="/register" className={getLinkStyles("/register", true)}>
                Get Started
              </Link>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 z-[60] text-zinc-900 dark:text-white"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Now Outside Header for better rendering */}
      <div
        className={`fixed inset-0 z-[45] md:hidden bg-white dark:bg-zinc-950 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 p-8 pt-32 h-full w-full">
          <Link
            to="/"
            className="text-3xl font-black text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-4"
          >
            Home
          </Link>
          <Link
            to="/update-preferences"
            className="text-3xl font-black text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-4"
          >
            Preferences
          </Link>

          <div className="mt-auto flex flex-col gap-4 mb-10">
            <Link
              to="/login"
              className="w-full py-5 text-center font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 rounded-2xl"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="w-full py-5 text-center font-bold text-white bg-purple-600 rounded-2xl shadow-xl shadow-purple-500/40"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
