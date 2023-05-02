import "./App.css";
import { Home, Products } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
};

export default App;
