import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { Connection, Login, Signup } from "./containers";
import { UserProvider } from "./hooks/context/UserContext";
import { About, Home, Products } from "./pages";
import { HandleFetchArticles } from "./hooks/context/fetchArticles";



const App = () => {
  const {articlesData} = HandleFetchArticles()

  useEffect(() =>{
    console.log('the data', articlesData)
  },[articlesData])
  return (
    <>
    <UserProvider>

      <div className="App">
      <ToastContainer />
        <Routes>
          <Route path="/connection" element={<Connection />} >
            <Route path="/connection/login" element={<Login />} />
            <Route path="/connection/Signup" element={<Signup />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </UserProvider>
    </>
  );
};

export default App;
