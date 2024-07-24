import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const queryPython = async (input) => {
  try {
    const response = await axios.post(`https:/flask-server-server.vercel.app/query`, { query: input });
    return response.data;
  } catch (error) {
    console.error('Error querying Python backend:', error);
    throw error;
  }
};
