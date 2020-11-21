import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Button } from 'galio-framework';

const HomePage = ({navigation}) => {

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.header}>
        <Text style={styles.title}>(Homepage)</Text>
      </View>

      <View style={styles.footer}>
        <Button 
          style={styles.button}
          onPress={() => navigation.navigate('chat')}
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
    flex: 1,
    backgroundColor: "#7D799A"
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

export default HomePage;