import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config.js';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <button type="button" className="social-icon" aria-label="Sign up with Facebook"><i className="fab fa-facebook-f"></i></button>
        <button type="button" className="social-icon" aria-label="Sign up with Twitter"><i className="fab fa-twitter"></i></button>
        <button type="button" className="social-icon" aria-label="Sign up with Google"><i className="fab fa-google"></i></button>
        <button type="button" className="social-icon" aria-label="Sign up with LinkedIn"><i className="fab fa-linkedin-in"></i></button>
      </div>
    </form>
  );
}

export default SignUp;
