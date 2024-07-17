import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
export const fetchalldata = createAsyncThunk("data", async () => {
  const res = await fetch("https://api.pujakaitem.com/api/products")
  return res.json();
});


export const Fetchdata = createSlice({
  name: "data",
  initialstate: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchalldata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload
      
    });
    builder.addCase(fetchalldata.pending, (state) => {
        state.isLoading = true;
        
      });
      builder.addCase(fetchalldata.rejected, (state, action) => {
        console.log('error', action.payload )
        state.error = true
      });
      
  },
});

export default Fetchdata.reducer;
