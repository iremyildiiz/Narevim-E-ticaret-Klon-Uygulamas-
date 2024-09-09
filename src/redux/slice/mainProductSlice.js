import { createSlice } from '@reduxjs/toolkit';
import { mainProductProcess } from '../../Api/api';

const brandProductsSlice = createSlice({
  name: 'mainProducts',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mainProductProcess.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(mainProductProcess.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Burada 'data' kullanıyoruz
      })
      .addCase(mainProductProcess.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message; // Burada 'payload' kullanıyoruz
      });
  },
});


export default brandProductsSlice.reducer;
