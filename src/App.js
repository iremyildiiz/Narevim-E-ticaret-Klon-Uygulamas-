import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import AppStack from './navigation/appStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
    <Provider store={store}>
        <AppStack />
    </Provider>
    </GestureHandlerRootView>
  );
}
