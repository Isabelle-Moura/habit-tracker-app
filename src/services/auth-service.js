import api from './api';

/**
 * Functions of service for the authentication routes (register and login).
 * Each function encapsulates the corresponding API call.
 */

/**
 * Registers a new user.
 * @param {object} userData - User data (username, email, password).
 * @returns {Promise<object>} - API response.
 */
export const register = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Performs the login of the user.
 * @param {object} credentials - User credentials (email, password).
 * @returns {Promise<object>} - API response containing the JWT token.
 */
export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};