import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import { Button } from 'galio-framework';
import Spinner from 'react-native-loading-spinner-overlay';
import Entypo from 'react-native-vector-icons/Entypo';

import { socket } from '../App';

const InputPage = ({navigation}) => {

  const [input, setInput] = useState("");
  const [page, setPage] = useState(-1); //-1 for current, 0 for loading, 1 for next

  useEffect(() => {
    if(page == 1){
      navigation.navigate('chat');
    }
  })

  const onClick = () => {
    console.log(input);
    if(input.length > 0){
      socket.emit('requestRoom', {text: input});
      setPage(0);
    }
  }

  socket.on('roomCreated', (data) => {
    setPage(1);
  });

  if(page == 0){
    return (
      <SafeAreaView style={styles.container}>
        <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={styles.spinner}
        />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.header}>
        <Entypo 
          name="chevron-thin-left" 
          size={32} 
          style={styles.backIcon}
          onPress={() => navigation.navigate('home')}
        />
        <Text style={styles.title}>VenTalk</Text>
        <View style={styles.spacer}></View>
      </View>
      
      <View style={styles.content}>

        <Text style={styles.subtitle}>How are you feeling today?</Text>

        <View style={styles.textbar}>
          <TextInput
            style={styles.input}
            placeholder="Go on now..."
            onChangeText={text => setInput(text)}
          />
        </View>

        <Button 
          style={styles.button}
          onPress={() => onClick()}
        >
          <Text style={{color: "white"}}>Continue</Text>
        </Button>
      </View>
      
      
      <View style={styles.footer}></View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#9886C3"
  },

  header: {
    flexDirection: "row",
    height: 80
  },
  backIcon: {
    flex: 1,
    color: "white",
    paddingLeft: 10,
    textAlignVertical: "center"
  },
  title: {
    flex: 3,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: "#FFFFFF"
  },
  spacer: {
    flex: 1
  },

  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  subtitle: {
    height: 50,
    alignSelf: "center",
    fontSize: 24,
    padding: 10,
    margin: 16,
    marginTop: 80
  },
  input: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 16,
    marginTop: 0,
    fontSize: 16,
    backgroundColor: "#F2F1F6",
    borderRadius: 24,
    width: "85%",
    alignSelf: "center"
  },
  button: {
    marginVertical: 10,
    borderRadius: 30,
    width: "85%",
    height: 52,
    alignSelf: "center"
  },

  spinner: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }

});

export default InputPage;