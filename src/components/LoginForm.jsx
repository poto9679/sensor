// LoginForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //useHistory -> useNavigate로 변경
import './LoginForm.css'; // LoginForm 전용 CSS 파일

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin'){
        navigate('/main'); // '/main' 로 이동
        } else{
          alert('Invalid credentials');
        }
        // 로그인 처리 로직
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-field">
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
            </div>
            <div className="form-field">
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <button type="submit" className="login-button">Login</button>
        </form>
    );
}

export default LoginForm;
