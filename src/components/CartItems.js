import React from 'react'
import { FOOD_IMAGE_URL } from '../utils/constants'
import {useDispatch} from "react-redux";
import { removeItems } from '../utils/cartSlice';

const CartItems = (props) => {
const items  = props.data
const dispatch = useDispatch();
const removeItemHandler = (name) => {
 dispatch(removeItems());
}
  return (
    <div>
        {items.map((item)=>(
        <div 
        key={item?.card?.info?.id} 
        className="flex justify-between items-stretch p-2 m-2 border-b border-white-200"
        >
        <div className="text-left p-4 flex flex-col flex-1">
            <span className="font-bold">{item?.card?.info?.name}</span>
            <span className="font-bold">₹{item?.card?.info?.price/100}</span>
            <p>{item?.card?.info?.description}</p>
        </div>    
        <div className="relative h-50">
            <img 
            className=" w-48 h-44  object-cover rounded-2xl" 
            alt="food image" 
            src={FOOD_IMAGE_URL + item?.card?.info?.imageId} 
            />
            <div className='absolute bottom-0 w-full flex justify-center'>
                <button onClick = {() => removeItemHandler(item)} 
                className='p-3 mx-16 my-7 rounded-lg bg-white shadow-lg cursor-pointer text-green-300 font-bold'>
                  Remove</button>
            </div>
        </div>
    </div>
    ))}
    </div>
  )
}

export default CartItems