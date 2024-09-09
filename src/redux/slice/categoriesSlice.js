import { createSlice } from '@reduxjs/toolkit';
import { categoriesProcess } from '../../Api/api';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: {},  
    status: '',
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(categoriesProcess.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(categoriesProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;

      })
      .addCase(categoriesProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  
      });
  },
});


export default categoriesSlice.reducer;
