import { createSlice } from "@reduxjs/toolkit";

const singleproductpage = createSlice({
    name: 'singleproduct',
    initialState: {
        singleproduct: [],
        isLoading: false,
        isError: null,
        isSuccess: null
    },
    reducers: {
        getsingleproductrequest(state){
            state.isLoading = true;
            state.isError = null
            state.isSuccess = false
            state.singleproduct = []
        },
        getsingleproductsucess(state, action){
            state.isLoading = false;
            state.isSuccess = true  
            state.singleproduct = action.payload;
        },
        getsingleproducterror(state, action){
            state.isLoading = false;
            state.isError = action.payload
        }
    }
})
export const getallsingleproduct =(id)=> async (dispatch)=>{
    dispatch(singleproductpage.actions.getsingleproductrequest())
    try{
        const response = await fetch(`https://api.pujakaitem.com/api/products/${id}`);

        const data = await response.json();
        // console.log("single product data", data);    

        dispatch(singleproductpage.actions.getsingleproductsucess(data))
      }catch(err){
        const errmsg = err.message || 'An err occurred'
        dispatch(singleproductpage.actions.getsingleproducterror(errmsg))
    }
}

export default singleproductpage.reducer
console.log('single product slice')