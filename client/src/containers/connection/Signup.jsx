import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./connection.css";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });

  //  Function onchange
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

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

            {/* Sing Up form */}
            <form>
              <h1>S'isncrire</h1>
              <label>Nom</label>
              <input
                type="text"
                className="input"
                name="name"
                value={inputs.username}
                placeholder="Entrer votre nom"
              />
              <label>Email</label>
              <input
                type="email"
                className="input"
                name="email"
                value={inputs.email}
                placeholder="Entrer votre email"
              />
              <label>Mot de passe</label>
              <input
                type="password"
                name="password"
                value={inputs.password}
                className="input"
                placeholder="Entrer votre mot de passe"
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
