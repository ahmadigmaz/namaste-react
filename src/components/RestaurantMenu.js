import { useParams } from 'react-router'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
const {resId} = useParams();
const resInfo = useResInfoMenu(resId);
if(resInfo === null) return <Shimmer/>

const ResName = resInfo?.cards[0]?.card?.card?.text;
const menuList = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

  return (
    <div>
        <h1>{ResName}</h1>
        <h2>Menu</h2>
        <ul>
         {menuList?.map((item) =>(
           <li key={item.card.info.id}>
             {item.card.info.name} - {item.card.info.price/100}
           </li>
        ))}
        </ul>
    </div>
  )
}

export default RestaurantMenu