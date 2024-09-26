import axios from "axios";
import React, {createContext, useState} from "react";
import { toast } from "react-toastify";
import AsyncStorage from "@react-native-async-storage/async-storage"; 


export const UserContext = createContext();

export const UserProvider = ({children})=> {
    const [userInfo, setUserInfo] = useState()
    const [userToken, setUserToken] = useState(null)
    // const [isLoading, setIsLoading] = useState()


    const handleLogin = async (inputs) =>{
        console.log('the inputs is', inputs)

        try {
            const response = await axios.post('http://localhost:5003/api/users/loginUser', inputs)

            if(response.status === true){
                toast.success(response.data.message)
                console.log('the response is ', response)
                localStorage.setItem('token', response.data.token)


                setUserToken(response.data.token);
                AsyncStorage.setItem("userToken", response.data.token);
                AsyncStorage.setItem("userInfo", JSON.stringify(response.data));
                console.log("the res from back", response.data);
        
                setUserInfo(response.data);
                // setIsLoading(false);
            }
            
        } catch (error) {
            console.log('error', error)
        }

    }

    return (
        <UserContext.Provider 
        value={{handleLogin,userToken, userInfo}}
        >
            {children}
        </UserContext.Provider>
    )
}

