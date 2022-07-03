import React, { createContext } from "react";
import "./App.css";
import DB from "./assets/DB.json";
import Card from "./components/Card";
import Header from "./components/Header";
import InputBlock from "./components/InputBlock";
import Sidebar from "./components/Sidebar";
 export const Context = React.createContext()

function App() {

 

  const [search, setSearch] = React.useState('')
  return (
    <Context.Provider value={{search, setSearch}}>
    <div className="App">
      <div className="container">
        <Header/>
      </div>
      <div className="container">
        <InputBlock />
      </div>
      <div className="container">
        <div className="wrapper">
        <Sidebar />
       
        <div className="block">
          {DB.filter(item => {
            if(item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
              return true
            }
            return false
          }).map((item, i) => (
            <Card {...item} key={i} />
          ))}
        </div>
       
      </div>
      </div>
    </div>
    </Context.Provider>
  );
}

export default App;
