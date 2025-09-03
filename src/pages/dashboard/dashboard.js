import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import habitService from "../../services/habit-service.js";
import { toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";
import "./dashboard.css";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHabit, setNewHabit] = useState({ name: "", frequency: "daily", category: "Uncategorized" });
  const navigate = useNavigate();

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/dashboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch dashboard data");
      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      if (error?.message?.includes("401") || error?.message?.includes("403")) {
        toast.error("Please log in to view dashboard");
        navigate("/login");
      } else {
        toast.error("Failed to fetch dashboard data");
      }
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleCreateHabit = async (e) => {
    e.preventDefault();
    try {
      await habitService.createHabit(newHabit.name, newHabit.frequency, newHabit.category);
      setNewHabit({ name: "", frequency: "daily", category: "Uncategorized" });
      setIsModalOpen(false);
      fetchDashboardData();
      toast.success("Habit created successfully!");
    } catch (error) {
      toast.error("Failed to create habit");
    }
  };

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div className={`dashboard-container ${darkMode ? "dark-mode" : ""}`}>
      <header className="header">
        <h1>Dashboard</h1>
        <div>
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button className="logout-btn" onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}>
            Logout
          </button>
        </div>
      </header>

      <section className="overview">
        <h2>Overview</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <p>Total Habits</p>
            <span>{dashboardData.total_habits}</span>
          </div>
          <div className="stat-card">
            <p>Completion Rate</p>
            <span>{dashboardData.completion_rate.toFixed(1)}%</span>
          </div>
          <div className="stat-card">
            <p>Total Completions</p>
            <span>{dashboardData.total_completions}</span>
          </div>
          <div className="stat-card">
            <p>Longest Streak</p>
            <span>{dashboardData.longest_streak} days</span>
          </div>
        </div>
      </section>

      <section className="pending-habits">
        <h2>Pending Today</h2>
        {dashboardData.pending_habits.length === 0 ? (
          <p>All caught up! Great job!</p>
        ) : (
          <ul>
            {dashboardData.pending_habits.map((habit, index) => (
              <li key={index}>{habit.name} ({habit.category})</li>
            ))}
          </ul>
        )}
      </section>

      <section className="performance">
        <h2>Your Performance</h2>
        <div className="performance-grid">
          {dashboardData.habits.map((habit) => (
            <div key={habit._id} className="habit-card">
              <p>{habit.name} ({habit.category})</p>
              <div className="stars">
                {"★".repeat(habit.stars) + "☆".repeat(5 - habit.stars)}
              </div>
            </div>
          ))}
        </div>
        <p>Best Habit: <span>{dashboardData.best_habit?.name} ({dashboardData.best_habit?.stars}★)</span></p>
      </section>

      <section className="charts">
        <h2>Progress Insights</h2>
        <div className="chart-container">
          <h3>Completions by Habit</h3>
          <BarChart width={600} height={300} data={dashboardData.habits}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed_dates.length" fill="var(--green-primary)" name="Completions" />
          </BarChart>
        </div>
        <div className="chart-container">
          <h3>Weekly Progress</h3>
          <LineChart width={600} height={300} data={dashboardData.weekly_progress.map((val, idx) => ({ day: idx, completions: val }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="completions" stroke="var(--purple-primary)" />
          </LineChart>
        </div>
      </section>

      <section className="insights">
        <h2>More Insights</h2>
        <p>Avg. Completion Time: <span>{dashboardData.avg_completion_time.toFixed(1)} habits/day</span></p>
        <p>Top Category: <span>{Object.entries(dashboardData.category_performance).reduce((a, b) => a[1] > b[1] ? a : b)[0]}</span></p>
        <p>Suggestion: Focus on <span>{dashboardData.suggested_habit}</span></p>
      </section>

      <button className="add-habit-btn" onClick={() => setIsModalOpen(true)}>Add New Habit</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create a New Habit</h3>
            <form onSubmit={handleCreateHabit}>
              <input
                type="text"
                placeholder="Habit Name"
                value={newHabit.name}
                onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                required
              />
              <select
                value={newHabit.frequency}
                onChange={(e) => setNewHabit({ ...newHabit, frequency: e.target.value })}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
              <select
                value={newHabit.category}
                onChange={(e) => setNewHabit({ ...newHabit, category: e.target.value })}
              >
                <option value="Uncategorized">Uncategorized</option>
                <option value="Health">Health</option>
                <option value="Work">Work</option>
                <option value="Leisure">Leisure</option>
              </select>
              <div className="modal-buttons">
                <button type="submit" className="create-btn">Create</button>
                <button type="button" className="cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;