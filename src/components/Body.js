import RestaurantCard, {promotedRestaurant} from "./RestaurantCard"
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
// console.log(data);

    
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
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="font-extrabold">🚫 No Internet Connection</h1>
      <p>Please check your WiFi or Mobile Data</p>
    </div>
  );
}
const LabelRestaurant = promotedRestaurant(RestaurantCard);
  
return listofRest.length === 0 ? <Shimmer/>:(
    <div className="body">
    <div className="filter flex m-4">
        <div className="Search m-4 p-4">
            <input className="border border-solid border-white"
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
        <button className="filter-btn px-4 py-1 m-4 bg-green-100 cursor-pointer rounded-lg"
        onClick={handlerSearchInput} 
        >Search
        </button> 
        <button className="filter-btn px-4 py-1 m-4 bg-green-100 cursor-pointer rounded-lg" onClick={handleShowAllRestaurant}>Show All Restaurant</button>
        <button className="filter-btn px-4 py-1 m-4 bg-green-100 cursor-pointer rounded-lg" onClick={handleTopRated}>Top Rated Restaurant</button>
        </div>
       
    </div>
    <div className="flex flex-wrap justify-between m-4 p-4">
        {listofRest.map((restaurant) => (
            restaurant.promoted ? 
               (<LabelRestaurant   key={restaurant.id} ResData = {restaurant}/>)
               :(<RestaurantCard   key={restaurant.id} ResData = {restaurant}/>)
        ))}
    </div>
</div>
)
}

export default Body