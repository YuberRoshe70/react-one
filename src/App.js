import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Toyota from "./pages/Toyota";
import Home from "./pages/Home";
import Mercedes from "./pages/Mercedes";
import Bmw from "./pages/Bmw";
import Cart from "./components/Cart";
import HeaderBlock from "./components/HeaderBlock";

function App() {
  
  //---------------------------------------

  // React.useEffect(() => {
  //   axios
  //     .get("https://run.mocky.io/v3/2eee739b-d763-4962-b1ef-5e12023c698c")
  //     .then((res) => {
  //       setDatabase(res.data);
  //       setIsLoading(false);
  //     });
  // }, []);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="App">
      <HeaderBlock/>
      <div className="container">
        <div className="wrapper">
          <div className="block">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="toyota" element={<Toyota />} />
              <Route path="mercedes" element={<Mercedes />} />
              <Route path="bmw" element={<Bmw />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
