import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Heading from "../heading/index.js";
import Button from "../button/index.js";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <header>
        <Heading level={1}>Habit Tracker</Heading>
        <Heading level={3}>Keep up with the good ones!</Heading>
        <div>
          <Button
            variant="primary"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <main><Outlet/></main>
    </div>
  );
}

export default Layout;
