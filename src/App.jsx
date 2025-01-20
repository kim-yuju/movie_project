import React, { useEffect, useState } from "react";
import MovieCard from "./component/MovieCard";
import MovieDetail from "./component/MovieDetail";
import { Route, Routes } from "react-router";
import Layout from "./component/Layout";
import "./App.scss";
import { fetchPopularMovies } from "./api";
import MovieList from "./component/MovieList";

function App() {
  const [movies,setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };
    getMovies();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MovieList/>}/>
          <Route path='/details/:id' element={<MovieDetail />} />
        </Route>
      </Routes>
    </div>
  );
}



export default App;
