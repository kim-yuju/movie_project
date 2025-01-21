import axios from "axios";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
});

export const fetchPopularMovies = async () => {
  try {
    const response = await api.get("/movie/popular", {
      params: {
        page: 10,
        adult: false,
        language: "ko-KR",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("인기 영화 데이터를 가져오는 데 실패했습니다:", error);
    throw error;
  }
};

export const fetchMovieDetail = async (id) => {
  try {
    const response = await api.get(`/movie/${id}`, {
      params: {
        page:10,
        adult: false,
        language: "ko-KR",
      },
    });
    return response.data;
  } catch (error) {
    console.error("영화 상세 정보를 가져오는 데 실패했습니다:", error);
    throw error;
  }
};
