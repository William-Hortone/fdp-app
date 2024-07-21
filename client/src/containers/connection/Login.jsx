import React from "react";
import "./connection.css";
import description from "./../../constants/data";

const Login = () => {
  return (
    <>
      <div className="app__signIn">
        <div className="app__signIn-container">
          <div className="app__signIn-container-form">
            <h1>Login</h1>
            <form>
              {/* <div> */}
                <label>Email</label> 
                <br />
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Enter your email"
                />
              {/* </div> */}
              
                <label>Password</label>
                <br />{" "}
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
          <div className="app__signIn-container-img"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
