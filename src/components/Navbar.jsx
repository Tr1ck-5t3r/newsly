import { Link } from "react-router-dom";

function Navbar() {
  // Common styles for links to avoid repetition
  const linkStyles =
    "px-3 py-1 rounded-md font-medium transition-colors duration-200 text-purple-700 hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md shadow-sm p-4 flex flex-col md:flex-row md:items-center md:justify-between transition-all duration-300 border-b border-gray-100 dark:border-zinc-700">
      {/* Logo */}
      <h1 className="text-3xl font-bold mb-3 md:mb-0 text-purple-600 dark:text-purple-400">
        Newsly 📰
      </h1>

      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row md:items-center gap-3">
        <Link to="/" className={linkStyles}>Home</Link>
        <Link to="/login" className={linkStyles}>Login</Link>
        <Link to="/register" className={linkStyles}>Register</Link>
        <Link to="/update-preferences" className={linkStyles}>Update Preferences</Link>

      </nav>
    </header>
  );
}

export default Navbar;