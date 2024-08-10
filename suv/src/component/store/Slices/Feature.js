import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./Fetchdata";

const feature = createSlice({
    name: 'featureprod',
    initialState: {
        Fetureproduct: [],
        isLoading: false,
        isError: null,
        isSuccess: null
    },
    reducers: {
        getfetureproduct(state, actions){
            state.isLoading = true;
            state.isError = null
            state.isSuccess = false
            state.Fetureproduct = []
        },
        getallFetureSuccess(state, actions){
            state.isLoading = false;
            state.getAllProducts = true
            state.Fetureproduct = actions.payload;
        },
        getallProductFaliure(state, actions){
            state.isLoading = false;
            state.isError = actions.payload
        }
    }
})
export const featureproduct =()=> async (dispatch)=>{
    dispatch(feature.actions.getfetureproduct())
    try{
        const response = await fetch("https://api.pujakaitem.com/api/products");
        const data = await response.json();
        // console.log("data is ", data);
        dispatch(Fetchdata.actions.getAllProductsSuccess(data))
      }catch(err){
        const errmsg = err.message || 'An err occurred'
        dispatch(feature.actions.getallProductFaliure(errmsg))
    }
}

export default feature.reducer