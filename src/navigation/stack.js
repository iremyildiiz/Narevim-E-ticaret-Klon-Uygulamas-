import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryScreen,SecondCategoryScreen,ThirdCategoryScreen } from '../pages';

const Stack = createNativeStackNavigator();


const CategoryStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="CategoryScreen"
      component={CategoryScreen} 
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SubCategoryScreen"
      component={SecondCategoryScreen} 
    />
    <Stack.Screen
    name="ThirdCategoryScreen"
   component={ThirdCategoryScreen} // Burada ThirdCategoryScreenComponent sizin bileşeninizdir.
/>

  </Stack.Navigator>

);


export default CategoryStack ;