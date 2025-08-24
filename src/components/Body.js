import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import useResInfo from "../utils/useResInfo"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () =>{
const [listofRest,setListofRest] = useState([]);
const [listOfAllRestaurant, setListOfAllRestaurant] = useState([]);
const [inputText,setInputText] = useState("");

const data = useResInfo();
useEffect(() => {
if (data.length) {
    setListOfAllRestaurant(data);
    setListofRest(data);
}
}, [data]);

    
const handleTopRated = () => {
    const filterList = listofRest.filter((restaurant) => restaurant.avgRating > 4);
    setListofRest(filterList);
};
const handleShowAllRestaurant = ()  =>{
    setListofRest(listOfAllRestaurant);
}
const handlerSearchInput = () => {
    const searchListOfRestaurant = listOfAllRestaurant.filter((res) => 
        res.name.toLowerCase().includes(inputText.toLowerCase())
    )
    setListofRest(searchListOfRestaurant);
}

const onlineStatus = useOnlineStatus();
if (!onlineStatus) {
  return (
    <div className="online-status">
      <h1>🚫 No Internet Connection</h1>
      <p>Please check your WiFi or Mobile Data</p>
    </div>
  );
}
  
return listofRest.length === 0 ? <Shimmer/>:(
    <div className="body-container">
    <div className="filter">
        <input className="search-box"
            type="text" 
            value={inputText}
            onChange={(e)=>{
            setInputText(e.target.value);
            }}
            onKeyDown={(e)=>{
            if(e.key=="Enter"){
                handlerSearchInput();
            }
            }}
            />
        <button className="filter-btn"
            onClick={handlerSearchInput} 
        >Search</button>    

        <button className="filter-btn" onClick={handleShowAllRestaurant}>Show All Restaurant</button>
        <button className="filter-btn" onClick={handleTopRated}>Top Rated Restaurant</button>
    </div>
    <div className="res-card">
        {listofRest.map((restaurant) => (
            <RestaurantCard   key={restaurant.id} ResData = {restaurant}/>
        ))}
    </div>
</div>
)
}

export default Body