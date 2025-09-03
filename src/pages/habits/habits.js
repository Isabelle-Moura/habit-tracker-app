import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import habitService from "../../services/habit-service.js";
import { toast } from "react-toastify";
import "./habits.css";

function Habits() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [category, setCategory] = useState("Uncategorized");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const fetchHabits = async () => {
    try {
      const habitsData = await habitService.getHabits();
      setHabits(habitsData);
    } catch (error) {
      if (error?.message?.includes("401") || error?.message?.includes("403")) {
        toast.error("Please log in to view habits");
        navigate("/login");
      } else {
        toast.error("Failed to fetch habits");
      }
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const handleCreateHabit = async (e) => {
    e.preventDefault();
    try {
      await habitService.createHabit(name, frequency, category);
      setName("");
      fetchHabits();
      toast.success("Habit created successfully!");
    } catch (error) {
      toast.error("Failed to create habit");
    }
  };

  const handleMarkAsCompleted = async (habitId) => {
    try {
      await habitService.markHabitAsCompleted(habitId);
      fetchHabits();
      toast.success("Habit marked as completed!");
    } catch (error) {
      toast.error("Failed to mark habit as completed");
    }
  };

  // Sistema de badges
  const getBadges = () => {
    const badges = [];
    const totalCompletions = habits.reduce((sum, habit) => sum + habit.completed_dates.length, 0);
    
    if (totalCompletions >= 5) badges.push("Beginner 🏅");
    if (totalCompletions >= 20) badges.push("Habit Master ⭐");
    if (habits.some(habit => habit.completed_dates.length >= 7)) badges.push("7-Day Streak 🔥");
    
    return badges;
  };

  const badges = getBadges();

  return (
    <div className={`habits-container ${darkMode ? "dark-mode" : ""}`}>
      <header className="header">
        <h1>Habit Tracker</h1>
        <div>
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <section className="badges-section">
        <h3>Your Achievements</h3>
        {badges.length > 0 ? (
          <ul className="badges-list">
            {badges.map((badge, index) => (
              <li key={index}>{badge}</li>
            ))}
          </ul>
        ) : (
          <p>No badges yet. Keep completing habits!</p>
        )}
      </section>

      <section className="create-habit">
        <form onSubmit={handleCreateHabit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Add a new habit..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Uncategorized">Uncategorized</option>
              <option value="Health">Health</option>
              <option value="Work">Work</option>
              <option value="Leisure">Leisure</option>
            </select>
          </div>
          <button type="submit" className="create-btn">Create Habit</button>
        </form>
      </section>

      <section className="habits-list">
        <h2>Your Habits</h2>
        {habits.length === 0 ? (
          <p className="no-habits">No habits yet. Create one above!</p>
        ) : (
          <ul>
            {habits.map((habit) => (
              <li key={habit._id} className="habit-item">
                <span className="habit-info">
                  {habit.name} <span className="frequency">({habit.frequency})</span>
                  <span className="category">[ {habit.category} ]</span>
                  <span className="completed-count">
                    - Completed: {habit.completed_dates.length} times
                  </span>
                </span>
                <button
                  onClick={() => handleMarkAsCompleted(habit._id)}
                  className="complete-btn"
                >
                  Mark Done
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Habits;