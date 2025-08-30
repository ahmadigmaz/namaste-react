import { useParams } from 'react-router'
import Shimmer from './Shimmer';
import useResInfoMenu from '../utils/useResInfoMenu'
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
const [showIndex, setShowIndex] = useState(null);
const {resId} = useParams();
const resInfo = useResInfoMenu(resId);
if(resInfo === null) return <Shimmer/>

const ResName = resInfo?.cards[0]?.card?.card?.text;
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => 
item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
return (
<div className='text-center'>
  <h1 className="m-4 p-4 text-3xl font-bold text-gray-800 mb-2 text-center">
  {ResName}</h1>
  <h2 className="text-xl font-semibold text-gray-600 mb-6 text-center">
  🍽️ Menu</h2>

  <div className='category'>
   { categories.map((category, index)=>
   <RestaurantCategory 
    showItems = {index===showIndex?true:false}
    setShowIndex = {()=> setShowIndex(index===showIndex?null:index)}
    key={category?.card?.card?.title} 
    data = {category?.card?.card} />)}
  </div>
</div> 
  )
}
export default RestaurantMenu