import { useEffect, useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import useDebounce from "../assets/useDebounce";
import { searchMovies } from "../api";
import MovieCard from "./MovieCard";

const NavBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState(""); //입력에 즉각 반응하기 위해
  const [searchResults,setSearchResults] = useState([])
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {//0이 아닌값으로 truthy값 들어간다
      searchMovies(debouncedSearchTerm)
      .then((results) => setSearchResults(results))
      .catch((error) => console.error("검색 중 오류 발생:", error));
    }else{
      setSearchResults([])
    }
  }, [debouncedSearchTerm]);
  

  const handelSearchChange = (event) => {
    //이벤트핸들러 함수 입력 필드의 값이 변경될때마다 호출됨
    setSearch(event.target.value); //현재 입력 필드에 입력된 텍스트 값.search 상태를 새 값으로 업데이트
  };

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <nav>
        <h1 onClick={handleClick}>Movie</h1>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={search} //즉각적인 상태 동기화
          onChange={handelSearchChange} //입력 필드의 값이 변경될 때마다 발생하는 이벤트
        />
        <div className="button-container">
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </nav>
      <div className="search-results">
        {searchResults.length >0 ? 
        (searchResults.map((movie)=>(
          <MovieCard 
          key={movie.id} 
          id={movie.id}
          vote_average={movie.vote_average}
          poster_path={movie.poster_path}
          title={movie.title}
          />
        ))
      ) : search ? (
        <div>검색 결과가 없습니다.</div>
      ) : null}
      </div>
    </div>
  );
};

export default NavBar;
