import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            navigate('/page-1');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleLogin();
    };

    return (
        <div className="login-page">
            <div className="login-bg-pattern" />
            <div className="login-card">
                <div className="login-card__brand">
                    <span className="login-card__brand-mark">✦</span>
                    <span className="login-card__brand-name">HealthForm</span>
                </div>
                <h1 className="login-card__title">Sign in</h1>
                <p className="login-card__subtitle">Access the consultation system</p>
                <div className="login-card__fields">
                    <div className="field">
                        <label className="field__label" htmlFor="username">Username</label>
                        <input
                            id="username"
                            className="field__input"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoComplete="username"
                        />
                    </div>
                    <div className="field">
                        <label className="field__label" htmlFor="password">Password</label>
                        <input
                            id="password"
                            className="field__input"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoComplete="current-password"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="login-card__btn"
                    onClick={handleLogin}
                    disabled={!username || !password}
                    >
                        Sign in →
                </button>
            </div>
        </div>
    );
};

export default LoginPage;