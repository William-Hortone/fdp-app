import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // The login function
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
        toast.success("Login Successful");
        
        // Save token and user info in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        setUserToken(response.data.token);
        setUserInfo(response.data);
        
        setIsLoading(false);
        navigate("/");
        
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Login failed. Please try again.");
    }
  };

  // The logout function
  const handleLogout = () => {
    // Clear the token and user info from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");

    setUserToken(null);
    setUserInfo(null);

    toast.success("Logout successful");
  };

  // User monitoring
  useEffect(() => {
      const token = localStorage.getItem("token");
      const userInfoString = localStorage.getItem("userInfo");

      if (token && userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        setUserToken(token);
        setUserInfo(userInfo);
      } else {
        setUserToken(null);
        setUserInfo(null);
      }
  },[userToken])




  return (
    <UserContext.Provider
      value={{ handleLogin, handleLogout, userToken, userInfo , isLoading}}
    >
      {children}
    </UserContext.Provider>
  );
};
