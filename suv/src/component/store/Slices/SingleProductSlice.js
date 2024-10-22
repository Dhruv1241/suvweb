import { createSlice } from "@reduxjs/toolkit";

const singleProducts = createSlice({
    name: 'fetchsingleproducts',
    initialState: {
        isLoading: false,
        isError: null,
        isSucess: null,
        fetchsingleproduct: []
    },
    reducers: {
        getallsingleproductrequest(state) {
            state.isLoading = true
            state.isError = null
            state.isSucess = false
            state.fetchsingleproduct = []
        },
        getallsingleproductsucess(state, action) {
            state.isLoading = false
            state.isSucess = true
            state.fetchsingleproduct = action.payload
        },
        getallsingleproductfailure(state, action) {
            state.isLoading = false
            state.isError = action.payload
        }

    }
})

export const getallsingleproduct = () => async (dispatch) => {
    console.log('done')
    dispatch(singleProducts.actions.getallsingleproductrequest())
    try {
        const response = await fetch('https://api.pujakaitem.com/api/products')
        console.log('response is',response)
        const data = await response.json()
        console.log('data is data', data)
        dispatch(singleProducts.actions.getallsingleproductsucess(data))
    } catch (err) {
        console.log(err)
        dispatch(singleProducts.actions.getallsingleproductfailure(err.response.data.message))
    }
}

export default singleProducts.reducer