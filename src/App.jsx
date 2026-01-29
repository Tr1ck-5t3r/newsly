import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdatePreferences from "./pages/UpdatePreferences"
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./AuthContext";
import Navbar from "./components/Navbar";

function App() {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-800 transition-colors duration-300">
      <Navbar />
      <main className="p-4">
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
