import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductDetails } from '../../Api/api';

// Async thunk: Ürün detaylarını API'den çeken işlemi oluşturuyoruz


// Slice: Ürün detayları ile ilgili state ve reducer'ları yönetiyoruz
const productDetailSlice = createSlice({
  name: 'productDetails',
  initialState: {
    data: null, // Ürün detay bilgileri
    status: 'idle', // Yükleme durumu: idle, loading, succeeded, failed
    error: null, // Hata durumu
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = 'loading'; // Yükleme başladığında durumu güncelle
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Başarılı olursa durumu güncelle
        state.data = action.payload; // Gelen veriyi state'e ekle
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.status = 'failed'; // Hata olursa durumu güncelle
        state.error = action.payload; // Gelen hatayı state'e ekle
      });
  },
});

export default productDetailSlice.reducer;
