import React from "react";
import { images } from "../../constants";
import "./connection.css";

const Login = () => {
  return (
    <>
      <div className="app__signIn">
        <div className="app__signIn-container">
          <div className="app__signIn-container-form">
            <form>
              <h1>S'identifier</h1>
              <label>Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Enter your email"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your password"
              />
              <button type="submit" className="login-btn">
                Login
              </button>
              <h2>Don't have an account?</h2>

              <button type="submit" className="register-btn">
                Register Now
              </button>
            </form>
          </div>
          <div className="app__signIn-container-img">
            <img src={images.casque1} alt="casque" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
