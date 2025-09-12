import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Auth pages
import SignUp from "./pages/auth/sign-up/index.js";
import SignIn from "./pages/auth/sign-in/index.js";

// Main app pages
import Home from "./pages/home/index.js";
import Habit from "./pages/habit/index.js";
import Habits from "./pages/habits/index.js";
import MoodStat from "./pages/mood-stat/index.js";
import Profile from "./pages/profile/index.js";
import Report from "./pages/report/index.js";

// Bases layout
import MainLayout from "./components/layout/main-layout/index.js";
import AuthLayout from "./components/layout/auth-layout/index.js";

function App() {
  return (
    <Router>
      <ToastContainer autoClose={3000} />

      <Routes>
        <Route element={<AuthLayout />}>
          {/* Default route → Redirects to Sign In page */}
          <Route index path="/" element={<SignUp />} />

          {/* Sign Up page for creating a new account */}
          <Route path="/sign-up" element={<SignUp />} />

          {/* Sign In page for logging into an existing account */}
          <Route path="/sign-in" element={<SignIn />} />
        </Route>

        {/* Layout wrapper (navbar, sidebar, header) for authenticated pages */}
        <Route element={<MainLayout />}>
          {/* Main home with quick stats and progress overview */}
          <Route path="/home" element={<Home />} />

          {/* Habits page → list of habits, mark as done, edit or delete */}
          <Route path="/habits" element={<Habits />} />

          {/* Reports page → analytics, charts, and history of habits */}
          <Route path="/report" element={<Report />} />

          {/* Mood statistics page → track and visualize mood over time */}
          <Route path="/mood-stat" element={<MoodStat />} />

          {/* Habit management page → create, edit, or delete a specific habit */}
          <Route path="/habit" element={<Habit />} />

          {/* User profile page → update personal info, preferences, password, etc. */}
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
