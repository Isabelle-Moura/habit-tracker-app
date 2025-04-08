import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import habitService from "../services/habitService.js";
import { toast } from "react-toastify";
import "./habits.css"; // Importe o CSS que vamos criar

function Habits() {
  const [habits, setHabits] = useState([]);
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("daily");
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
      await habitService.createHabit(name, frequency);
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

  return (
    <div className="habits-container">
      <header className="header">
        <h1>Habit Tracker</h1>
        <button className="logout-btn" onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}>
          Logout
        </button>
      </header>

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
          </div>
          <button type="submit" className="create-btn">Create Habit</button>
        </form>
      </section>

      <section className="habits-list">
        <h2>Your Habits</h2>
        {habits.length === 0 ? (
          <p className="no-habits">No habits yet. Start by adding one above!</p>
        ) : (
          <ul>
            {habits.map((habit) => (
              <li key={habit._id} className="habit-item">
                <span className="habit-info">
                  {habit.name} <span className="frequency">({habit.frequency})</span>
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