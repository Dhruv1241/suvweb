import { createSlice } from "@reduxjs/toolkit";
// import { getAllProducts } from "./Fetchdata";

const feature = createSlice({
    name: 'featureprod',
    initialState: {
        featureprod: [],
        isLoading: false,
        isError: null,
        isSuccess: null
    },
    reducers: {
        getFetureProduct(state){
            state.isLoading = true;
            state.isError = null
            state.isSuccess = false
            state.featureprod = []
        },
        getAllFetureSuccess(state, action){
            state.isLoading = false;
            state.isSuccess = true  
            state.featureprod = action.payload;
        },
        getAllProductFaliure(state, action){
            state.isLoading = false;
            state.isError = action.payload
        }
    }
})
export const featureproduct =()=> async (dispatch)=>{
    dispatch(feature.actions.getFetureProduct())
    try{
        const response = await fetch("https://api.pujakaitem.com/api/products");
        const data = await response.json();
        console.log("data is ", data);
        const featureData = data.filter((product) => product.featured === true);
        // console.log('featured data is', featureData)

        dispatch(feature.actions.getAllFetureSuccess(featureData))
      }catch(err){
        const errmsg = err.message || 'An err occurred'
        dispatch(feature.actions.getAllProductFaliure(errmsg))
    }
}

export default feature.reducer