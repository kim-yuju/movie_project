import React from "react";
import MovieCard from "./component/MovieCard";
import movieListData from "./data/movieListData.json";
import MovieDetail from "./component/MovieDetail";
import { Route, Routes } from "react-router";
import Layout from "./component/Layout";
import "./App.scss";

function App() {
  const movies = movieListData.results;

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    poster_path={movie.poster_path}
                  />
                ))}
              </>
            }
          />
          <Route path="/details" element={<MovieDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
