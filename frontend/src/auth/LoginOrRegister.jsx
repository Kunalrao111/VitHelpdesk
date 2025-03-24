import React, { useState } from "react";
import axios from "axios";
import "../styles/Auth.css"

function LoginOrRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuth = async () => {
    if (isLogin) {
      const res = await axios.post("/api/users/login", { email, password });
      alert(res.data.message);
    } else {
      const res = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      alert(res.data.message);
    }
  };

  return (
    <div className="auth-container">
     

     
      <div className="auth-card">
        <div className="auth-title">
          <h2>VIT Vellore University</h2>
          <p>Student Portal Authentication</p>
        </div>

        {/* Login/Register Toggle */}
        <div className="auth-tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="auth-button" onClick={handleAuth}>
            {isLogin ? "Login" : "Register"}
          </button>

          {isLogin && <p className="forgot-password">Forgot Password?</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginOrRegister;
