import React from 'react';
import io from 'socket.io-client';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashPage from './pages/splashPage';
import HomePage from './pages/homePage';
import ChatPage from './pages/chatPage';
import InputPage from './pages/inputPage';
import HotlinePage from './pages/hotlinePage';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">

        <Stack.Screen
          name="splash"
          component={SplashPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="home"
          component={HomePage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="input"
          component={InputPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="chat"
          component={ChatPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="hotline"
          component={HotlinePage}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
export const socket = io('http://34.95.61.158:5000');   
//export const socket = io('http://192.168.0.20:5000', {transports: ['websocket'], jsonp: false });   
