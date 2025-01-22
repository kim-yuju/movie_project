import React from "react";
import MovieDetail from "./component/MovieDetail";
import { Route, Routes } from "react-router";
import Layout from "./component/Layout";
import "./App.scss";
import MovieList from "./component/MovieList";
import SearchPage from "./component/SearchPage";
import Login from "./component/Login";
import Join from "./component/Join";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MovieList />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/join" element={<Join/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
