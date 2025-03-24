// src/pages/Auth.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Auth.css';

function LoginOrRegister() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleAuth = async () => {
        try {
            if (isLogin) {
                const res = await axios.post('/api/users/login', { 
                    regNo: email, // Changed to use email for login instead of regNo
                    password 
                });
                alert(res.data.message);
            } else {
                if (password !== confirmPassword) {
                    alert("Passwords don't match");
                    return;
                }
                const res = await axios.post('/api/users/register', { 
                    name, 
                    email,
                    password 
                    // regNo removed from registration data
                });
                alert(res.data.message);
            }
        } catch (error) {
            alert(error.response?.data?.message || "An error occurred");
        }
    };
    
    return (
        <div className="auth-page">
            {/* Navbar removed as requested */}
            
            <main className="auth-main">
                <div className="auth-container">
                    <div className="auth-logo-container">
                        <img src="/vit-logo.png" alt="VIT Vellore Logo" />
                    </div>
                    
                    <div className="auth-title">
                        <h1>VIT Vellore Universityyy</h1>
                        <p>Student Portal Authentication</p>
                    </div>
                    
                    <div className="auth-tabs">
                        <div 
                            className={`auth-tab ${isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </div>
                        <div 
                            className={`auth-tab ${!isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Register
                        </div>
                    </div>
                    
                    <div className="auth-form-container">
                        <div className="auth-form">
                            {isLogin ? (
                                <>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input 
                                            type="password" 
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    
                                    <div className="forgot-password">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                    
                                    <button className="login-button" onClick={handleAuth}>
                                        Login
                                    </button>
                                    
                                    <div className="terms-text">
                                        By logging in, you agree to VIT's terms and conditions
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="Enter your full name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    
                                    {/* Registration Number field removed as requested */}
                                    
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input 
                                            type="password" 
                                            placeholder="Create a password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input 
                                            type="password" 
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    
                                    <button className="login-button" onClick={handleAuth}>
                                        Register
                                    </button>
                                    
                                    <div className="terms-text">
                                        By registering, you agree to VIT's terms and conditions
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LoginOrRegister;