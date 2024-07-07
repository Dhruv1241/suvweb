import { createSlice } from "@reduxjs/toolkit"
const initialstate = {
    FetchData: []
}
export const Fetchproduct = createSlice({
    initialstate: initialstate,
    name: 'Fetchdata',
    reducers:{
        Fatchprod(state, action){
        fetch('https://api.pujakaitem.com/api/products').then(res=>{
            console.log(res)
        })
        }
    }
})