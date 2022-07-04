import React, { createContext } from "react";
import "./App.css";
import axios from "axios";
//import DB from "./assets/DB.json";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import InputBlock from "./components/InputBlock";
import Sidebar from "./components/Sidebar";
import Skeleton from "./components/Card/Skeleton";

export const Context = React.createContext();

function App() {
  const [database, setDatabase] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/2eee739b-d763-4962-b1ef-5e12023c698c")
      .then((res) => {
        setDatabase(res.data)
        setIsLoading(false)
      })
  }, [])

  const [search, setSearch] = React.useState("");
  return (
    <Context.Provider value={{ search, setSearch }}>
      <div className="App">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <InputBlock />
        </div>
        <div className="container">
          <div className="wrapper">
            <Sidebar />

            <div className="block">
              {isLoading
                ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                :  database.filter((item) => {
                  if (
                    item.title
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return true
                  }
                  return false
                }).map((item, i) => <Card {...item} key={i} />)
                }
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
