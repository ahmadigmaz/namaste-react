import { useState, useEffect } from "react";
import { RESTAURANT_API } from "./constants";

const useResInfo = () =>{
const [listofRest, setListofRest] = useState([]);
useEffect(()=>{
    fetchData();
},[])

const fetchData = async () =>{
    const data = await fetch(RESTAURANT_API);
    const json =  await data.json();
    const restaurantCards = json?.data?.cards?.filter(
    (item) => item?.card?.card?.info
    );

    const ResList = restaurantCards.map((item) => item.card.card.info);
    setListofRest(ResList);
}
return listofRest;
}
export default useResInfo;