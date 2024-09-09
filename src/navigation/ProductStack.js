
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../pages'; 
import ProductPage from '../pages/HomeScreen/ProductPage'; 
import ProductDetailPage from '../pages/HomeScreen/ProductDetailPage';
import mainProduct from '../pages/HomeScreen/mainProduct';
const Stack = createNativeStackNavigator();

const ProductStack = () => (
  <Stack.Navigator >
    <Stack.Screen 
    name="Home" 
    component={HomeScreen} 
    />
    
    <Stack.Screen 
    name="ProductPage"
     component={ProductPage} 
     options={{ headerShown: false }}
     
     />
     <Stack.Screen 
     name="ProductDetail" 
     component={ProductDetailPage}
     options={{ headerShown: false }} />

   <Stack.Screen 
     name="mainProduct" 
     component={mainProduct}
     options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default ProductStack;
