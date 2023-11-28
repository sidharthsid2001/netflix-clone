import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import NavBar from '../Components/NavBar/NavBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    console.log('Login button clicked');
  };

  return (
    <>
     <NavBar/>
    <div className="login-container">
      <div className="login-form">
        <h1>Sign In</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className='signin' to ='/' type="button" onClick={handleLogin}>
            Sign In
          </Link>
        </form>
        <p>
          New to Netflix? <Link to="/signup">Sign up now.</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
