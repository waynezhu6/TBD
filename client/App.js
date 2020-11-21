import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Screen from './components/screen.js';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <Screen/>
    </>
  );
};

export default App;
