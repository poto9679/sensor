
import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import './App.css'; // CSS 파일 임포트

function AppWithBackground(){
  const location = useLocation();

  const isLogin = location.pathname === '/';
  const containerClass = isLogin ? 'login-background' : 'main-background';

  return (
    <div className={`app-container ${containerClass}`}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  )
}

function App() {
    return (
      <Router>
        <AppWithBackground />
      </Router>
    );
}

export default App;
