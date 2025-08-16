import RestaurantCard from "./RestaurantCard"
import ResList from "../utils/mockData"
import { useState } from "react"

const Body = () =>{
    const [listofRest,setListofRest] = useState(ResList);

    
    const handleTopRated = () => {
        const filterList = ResList.filter((restaurant) => restaurant.rating > 4.5);
        setListofRest(filterList);
    };

    return (
        <div className="body-container">
        <div className="filter">
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