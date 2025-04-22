import React from 'react';
import logImg from '../assets/log.svg';
import registerImg from '../assets/register.svg';
import styles from './Panel.module.css';


function Panel({ type, toggleSignUpMode, isSignUpMode }) {
  return (
    <div className={`panel ${type}-panel`}>
      <div className="content">
        {type === 'left' ? (
          <>
            <h3>New here?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign up
            </button>
          </>
        ) : (
          <>
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign in
            </button>
          </>
        )}
      </div>
      <img
        src={type === 'left' ? logImg : registerImg}
        className="image"
        alt=""
      />
    </div>
  );
}

export default Panel;
