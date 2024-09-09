import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://demo.pigasoft.com/eticaret/apiv1/';
const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';


axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers['X-API-KEY'] = API_KEY;
axios.defaults.headers['Content-Type'] = 'multipart/form-data';

const categoriesProcess = createAsyncThunk(
  'categories/categoriesProcess',
  async () => {
    try {
      const res = await axios.get('firstCategories');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const secondCategoriesProcess = createAsyncThunk(
  'secondCategories/secondCategoriesProcess',
  async (categoryId) => {
    try {
      const res = await axios.post('secondCategories/', {
        first_category_id: categoryId
      });
      return res.data;
    } catch (error) {
      console.error('API Request Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  },
);

const thirdCategoriesProcess = createAsyncThunk(
  'thirdCategories/thirdCategoriesProcess',
  async categoryId => {
    try {
      const res = await axios.post('thirdCategories', {
        second_category_id: categoryId,
      });
      return res.data;
    } catch (error) {
      console.error(
        'API Request Error:',
        error.response ? error.response.data : error.message,
      );
      throw error;
    }
  },
);

const loginProcess = createAsyncThunk(
  'auth/loginProcess',
  async data => {
    const {email, password} = data;
    const params = new FormData();
    params.append('email', email);
    params.append('password', password);
    try {
      const response = await axios.post('login', params);

      if (response.data && response.data.status === 'success') {
        // Başarılı ise kullanıcı verilerini AsyncStorage'a kaydet
        await AsyncStorage.setItem('@USERDATA', JSON.stringify(response.data.data));
        return response.data;
      } else {
        // Yanıt başarısızsa mesajı döndür
        return rejectWithValue(response.data.message || 'Giriş işlemi başarısız.');
      }
    } catch (error) {
      // Hata durumunda mesajı döndür
      return rejectWithValue(error.response?.data?.message || 'Giriş işlemi sırasında bir hata oluştu.');
    }
  },
);


const logoutProcess = createAsyncThunk(
  'authentication/logoutProcess',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('logout'); // API endpointinizi kullanın
      await AsyncStorage.removeItem('@USERDATA'); // Kullanıcı verilerini temizle
      return response.data;
    } catch (error) {
      console.log('Logout error:', error);
      return rejectWithValue(error.response?.data || 'Logout failed');
    }
  }
);

const lostPasswordProcess = createAsyncThunk(
  'auth/lostPasswordProcess',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'lostPassword',
        { email }
      );
      if (response.data.status === 'error') {
        return rejectWithValue(response.data.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);




const changePasswordProcess = createAsyncThunk(
  'auth/changePasswordProcess',
  async ({ currentPassword, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'changePassword',
        { currentPassword, newPassword }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
      
  }
);

const registerProcess = createAsyncThunk(
  'auth/registerProcess',
  async data => {
    const {email, password, telephone, name} = data;
    const params = new FormData();
    params.append('email', email);
    params.append('password', password);
    params.append('telephone', telephone);
    params.append('name', name);
    try {
      const res = await axios.post('register', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);


const sliderProcess = createAsyncThunk(
  'sliders/sliderProcess',
  async () => {
    try {
      const res = await axios.get('sliders');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const brandProductList = createAsyncThunk(
  'brands/brandProductList',
  async data => {
    const {page,per_page,brand_id,sorting} = data;
    const params = new FormData();
    params.append('page', page);
    params.append('per_page', per_page);
    params.append('brand_id', brand_id);
    params.append('sorting', sorting);

    try {
      const res = await axios.post('brandProductList', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);
const mainProductProcess = createAsyncThunk(
  'mainproduct/mainProductProcess',
  async () => {
    try {
      // API endpoint ve HTTP metodunu kontrol edin
      const res = await axios.get('mainProduct');  // GET metodu kullanılıyor
      return res.data;
    } catch (error) {
      console.error('Main product verisi çekilirken hata oluştu:', error);
      throw error;  // Hata oluşursa hatayı fırlat
    }
  }
);


const fetchProductDetails = createAsyncThunk(
  'productDetails/fetchProductDetails',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.post('productDetail', {
        product_id: productId,  // API'ye gönderilen ürün ID'si
      });
      return response.data;  // Başarılı yanıtı döndür
    } catch (error) {
      console.error('Ürün detaylarını çekerken hata oluştu:', error.response ? error.response.data : error.message);
      return rejectWithValue(error.response ? error.response.data : error.message);  // Hata durumunda reddet
    }
  }
);

const brandProcess = createAsyncThunk(
  'brands/brandProcess',
  async () => {

    try {
      const res = await axios.get('brands');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);


export {sliderProcess,brandProcess,categoriesProcess,secondCategoriesProcess,thirdCategoriesProcess,loginProcess,logoutProcess,registerProcess,brandProductList,lostPasswordProcess,changePasswordProcess,fetchProductDetails,mainProductProcess};