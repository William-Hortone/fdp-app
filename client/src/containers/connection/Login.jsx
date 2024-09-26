import React, {useContext, useState } from "react";
import { images } from "../../constants";
import "./connection.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../hooks/context/UserContext";


const Login = () => {
  const [inputs, setInputs] = useState({
    password: "",
    email: "",
  });

  const {handleLogin} = useContext(UserContext)


    //  Function onchange
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));;
    };

    const handleSignIn = (e) => {
      e.preventDefault()
      handleLogin(inputs)
    }
  return (
    <>
      <div className="app__signIn">
        <div className="app__signIn-container">
          <div className="app__signIn-container-form">

            {/* Login form */}
            <form onSubmit={handleSignIn}>
              <h1>Se connecter</h1>
              <label>Email</label>
              <input
                type="email"
                className="input"
                name="email"
                value={inputs.email}
                onChange={handleOnChange}
                required
                placeholder="Entrer votre email"
              />
              <label>Mot de passe</label>
              <input
                type="password"
                name="password"
                onChange={handleOnChange}
                required
                value={inputs.password}
                className="input"
                placeholder="Enter Votre mot de passe"
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
