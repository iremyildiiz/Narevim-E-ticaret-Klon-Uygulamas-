import { createSlice } from '@reduxjs/toolkit';
import { sliderProcess } from '../../Api/api';


export const sliderSlice = createSlice({
  name: 'sliders',
  initialState: {
    data: {},
    status: undefined,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sliderProcess.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sliderProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(sliderProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.error.message;
      });
  },
})

export default sliderSlice.reducer;
