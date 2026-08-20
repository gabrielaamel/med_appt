import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    
    // Validación básica de campos vacíos
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Guardamos los datos de sesión y simulamos el login exitoso
    sessionStorage.setItem("email", email);
    alert('Login Successful!');
    navigate('/');
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="login-grid">
        <div className="login-text">
          <h1>Login</h1>
        </div>
        <div className="login-text1" style={{ textAlign: 'left' }}>
          New to StayHealthy? <Link to="/Sign_Up" style={{ color: '#2190FF' }}>Sign Up</Link>
        </div>
        <div className="login-form">
          <form onSubmit={login}>
            {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="form-control" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                className="form-control" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;