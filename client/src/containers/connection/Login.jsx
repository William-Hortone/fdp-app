import React from "react";
import { images } from "../../constants";
import "./connection.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="app__signIn">
        <div className="app__signIn-container">
          <div className="app__signIn-container-form">
            <form>
              <h1>Se connecter</h1>
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
                Se connecter
              </button>
              <h2>Vous n'avez pas de compte?</h2>

              <Link type="submit" to='/connection/signup' className="register-btn">
                S'inscrire maintenant
              </Link>
            </form>
          </div>
          <div className="app__signIn-container-img">
            <img src={images.machine9} alt="casque" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
