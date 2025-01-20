import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import axios from 'axios';


const MovieDetail = () => {
  const [movieData, setMovieData] = useState(null);
  const {id} = useParams()
  const base = "https://image.tmdb.org/t/p/w500";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&adult=false`
        );
        setMovieData(response.data);
      } catch (error) {
        console.error("영화 상세 정보를 가져오는데 실패했습니다:", error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movieData) return <div>로딩 중...</div>;


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
