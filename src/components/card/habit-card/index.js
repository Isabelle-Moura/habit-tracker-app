import React from "react";

function HabitCard({ habit, onMarkAsCompleted }) {
  return (
    <li className="habit-item">
      <span className="habit-info">
        {habit.name}{" "}
        <span className="frequency">({habit.frequency})</span>
        <span className="category">[ {habit.category} ]</span>
        <span className="completed-count">
          - Completed: {habit.completed_dates.length} times
        </span>
      </span>
      <button
        onClick={() => onMarkAsCompleted(habit._id)}
        className="complete-btn"
      >
        Mark Done
      </button>
    </li>
  );
}

export default HabitCard;
