import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState : {
        cart:[],
        isLoading:false,
        error:null
    },
    reducers:{
        addToCartRequest(state, actions){
            state.isLoading = true;
        },
        addToCartSuccess(state, actions){
            state.isLoading=false;
            state.cart.push(actions.payload);
        },
        addToCartFailure(state, actions){
            state.isLoading = false,
            state.error = actions.payload
        }
    }
});

export const addToCart = (itemId)=> async (dispatch)=>{
    dispatch(cartSlice.actions.addToCartRequest());
    try{
        dispatch(cartSlice.actions.addToCartSuccess(itemId));
    }catch(err){
        console.log("error in cart is ", err);
        dispatch(cartSlice.actions.addToCartFailure("unable to add item"))
    }
}


export default cartSlice.reducer;