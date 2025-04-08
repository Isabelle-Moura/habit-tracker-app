const habitService = {
  createHabit: async (name, frequency) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:5000/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ name, frequency }),
      });
      if (!response.ok) throw new Error("Failed to create habit");
      return await response.json();
    } catch (error) {
      throw error.message;
    }
  },

/*
  PAREI AQUI: a função GET está dando UNATHORIZED, mesmo com o token correto.
*/

  getHabits: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:5000/habits", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        mode: "no-cors",
      });
      if (!response.ok) throw new Error("Failed to fetch habits");
      return await response.json();
    } catch (error) {
      throw error.message;
    }
  },

  markHabitAsCompleted: async (habitId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://127.0.0.1:5000/habits/${habitId}/complete`, {
        method: "POST",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!response.ok) throw new Error("Failed to mark habit as completed");
      return await response.json();
    } catch (error) {
      throw error.message;
    }
  },
};

export default habitService;