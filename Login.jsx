import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/connect/login/"+ email + '/'+ password);
      alert(response.data);
      if (response.data === "Success") {
        navigate("/Navbar");
      }
    } catch (error) {
      alert("Invalid Password");
    }
  };

  const handleSignupForm = () => {
    navigate("/Navbar");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        {/* <div className="login-links">
          <a href="#">Forgot Password?</a>
          <a href="#" onClick={handleSignupForm}>
            Create Account
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
