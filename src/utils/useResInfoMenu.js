import { useEffect, useState } from "react"
import { RESTAURANT_MENU_API_FIRST_HALF, RESTAURANT_MENU_API_SECOND_HALF } from "./constants";

const useResInfoMenu = (resId) =>{
const [resInfo, setResInfo] = useState(null);
useEffect(()=>{
    fetchData();
},[])

const fetchData = async () =>{
    const data = await fetch(RESTAURANT_MENU_API_FIRST_HALF + resId + RESTAURANT_MENU_API_SECOND_HALF);
    const json = await data.json();
    setResInfo(json?.data);
}
return resInfo;
}
export default useResInfoMenu;