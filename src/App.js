import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/register.js";
import Login from "./pages/login.js";
import Habits from "./pages/habits.js";
import "./App.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/habits" element={<Habits />} />
        <Route index path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
