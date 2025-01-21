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
        page: 1,
        include_adult: false,
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
        page:1,
        include_adult: false,
        language: "ko-KR",
      },
    });
    return response.data;
  } catch (error) {
    console.error("영화 상세 정보를 가져오는 데 실패했습니다:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get("/search/movie", {
      params: {
        query: query,//데이터베이스나 API에 정보를 요청할 때 사용하는 검색어나 질의문
        page: 1,
        include_adult: false,
        language: "ko-KR",
        region: "KR"
      },
    });

    const filteredResults = response.data.results.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return filteredResults
  } catch (error) {
    console.error("영화 검색에 실패했습니다:", error);
    throw error;
  }
};