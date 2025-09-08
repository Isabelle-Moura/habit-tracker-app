import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/auth/register/index.js";
import Login from "./pages/auth/login/index.js";
import Habits from "./pages/habits/index.js";
import Dashboard from "./pages/dashboard/index.js";
import Layout from "./components/layout/index.js";

function App() {
  return (
    <Router>
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/habits" element={<Habits />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
