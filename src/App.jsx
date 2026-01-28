import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdatePreferences from "./pages/UpdatePreferences"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Newsly 📰</h1>
      <nav className="mb-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register" className="mr-4">Register</Link>
        <Link to="/update-preferences">Update Preferences</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update-preferences" element={<UpdatePreferences />} />
      </Routes>

    </div>
  );
}

export default App;
