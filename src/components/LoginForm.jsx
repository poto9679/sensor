// LoginForm.jsx

import React, { useState } from 'react';
import './LoginForm.css'; // LoginForm 전용 CSS 파일

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // 로그인 처리 로직
    };

    return (
        <div className="login-form">
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
        </div>
    );
}

export default LoginForm;
