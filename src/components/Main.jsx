import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return(
    <div className="main-container">
      <div className="header-box">
        <div className="title-box">
          <h1>대시보드 제목</h1>
        </div>
        <div className="time-box">
          <p>{currentTime}</p>
        </div>
      </div>
      {/*여기에 다른 컴포넌트나 내용추가 가능*/}
    </div>
  )
}


export default Main;