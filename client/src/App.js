import React from "react";
import "./App.css";
import { About, Home, Products } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Connection, Login, Signup } from "./containers";

const App = () => {
  return (
    <>
      <div className="App">
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
    </>
  );
};

export default App;
