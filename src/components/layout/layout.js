import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./layout.css";
import Heading from "../heading/index.js";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <header className="header">
        <Heading level={1}>Habit Tracker</Heading>
        <div>
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main><Outlet/></main>
    </div>
  );
}

export default Layout;
