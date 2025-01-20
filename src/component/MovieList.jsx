import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };
    getMovies();
  }, []);

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
