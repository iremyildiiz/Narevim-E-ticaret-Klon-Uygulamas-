import { createSlice } from "@reduxjs/toolkit";
import { thirdCategoriesProcess } from "../../Api/api";

const thirdCategoriesSlice = createSlice({
    name: 'thirdCategories',
    initialState: {
      data: [],
      status: '',
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(thirdCategoriesProcess.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(thirdCategoriesProcess.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload.data;
        })
        .addCase(thirdCategoriesProcess.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default thirdCategoriesSlice.reducer;