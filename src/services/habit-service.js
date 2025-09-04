import api from './api.js';

/**
 * Functions of service for the routes related to habits.
 * The functions handle the calls to create, list and complete habits.
 */

/**
 * Creates a new habit for the logged in user.
 * @param {object} habitData - New habit data (name, frequency, category).
 * @returns {Promise<object>} - API response.
 */
export const createHabit = async (habitData) => {
  try {
    const response = await api.post('/habits', habitData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Gets the list of habits for the logged in user.
 * @param {number} page - Page number.
 * @param {number} limit - Limit of habits per page.
 * @returns {Promise<object>} - API response with the list of habits.
 */
export const getHabits = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/habits?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Gets the list of habits by category for the logged in user.
 * @param {string} category - Category to be filtered.
 * @param {number} page - Page number.
 * @param {number} limit - Limit of habits per page.
 * @returns {Promise<object>} - API response with the list of habits.
 */
export const getHabitsByCategory = async (category, page = 1, limit = 10) => {
  try {
    const response = await api.get(`/habits/category/${category}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Marks a habit as completed.
 * @param {string} habitId - ID of the habit to be completed.
 * @returns {Promise<object>} - API response.
 */
export const markHabitAsCompleted = async (habitId) => {
  try {
    const response = await api.post(`/habits/${habitId}/complete`);
    return response.data;
  } catch (error) {
    throw error;
  }
};