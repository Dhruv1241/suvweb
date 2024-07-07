import {configureStore} from '@reduxjs/toolkit'
import {Fetchproduct} from './FetchSlice'
 const store = configureStore({
    reducer:{
        Fetch: Fetchproduct.reducer
    }
 })

 export const FetchAction = Fetchproduct.actions;
 export default store;