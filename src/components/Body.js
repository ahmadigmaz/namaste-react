import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () =>{
    const [listofRest,setListofRest] = useState([]);
    const [listOfAllRestaurant, setListOfAllRestaurant] = useState([]);
    const [inputText,setInputText] = useState("");

    
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
        //console.log(searchListOfRestaurant);
        setListofRest(searchListOfRestaurant);
    }

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9880043&lng=77.6893675&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json =  await data.json();
        const restaurantCards = json?.data?.cards?.filter(
        (item) => item?.card?.card?.info
        );

        const ResList = restaurantCards.map((item) => item.card.card.info);
        setListofRest(ResList);
        setListOfAllRestaurant(ResList);
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