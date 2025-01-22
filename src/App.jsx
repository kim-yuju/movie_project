import React from "react";
import MovieDetail from "./component/MovieDetail";
import { Route, Routes } from "react-router";
import Layout from "./component/Layout";
import "./App.scss";
import MovieList from "./component/MovieList";
import SearchPage from "./component/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MovieList />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
