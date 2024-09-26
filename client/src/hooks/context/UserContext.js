import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleLogin = async (inputs) => {
        console.log('the inputs are', inputs);
        setIsLoading(true)

        try {
            const response = await axios.post('http://localhost:5003/api/users/loginUser', inputs);

            if(response.data.status === false){
        setIsLoading(false) 
                
                toast.error(response.data.message);
                return;
            }
            if (response.data.status === true) { 
        setIsLoading(false) 

                toast.success("Login Successful");
                console.log('the response is', response);
                
                // Save token and user info in localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userInfo', JSON.stringify(response.data.user)); 
                setUserToken(response.data.token);
                setUserInfo(response.data); 
                
                console.log("User info:", response.data);
            }
        } catch (error) {
            console.log('error', error);
            toast.error("Login failed. Please try again.");
        }
    };

    return (
        <UserContext.Provider 
            value={{ handleLogin, userToken, userInfo }}
        >
            {children}
        </UserContext.Provider>
    );
};
