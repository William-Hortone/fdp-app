import React from "react";
import { images } from "../../constants";
import "./connection.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Signup = () => {

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="app__signIn">
        <div className="app__signIn-container">
          <div className="app__signIn-container-form">
         
              <div className="go-back-btn" onClick={goBack}>
                <FaArrowLeft color="black" size={17} /> Retourer
              </div>
        
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

              <Link
                to="/connection/login"
                type="submit"
                className="register-btn"
              >
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

export default Signup;
