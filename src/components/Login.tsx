import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineHome } from "react-icons/ai";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect to /admin if already logged in
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const token = localStorage.getItem("token");
    if (isAdmin === "true" && token) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("token", data.token);
        navigate("/admin");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Home Icon */}
      <button
        className="absolute top-6 left-6 text-3xl text-green-600 hover:text-green-800 transition"
        onClick={() => navigate("/")}
        aria-label="Go to Home"
        type="button"
      >
        <AiOutlineHome />
      </button>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Admin Login
        </h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div className="mb-4 relative">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-xl text-gray-500 hover:text-green-600 focus:outline-none"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;