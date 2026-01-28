import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Function to register a new user
export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Function to update user preferences
export const updateUserPreferences = async (token, preferences) => {
  try {
    const response = await axios.put(
      `${API_URL}/api/preferences`,
      { preferences },
      {
        headers: {
          'x-auth-token': token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating preferences:', error);
    throw error;
  }
};

// Function to fetch articles
export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/articles/fetch-articles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};