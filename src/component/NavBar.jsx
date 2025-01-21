import React from 'react';
import "./NavBar.css"


const NavBar = () => {
  return (
    <div>
       <nav>
        <h1>Movie</h1>
        <input type="text" placeholder='제목을 입력하세요'/>
        <div className='button-container'>
        <button>로그인</button>
        <button>회원가입</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
