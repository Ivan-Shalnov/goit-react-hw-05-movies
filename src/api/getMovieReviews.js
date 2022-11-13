import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.params = { api_key: process.env.REACT_APP_API_KEY };
export async function getMovieReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
}
