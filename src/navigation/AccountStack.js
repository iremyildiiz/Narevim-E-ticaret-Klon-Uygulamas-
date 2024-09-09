import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Iconi from 'react-native-vector-icons/Ionicons';
import Login from '../pages/account/login';
import AccountPage from '../pages/account/accountPage';
import Orders from './orders';
import Favorites from './favorites';
import Adres from './adress';
import UserInfo from './userInfo';
import ChangePassword from './changePassword';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  const { isSignedIn } = useSelector(state => state.auth);

  return (
    <Stack.Navigator>
      {isSignedIn === '1' ? (
        <>
          <Stack.Screen 
            name="AccountPage" 
            component={AccountPage}
            options={{ 
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="Orders" 
            component={Orders}
            options={({ navigation }) => ({
              title: 'Siparişlerim',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Iconi name="arrow-back" size={25} color="#DE3459" />
                </TouchableOpacity>
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerTintColor: '#DE3459',
              headerTitleStyle: { fontWeight: 'bold' },
            })}
          />
          <Stack.Screen 
            name="Favorites" 
            component={Favorites}
            options={({ navigation }) => ({
              title: 'Favorilerim',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Iconi name="arrow-back" size={25} color="#DE3459" />
                </TouchableOpacity>
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerTintColor: '#DE3459',
              headerTitleStyle: { fontWeight: 'bold' },
            })}
          />
          <Stack.Screen 
            name="Adres" 
            component={Adres}
            options={({ navigation }) => ({
              title: 'Adreslerim',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Iconi name="arrow-back" size={25} color="#DE3459" />
                </TouchableOpacity>
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerTintColor: '#DE3459',
              headerTitleStyle: { fontWeight: 'bold' },
            })}
          />
          <Stack.Screen 
            name="UserInfo" 
            component={UserInfo}
            options={({ navigation }) => ({
              title: 'Kullanıcı Bilgilerim',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Iconi name="arrow-back" size={25} color="#DE3459" />
                </TouchableOpacity>
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerTintColor: '#DE3459',
              headerTitleStyle: { fontWeight: 'bold' },
            })}
          />
          <Stack.Screen 
            name="ChangePassword" 
            component={ChangePassword}
            options={({ navigation }) => ({
              title: 'Şifre Değiştir',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Iconi name="arrow-back" size={25} color="#DE3459" />
                </TouchableOpacity>
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerTintColor: '#DE3459',
              headerTitleStyle: { fontWeight: 'bold' },
            })}
          />
        </>
      ) : (
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ 
            headerShown: false 
          }} 
        />
      )}
    </Stack.Navigator>
  );
};

export default AccountStack;
