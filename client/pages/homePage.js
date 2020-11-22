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
        <Text style={styles.title}>VenTalk</Text>
      </View>

      <Button 
        style={[styles.option, styles.option1]}
        onPress={() => navigation.navigate('input')}
      >
        <Text>Mental Health</Text>
      </Button>

      <Button 
        style={[styles.option, styles.option2]}
        onPress={() => navigation.navigate('input')}
      >
        <Text>Just Chat</Text>
      </Button>

      <Button 
        style={[styles.option, styles.option3]}
      >
        <Text>Connect Me with Hotlines</Text>
      </Button>
      
      <View style={styles.footer}></View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  header: {
    flex: 1,
  },
  title: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: "#A2A2A2"
  },

  option: {
    flex: 1,
    marginVertical: 10,
    borderRadius: 16,
    width: "85%",
    alignSelf: "center",
  },
  option1: {
    backgroundColor: '#E447CA'
  },
  option2: {
    backgroundColor: '#B42BD6'
  },
  option3: {
    backgroundColor: '#684CF1'
  },

  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center'
  }

});

export default HomePage;