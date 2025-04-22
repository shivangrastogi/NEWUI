import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config.js';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSignIn} className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <button type="button" className="social-icon" aria-label="Sign in with Facebook"><i className="fab fa-facebook-f"></i></button>
        <button type="button" className="social-icon" aria-label="Sign in with Twitter"><i className="fab fa-twitter"></i></button>
        <button type="button" className="social-icon" aria-label="Sign in with Google"><i className="fab fa-google"></i></button>
        <button type="button" className="social-icon" aria-label="Sign in with LinkedIn"><i className="fab fa-linkedin-in"></i></button>
      </div>
    </form>
  );
}

export default SignIn;
