import {configureStore} from '@reduxjs/toolkit';
import FetchDataReducer from "./Slices/Fetchdata";
import cartReducer from "./Slices/cartSlice";
import Feature from './Slices/Feature';
import SingleProductSlice from '../store/Slices/SingleProductSlice'
const store = configureStore({
    reducer:{
        Fetchdata: FetchDataReducer,
        cart: cartReducer,
        feature: Feature,
        singleproduct: SingleProductSlice
    },
 });

 export default store;