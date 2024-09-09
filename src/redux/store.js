import { configureStore } from '@reduxjs/toolkit';
import sliderSlice from './slice/sliderSlice';
import brandSlice from './slice/brandSlice';
import categoriesSlice from './slice/categoriesSlice';
import secondCategoriesSlice from './slice/secondCategoriesSlice';
import authSlice from './slice/authSlice';
import thirdCategoriesSlice from './slice/thirdCategoriesSlice';
import brandProductSlice from './slice/brandProductSlice';
import productDetailSlice from './slice/productDetailSlice';
import mainProductSlice from './slice/mainProductSlice';

export const store = configureStore({
  reducer: {
    sliders: sliderSlice,
    brands: brandSlice,
    categories:categoriesSlice,
    secondCategories:secondCategoriesSlice,
    auth:authSlice,
    thirdCategories:thirdCategoriesSlice,
    brandProducts:brandProductSlice,
    productDetails:productDetailSlice,
    mainProduct:mainProductSlice
  },
});


 
