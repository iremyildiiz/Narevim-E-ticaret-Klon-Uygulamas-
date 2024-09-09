import { createSlice } from '@reduxjs/toolkit';
import { brandProductList } from '../../Api/api';

const brandProductsSlice = createSlice({
  name: 'brandProducts',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(brandProductList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(brandProductList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Burada 'data' kullanıyoruz
      })
      .addCase(brandProductList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message; // Burada 'payload' kullanıyoruz
      });
  },
});


export default brandProductsSlice.reducer;
