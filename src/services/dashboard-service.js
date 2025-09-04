import api from './api';

/**
 * Function of service for the dashboard route.
 * Encapsulates the API call to get the user's dashboard data.
 */

/**
 * Gets all the necessary data for the logged in user's dashboard.
 * @returns {Promise<object>} - API response with the dashboard data.
 */
export const getDashboardData = async () => {
  try {
    const response = await api.get('/dashboard');
    return response.data;
  } catch (error) {
    throw error;
  }
};
