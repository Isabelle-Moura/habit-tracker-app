import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import habitService from "../services/habitService.js";
import { toast } from "react-toastify";

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
    <div className="App">
      <h1>Habit Tracker</h1>
      <button onClick={() => {
        localStorage.removeItem("token");
        navigate("/login");
      }}>Logout</button>

      <form onSubmit={handleCreateHabit}>
        <input
          type="text"
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
        <button type="submit">Create Habit</button>
      </form>

      <h2>Your Habits</h2>
      {habits.length === 0 ? (
        <p>No habits yet. Create one above!</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <li key={habit._id}>
              {habit.name} ({habit.frequency}) - Completed: {habit.completed_dates.length} times
              <button onClick={() => handleMarkAsCompleted(habit._id)}>
                Mark as Completed
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Habits;