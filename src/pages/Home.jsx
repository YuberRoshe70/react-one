import React from 'react'
import { useSelector } from "react-redux";
import Card from "../card/Card";
import Skeleton from "../card/Skeleton";
import DB from "../assets/DB.json";

import InputBlock  from '../components/inputBlock/InputBlock'
const Home = () => {

    const [option, setOption] = React.useState(0);
    const [modelsIndex, setModelsIndex] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(true);
    const search = useSelector((state) => state.modelReducer.search);

    
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

    
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

    return (
        <>
        <div className="container">
   <InputBlock
     option={option}
     setOption={setOption}
     optionValue={(i) => optionValue(i)}
   />
 </div>
            {isLoading
                ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                : DB.filter((item) =>
                    item.title
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase())
                ).map((item, i) => <Card {...item} key={i} />)}
                 </>
    )
}

export default Home