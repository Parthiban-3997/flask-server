const axios = require('axios');

const queryPython = async (input) => {
  const backendUrl = process.env.BACKEND_URL || 'https://flask-python-template.vercel.app/api/query'; // Update this URL

  try {
    const response = await axios.post(backendUrl, { query: input });
    return response.data;
  } catch (error) {
    console.error('Error querying Python backend:', error);
    throw error;
  }
};

module.exports = { queryPython };
