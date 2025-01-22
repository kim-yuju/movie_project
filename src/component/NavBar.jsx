import { useEffect, useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import useDebounce from "../assets/useDebounce";

const NavBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      navigate(`/search?query=${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm]);

  const handelSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    navigate("/");
    setSearch("");
  };

  const handleLoginClick = ()=>{
    navigate('/login')
  }

  const handleJoinClick =()=>{
    navigate('/join')
  }

  return (
    <nav>
      <h1 onClick={handleClick}>Movie</h1>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={search}
        onChange={handelSearchChange}
      />
      <div className="button-container">
        <button onClick={handleLoginClick}>로그인</button>
        <button onClick={handleJoinClick}>회원가입</button>
      </div>
    </nav>
  );
};

export default NavBar;
