import {configureStore} from '@reduxjs/toolkit'
import Fetchdata from './Slices/Fetchdata';

export const store = configureStore({
    reducer:{
        Alldata: Fetchdata
    }
 })

 export const FetchAction = Alldata.actions;
 export default store;