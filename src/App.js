import React from "react";


import {Routes, Route} from "react-router-dom";
import "./App.css";
import axios from "axios";
import DB from "./assets/DB.json";
import Header from "./components/Header";
import InputBlock from "./components/inputBlock/InputBlock.jsx";
import Sidebar from "./components/Sidebar";
import Toyota from "./pages/Toyota";
import Home from "./pages/Home";
import Mercedes from "./pages/Mercedes";
import Bmw from "./pages/Bmw";

function App() {
  const [option, setOption] = React.useState(0);
  const [modelsIndex, setModelsIndex] = React.useState(0);
  
  //-------------------------------------

  const sortAlfabet = () => {
    DB.sort((a, b) => a.title.localeCompare(b.title));
  };
  const sortRating = () => {
    return DB.sort((a, b) => a.rating - b.rating).reverse();
  };

  const sortPrice = () => {
    DB.sort((a, b) => a.price - b.price);
  };

  const sortAll = () => {
    DB.sort((a, b) => a.id - b.id);
  };

  const optionValue = (i) => {
    if (i === 2) {
      sortPrice();
    }
    if (i === 3) {
      sortRating();
    }
    if (i === 1) {
      sortAlfabet();
    }
    if (i === 0) {
      sortAll();
    }
  };

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
      <div className="container">
        <Header modelsIndex={modelsIndex} setModelsIndex={setModelsIndex} />
      </div>
      <div className="container">
        <InputBlock
          option={option}
          setOption={setOption}
          optionValue={(i) => optionValue(i)}
        />
      </div>
      <div className="container">
        <div className="wrapper">
          <Sidebar />
          <div className="block">
            <Routes>
            <Route path='/' element={ <Home />}/>
           <Route path='home' element={ <Home />}/>
           <Route path="toyota" element={ <Toyota />}/>
           <Route path="mercedes" element={ <Mercedes/>}/>
           <Route path="bmw" element={ <Bmw/>}/>
          
           
           
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
