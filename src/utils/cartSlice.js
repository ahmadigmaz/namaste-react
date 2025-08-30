import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers:{
        addItems: (state, action) =>{
            state.items.push(action.payload);
        },
        removeItems: (state,action) =>{
            state.items.pop();
        },
        clearCart: (state,action) =>{
            state.items.length = 0;
        }
    }
})
//we need to import two things because behind the scene this create slice is looking like this - action and reducer 
//actions
export const{addItems,removeItems,clearCart} = cartSlice.actions;
//reducer
export default cartSlice.reducer