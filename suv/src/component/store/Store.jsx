import {configureStore} from '@reduxjs/toolkit';
import FetchDataReducer from "./Slices/Fetchdata";
import cartReducer from "./Slices/cartSlice";
import Feature from './Slices/Feature';
const store = configureStore({
    reducer:{
        Fetchdata: FetchDataReducer,
        cart: cartReducer,
        feature: Feature
        
    },
 });

 export default store;