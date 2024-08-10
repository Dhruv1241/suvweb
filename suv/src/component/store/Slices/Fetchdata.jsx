import { createSlice } from "@reduxjs/toolkit";


const Fetchdata = createSlice({
  name:"product",
  initialState :{
    product : [],
    isLoading:false,
    error:null
  },
  reducers:{
    getAllProductsRequest(state, action){
      state.isLoading= true;
      state.product = []
    },
    getAllProductsSuccess(state, action){
      state.isLoading = false;
      state.product = action.payload
    },
    getAllProductFailure(state, action){
      state.isLoading = false;
      state.error = action.payload
    }
  }
});


export const getAllProducts = ()=> async (dispatch)=>{
  dispatch(Fetchdata.actions.getAllProductsRequest());
  try{
    const response = await fetch("https://api.pujakaitem.com/api/products");
    const data = await response.json();
    // console.log("data is ", data);
    dispatch(Fetchdata.actions.getAllProductsSuccess(data))
  }catch(err){
    console.log("err is ", err);
    dispatch(Fetchdata.actions.getAllProductFailure(err.response.data.message));
  }
}


export default Fetchdata.reducer;