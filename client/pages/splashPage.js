import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Button } from 'galio-framework';

const SplashPage = ({navigation}) => {

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.header}>
        <Text style={styles.title}>Title!</Text>
      </View>

      <View style={styles.middle}>

      </View>

      <View style={styles.footer}>
        <Button 
          style={styles.button}
          onPress={() => navigation.navigate('home')}
        >
          button
        </Button>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    flex: 1
  },

  header: {
    flex: 1,
    borderWidth: 1
  },
  title: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 36
  },

  middle: {
    flex: 2,
    borderWidth: 1
  },

  footer: {
    flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: 'center'
  },
  button: {
    width: '60%'
  }

});

export default SplashPage;