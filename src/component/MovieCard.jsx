import React from "react";
import "./MovieCard.css"

const MovieCard = ({ vote_average, poster_path, title }) => {
  const base = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie-card">
      <img src={`${base}${poster_path}`} alt="poster" className="movie-poster"/>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-rating">{vote_average}</p>
    </div>
  );
};

export default MovieCard;
