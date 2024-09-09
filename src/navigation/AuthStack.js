import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/account/login';
import ForgotPassword from '../pages/account/accountPage/ForgotPassword';
import { SignUpScreen } from '../pages';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="ForgotPassword" 
      component={ForgotPassword} 
      options={{
        title:'Şifremi Unuttum',
        headerTitleAlign:'center',
        headerTintColor:'#DE3459'
      }
      } 
    />
  </Stack.Navigator>
);

export default AuthStack;
