import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try{
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);//가져온 영화 목록을 컴포넌트 상태로 설정 
      }catch(error){
        setError("영화 목록을 불러오는 데 실패했습니다.")
      }
    };
    getMovies();
  }, []);

  if (error) return <div>에러: {error}</div>;
  if (movies.length === 0) return <div>로딩 중...</div>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          title={movie.title}
          vote_average={movie.vote_average}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default MovieList;
