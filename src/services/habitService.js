const habitService = {
  createHabit: async (name, frequency, category) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:5000/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ name, frequency, category }),
      });
      if (!response.ok) throw new Error("Failed to create habit");
      return await response.json();
    } catch (error) {
      throw error.message;
    }
  },

  getHabits: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:5000/habits", {
        method: "GET", // Especificar o método explicitamente
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!response.ok) throw new Error("Failed to fetch habits");
      return await response.json();
    } catch (error) {
      throw error.message;
    }
  },

  getHabitStats: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:5000/habits/stats", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!response.ok) throw new Error("Failed to fetch stats");
      return await response.json();
    } catch (error) {
      throw error.message;
    }
  },

  markHabitAsCompleted: async (habitId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://127.0.0.1:5000/habits/${habitId}/complete`,
        {
          method: "POST",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to mark habit as completed");
      return await response.json();
    } catch (error) {
      throw error.message;
    }
  },
};

export default habitService;
