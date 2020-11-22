import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import { Button } from 'galio-framework';

const SplashPage = ({navigation}) => {

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.header}>
        <Text style={styles.title}>VenTalk</Text>
      </View>

      <Image source={require('../sources/logo.png')} style={styles.image}/>
      <Text style={styles.p1}>
        Need to vent about a bad mental health, or just want someone to chat with?
        Let us match you with a user with similar needs.
      </Text>

      <View style={styles.footer}>
        <Button 
          style={styles.button}
          onPress={() => navigation.navigate('home')}
        >
          Start Talking
        </Button>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#918EAA"
  },

  header: {
    flex: 1,
    //borderWidth: 1
  },
  title: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 36,
    color: "white",
    fontWeight: "bold"
  },

  middle: {
    flex: 3,
    //borderWidth: 1
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    resizeMode: 'contain',
    flex: 2
  },
  p1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19,
    maxWidth: "90%",
    alignSelf: "center",
    textAlignVertical: 'center',
    flex: 1
  },

  footer: {
    flex: 1,
    //borderWidth: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '60%',
    height: 52,
    backgroundColor: "#F8A6A6",
    borderRadius: 20
  }

});

export default SplashPage;