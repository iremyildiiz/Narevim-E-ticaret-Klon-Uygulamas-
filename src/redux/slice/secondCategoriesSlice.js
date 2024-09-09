import { createSlice } from "@reduxjs/toolkit";
import { secondCategoriesProcess } from "../../Api/api";

const secondCategoriesSlice = createSlice({
    name: 'secondCategories',
    initialState: {
      data: [],
      status: '',
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(secondCategoriesProcess.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(secondCategoriesProcess.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload.data;
        })
        .addCase(secondCategoriesProcess.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default secondCategoriesSlice.reducer;