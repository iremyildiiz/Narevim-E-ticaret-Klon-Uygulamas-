import { createSlice } from '@reduxjs/toolkit';
import { brandProcess } from '../../Api/api';

const brandSlice = createSlice({
  name: 'brands',
  initialState: {
    data: {},
    status: undefined,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(brandProcess.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(brandProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(brandProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.error.message;
      });
  },
})

export default brandSlice.reducer;
