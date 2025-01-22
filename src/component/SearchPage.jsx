import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../api";
import MovieCard from "./MovieCard";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then((results) => setSearchResults(results))
        .catch((error) => console.error("검색 중 오류 발생:", error));
    }
  }, [query]);

  return (
    <div className="search-results">
      <h2>"{query}" 검색 결과</h2>
      {searchResults.length > 0 ? (
        searchResults.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </div>
  );
};

export default SearchPage;
