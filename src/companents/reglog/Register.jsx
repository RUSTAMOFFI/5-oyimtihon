import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sass/login.scss";
const Register = () => {
  const naviget = useNavigate();
  function nav() {
    naviget("/login");
  }
  return (
    <div className="fors">
      <form id="form">
        <h1>Register</h1>
        
        <div className="inp">
          <label htmlFor="name">Your name</label>
          <input type="email" id="name" />

          <label htmlFor="email">Your email</label>
          <input type="email" id="email" />

          <label htmlFor="password">Your password</label>
          <input type="password" id="password" />
          <label htmlFor="confirm">Confirm password</label>
          <input type="password" id="confirm" />
        </div>

        <button onClick={nav}>Login</button>
        <li>
          <p>Already have an account? </p>
          <Link to="/login">Login</Link>
        </li>
      </form>
    </div>
  );
};

export default Register;
