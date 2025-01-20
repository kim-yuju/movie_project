import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      params: {
        page: 1,
        adult : false,
      }
    });
    return response.data.results.filter(movie => !movie.adult);
  } catch (error) {
    console.error('인기 영화 데이터를 가져오는 데 실패했습니다:', error);
    throw error;
  }
};
