import React from "react";
import { images } from "../../constants";
import "./connection.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="app__signIn">
        <div className="app__signIn-container">
          <div className="app__signIn-container-form">
            <form>
              <h1>S'isncrire</h1>
              <label>Nom</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Enter your name"
              />
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
                S'inscrire
              </button>
              <h2>Vous avez deja un compte?</h2>

              <Link to='/connection/login' type="submit" className="register-btn">
                Se connecter
              </Link>
            </form>
          </div>
          <div className="app__signIn-container-img">
            <img src={images.machine10} alt="casque" />
          </div>
        </div>
      </div>
    </>
  );
};



export default Signup