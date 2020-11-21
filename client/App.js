import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashPage from './pages/splashPage';
import HomePage from './pages/homePage';
import ChatPage from './pages/chatPage';

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
          name="chat"
          component={ChatPage}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
