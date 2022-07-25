import React from 'react'
import { useSelector } from "react-redux";
import Card from "../card/Card";
import Skeleton from "../card/Skeleton";
import DB from "../assets/DB.json";
const Home = () => {

    // const [option, setOption] = React.useState(0);
    // const [modelsIndex, setModelsIndex] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const search = useSelector((state) => state.modelReducer.search);

    
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

    return (
        <>
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