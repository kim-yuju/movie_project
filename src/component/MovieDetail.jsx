import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../api";


const MovieDetail = () => {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const {id} = useParams()
  const base = "https://image.tmdb.org/t/p/w500";
  

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const data = await fetchMovieDetail(id);
        setMovieData(data);
      } catch (error) {
        setError("영화 정보를 불러오는 데 실패했습니다.");
      }
    };

    getMovieDetail();
  }, [id]);

  if (error) return <div>에러: {error}</div>;
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
