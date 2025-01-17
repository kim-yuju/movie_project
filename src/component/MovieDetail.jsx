import React, { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";
import "./MovieDetail.css";

const MovieDetail = () => {
  const movieData = movieDetailData;
  const base = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-detail-container">
      <div className="movie-poster">
        <img src={`${base}${movieData.poster_path}`} alt="poster" />
      </div>
      <div className="movie-info">
        <div className="title">{movieData.title}</div>
        <div className="vote">{movieData.vote_average}</div>
        <div className="genre">
          {movieData.genres.map((genre) => genre.name).join(", ")}
        </div>
        <div className="overview">{movieData.overview}</div>
      </div>
    </div>
  );
};

export default MovieDetail;
