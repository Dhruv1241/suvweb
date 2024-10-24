import {configureStore} from '@reduxjs/toolkit';
import FetchDataReducer from "./Slices/Fetchdata";
import cartReducer from "./Slices/cartSlice";
import Feature from './Slices/Feature';
<<<<<<< Updated upstream
import singleproductreducer from './Slices/SingleProductPage'
=======
import SingleProductSliceReducer from '../store/Slices/SingleProductSlice'
>>>>>>> Stashed changes
const store = configureStore({
    reducer:{
        Fetchdata: FetchDataReducer,
        cart: cartReducer,
        feature: Feature,
<<<<<<< Updated upstream
        singledata: singleproductreducer
=======
        singleproduct: SingleProductSliceReducer
>>>>>>> Stashed changes
    },
    devTools: process.env.NODE_ENV !== 'production',
 });

 export default store;