import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import axios from "axios";
import DB from "./assets/DB.json";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import InputBlock from "./components/InputBlock";
import Sidebar from "./components/Sidebar";
import Skeleton from "./components/Card/Skeleton";

function App() {
  const [option, setOption] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const search = useSelector((state) => state.modelReducer.search);
  //-------------------------------------
  

  const sortAlfabet = () => {
    DB.sort((a, b) => a.title.localeCompare(b.title));
  };
  const sortRating = () => {
    return DB.sort((a, b) => a.rating - b.rating).reverse();
  };

  const sortPrice = () => {
    return DB.sort((a, b) => a.price - b.price);
  };

  const sortAll = () => {
    return DB.sort((a, b) => a.id - b.id);
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

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header  />
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
            {isLoading
              ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
              : DB.filter((item) =>
                  item.title
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                ).map((item, i) => <Card {...item} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
