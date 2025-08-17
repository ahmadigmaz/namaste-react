import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
   const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId} = props.ResData;

   return (
     <div className="card-container">
        <img className="card-image" alt="card-image" src={CARD_IMG_URL + cloudinaryImageId}/>
        <div className="card-items">
            <h3 >{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
        </div>
    </div>
   )
}

export default RestaurantCard