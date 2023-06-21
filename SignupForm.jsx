import React, { useState } from 'react';
import './SignupForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === '') {
      alert('Enter Username');
    } else if (email === '') {
      alert('Enter Email');
    } else if (password === '') {
      alert('Enter password');
    } else {
      try {
        const data = {
          username: username,
          email: email,
          password: password,
        };
        const res = await axios.post('http://localhost:8080/connect/sign', data);
        alert(res.data);
        navigate('/login');
      } catch (error) {
        console.error('Error Signing up:', error);
      }
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
          placeholder="username"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
           placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
           placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
     
    </div>
  );
};

export default SignupForm;
