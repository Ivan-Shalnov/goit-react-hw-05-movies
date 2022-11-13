import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.params = { api_key: process.env.REACT_APP_API_KEY };
export async function searchMovie({ query, page = 1 }) {
  const response = await axios.get(`/search/movie`, {
    params: { query, page },
  });
  return response.data;
}
