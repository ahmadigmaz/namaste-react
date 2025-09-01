import { Link } from "react-router-dom";
import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
   const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId, id, promoted} = props.ResData;

   return ( <Link to={`restaurant/${id}`} >
     <div className="m-4 p-4 w-[250px] shadow-2xl rounded-lg bg-amber-100 hover:bg-gray-700">
        <img className="rounded-lg" alt="card-image" src={CARD_IMG_URL + cloudinaryImageId}/>
        <div className="card-items wrap-anywhere">
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h3 className="font-bold py-1">{cuisines.join(",")}</h3>
            <h3 className="font-bold py-1">{avgRating}</h3>
            <h3 className="font-bold py-1">{costForTwo}</h3>
        </div>
    </div>
    </Link>
   )
}
export const promotedRestaurant = (restaurant)=>{
    return (props)=>{
        return(
        <div>
        <label className="absolute bg-white text-black m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
        </div>
    )}
}

export default RestaurantCard