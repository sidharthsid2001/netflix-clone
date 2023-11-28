import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signup button clicked');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Link className='signup-button'  onClick={handleSignup}>
            Sign Up
          </Link>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign in now.</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
