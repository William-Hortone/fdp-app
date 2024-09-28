import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (inputs) => {
    console.log("the inputs are", inputs);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5003/api/users/loginUser",
        inputs
      );

      if (response.data.status === false) {
        setIsLoading(false);
        toast.error(response.data.message);
        return;
      }

      if (response.data.status === true) {
        setIsLoading(false);
        toast.success("Login Successful");
        console.log("the response is", response);

        // Save token and user info in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        setUserToken(response.data.token);
        setUserInfo(response.data.user);
navigate('/')
        console.log("User info:", response.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      toast.error("Login failed. Please try again.");
    }
  };

  const handleLogout = () => {
    // Clear the token and user info from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");

    // Reset the state variables
    setUserToken(null);
    setUserInfo(null);

    toast.success("Logout successful");
  };

  return (
    <UserContext.Provider value={{ handleLogin, handleLogout, userToken, userInfo }}>
      {children}
    </UserContext.Provider>
  );
};
