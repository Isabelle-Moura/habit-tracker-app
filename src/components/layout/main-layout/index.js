import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Heading from "../../ui/heading/index.js";
import Button from "../../ui/button/index.js";

function MainLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
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

export default MainLayout;
