import { createSlice } from '@reduxjs/toolkit';
import { 
  loginProcess, 
  logoutProcess, 
  registerProcess, 
  lostPasswordProcess, 
  changePasswordProcess 
} from '../../Api/api';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {},
    isLoading: false,
    error: '',
    status: undefined,
    isSignedIn: '-1', // Varsayılan olarak '-1', '1' ise giriş yapıldı, '0' ise çıkış yapıldı
  },
  reducers: {
    checkSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;
        state.isSignedIn = '1'; // Giriş yapıldı
      })
      .addCase(loginProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.isSignedIn = '0'; // Giriş başarısız
        state.status = action.payload?.status;
      })
      .addCase(logoutProcess.pending, state => {
        state.isLoading = true; // Çıkış işlemi başladığında loading durumu
      })
      .addCase(logoutProcess.fulfilled, state => {
        state.isLoading = false;
        state.isSignedIn = '0'; // Çıkış başarılı
        state.data = {}; // Kullanıcı verisini sıfırlıyoruz
        state.status = 'success'; // Başarı durumu
      })
      .addCase(logoutProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Logout failed'; // Hata mesajını kaydet
        state.status = 'error'; // Hata durumu
      })
      .addCase(registerProcess.pending, (state) => {
        state.isLoading = true; // Kayıt işlemi başladığında loading durumu
      })
      .addCase(registerProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data; // Kayıt başarılı olduğunda dönen veriyi state'e ekle
        state.status = 'success'; // Başarı durumu
      })
      .addCase(registerProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Kayıt işlemi başarısız'; // Hata mesajını kaydet
        state.status = 'error'; // Hata durumu
      })
      .addCase(lostPasswordProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(lostPasswordProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'success';
      })
      .addCase(lostPasswordProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.status = 'error';
      })
      .addCase(changePasswordProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(changePasswordProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'success';
      })
      .addCase(changePasswordProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.status = 'error';
      });
  },
});

export const { checkSignedIn } = authSlice.actions;
export default authSlice.reducer;
