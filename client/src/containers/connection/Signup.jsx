import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./connection.css";
import axios from 'axios'

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
    console.log('the vallue is ', value)
  };

  // Function to signUp
const handleSignUp =async () =>{

  try {
  const response = await  axios.post("http://localhost:5003/register", inputs)
    console.log('the response is ', response)  

  } catch (error) {
    console.log(error)
  }

}

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="app__signIn">
        <div className="app__signIn-container">
          <div className="app__signIn-container-form">
            <div className="go-back-btn" onClick={goBack}>
              <FaArrowLeft color="black" size={17} /> Retourner
            </div>

            {/* Sing Up form */}
            <form onSubmit={handleSignUp}>
              <h1>S'isncrire</h1>
              <label>Nom</label>
              <input
                type="text"
                className="input"
                name="username"
                onChange={handleOnChange}
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
                onChange={handleOnChange}
              />
              <label>Mot de passe</label>
              <input
                type="password"
                name="password"
                value={inputs.password}
                className="input"
                placeholder="Entrer votre mot de passe"
                onChange={handleOnChange}
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
