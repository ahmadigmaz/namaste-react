import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice';
import CartItems from './CartItems';

const Cart = () => {
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  }
  const cartItems = useSelector((store)=>store.cart.items);
  return (
    <div>
      <div className='flex justify-center text-center'>
        <h1 className='text-2xl  font-bold m-4 p-4'>Cart</h1>
        <button  onClick={clearCartHandler}  className='bg-amber-950 px-4 py-1 m-4 rounded-2xl cursor-pointer font-bold'>Clear Cart</button>
      </div>
      <div className='w-6/12 m-auto'>
         {cartItems.length==0?<h1 className='font-bold text-center m-4 p-4 text-2xl'>Your cart is Empty, Please add Items to the Cart</h1>
         :<CartItems data = {cartItems}/>}
      </div>
    </div>
  )
}

export default Cart