import React from "react";
import "./MovieCard.css"
import { useNavigate } from "react-router-dom";

const MovieCard = ({id, vote_average, poster_path, title }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/details/${id}`)
  }

  const base = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={`${base}${poster_path}`} alt="poster" className="movie-poster"/>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-rating">{vote_average.toFixed(1)}</p>
    </div>
  );
};

export default MovieCard;
