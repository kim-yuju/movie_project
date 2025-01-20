import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        page: 1,
        adult : false
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('인기 영화 데이터를 가져오는 데 실패했습니다:', error);
    return [];
  }
};
