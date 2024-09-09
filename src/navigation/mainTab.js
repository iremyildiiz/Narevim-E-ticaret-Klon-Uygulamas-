import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryStack from './stack';
import AccountStack from './AccountStack';
import { HomeScreen, ShoppingScreen} from '../pages';



const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarLabelStyle: {
        fontSize: 12,
        paddingBottom: 5,
        fontWeight: 'bold',
      },
      tabBarActiveTintColor: '#ee0069',
      tabBarInactiveTintColor: '#6a7d80',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#dc0155',
      },
      tabBarIcon: ({ color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home-outline';
            break;
          case 'Category':
            iconName = 'grid-outline';
            break;
          case 'Shopping':
            iconName = 'cart-outline';
            break;
          case 'Login':
            iconName = 'person-outline';
            break;
          default:
            iconName = 'home-outline';
            break;
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen
      name='Home'
      component={HomeScreen}
      options={{ tabBarLabel: 'Anasayfa', headerShown: false }}
    />
    <Tab.Screen
      name='Category'
      component={CategoryStack}
      options={{ tabBarLabel: 'Kategoriler', title: 'Kategoriler', headerShown: false }}
    />
    <Tab.Screen
      name='Shopping'
      component={ShoppingScreen}
      options={{ tabBarLabel: 'Sepetim', title: 'Sepet' }}
    />
    <Tab.Screen
      name='Login'
      component={AccountStack}
      options={{ tabBarLabel: 'Hesabım', headerShown: false }}
    />
  </Tab.Navigator>
);

export default MainTabs;
