import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdatePreferences from "./pages/UpdatePreferences";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./AuthContext";
import Navbar from "./components/Navbar";

function App() {
  const { login } = useAuth();

  return (
    // Updated background: zinc-50 is a much better "light" background than zinc-100
    // Updated dark background: zinc-950 or 900 provides better contrast for cards
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />

      {/* max-w-7xl centers your content with the navbar logo */}
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/update-preferences"
            element={
              <PrivateRoute>
                <UpdatePreferences />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
