const RestaurantCard = (props) =>{
   const {name, cuisines, deliveryTime, image, rating} = props.ResData;

   return (
     <div className="card-container">
        <img className="card-image" alt="card-image" src={image}/>
        <div className="card-items">
            <h3 >{name}</h3>
            <h3>{cuisines}</h3>
            <h3>{rating}</h3>
            <h3>{deliveryTime}</h3>
        </div>
    </div>
   )
}

export default RestaurantCard